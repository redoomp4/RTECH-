<script setup>
import { onMounted } from "vue";
import { supabase } from "@/config/supabase.js";

// Fungsi untuk menyimpan user Google ke tabel public.users di database
async function saveUserToDatabase(fullName, email, username) {
  // Cek apakah user sudah ada di database
  const { data: existing } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (!existing) {
    // User belum ada, simpan ke database
    await supabase
      .from('users')
      .insert([{ fullname: fullName, email, username, password: null }]);
  }
}

onMounted(async () => {
  // Karena detectSessionInUrl dimatikan, kita proses token dari URL secara manual
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);

  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (data?.session?.user) {
      const user = data.session.user;
      const fullName = user.user_metadata?.full_name || "Google User";
      const email = user.email;
      const username = email.split("@")[0];

      // Simpan ke localStorage
      localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
      localStorage.setItem("token", accessToken);

      // Simpan ke database Supabase
      await saveUserToDatabase(fullName, email, username);
      
      window.location.href = "/";
      return;
    } else {
      console.error("Gagal set session:", error);
    }
  }

  // Fallback: cek apakah sudah ada session aktif
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    const user = session.user;
    const fullName = user.user_metadata?.full_name || "Google User";
    const email = user.email;
    const username = email.split("@")[0];

    localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
    localStorage.setItem("token", session.access_token);

    // Simpan ke database Supabase
    await saveUserToDatabase(fullName, email, username);

    window.location.href = "/";
  } else {
    window.location.href = "/login";
  }
});
</script>

<template>
  <div class="text-center mt-20">
    Logging in with Google...
  </div>
</template>

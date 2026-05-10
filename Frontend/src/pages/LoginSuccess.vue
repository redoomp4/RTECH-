<script setup>
import { onMounted } from "vue";
import { supabase } from "@/config/supabase.js";

onMounted(async () => {
  // Karena detectSessionInUrl dimatikan, kita proses token dari URL secara manual
  const hash = window.location.hash.substring(1); // hapus tanda #
  const params = new URLSearchParams(hash);

  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");

  if (accessToken && refreshToken) {
    // Set session secara manual — ini BYPASS pengecekan "120 detik stale"
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (data?.session?.user) {
      const user = data.session.user;
      const fullName = user.user_metadata?.full_name || "Google User";
      const email = user.email;
      const username = email.split("@")[0];

      localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
      localStorage.setItem("token", accessToken);
      
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

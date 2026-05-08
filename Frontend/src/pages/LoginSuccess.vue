<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/config/supabase.js";

const router = useRouter();

onMounted(async () => {
  // Supabase otomatis memproses token di URL fragment saat halaman ini dimuat
  const { data: { session }, error } = await supabase.auth.getSession();

  if (session && session.user) {
    const user = session.user;
    
    // Ambil data Google dari user_metadata
    const fullName = user.user_metadata?.full_name || "Google User";
    const email = user.email;
    const username = email.split("@")[0]; // Buat username sederhana seperti di backend lama
    const token = session.access_token;

    // Simpan persis sesuai logic asli kamu
    localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
    localStorage.setItem("token", token);
    
    // Gunakan window.location.href agar halaman termuat ulang dan Navbar mendeteksi login
    window.location.href = "/";
  } else {
    // Jika gagal / tidak ada session
    console.error("Session tidak ditemukan", error);
    router.replace("/login");
  }
});
</script>

<template>
  <div class="text-center mt-20">
    Logging in with Google...
  </div>
</template>

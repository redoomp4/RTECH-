<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/config/supabase.js";

const router = useRouter();

onMounted(async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      alert("Error dari Supabase: " + error.message);
      window.location.href = "/login";
      return;
    }

    if (session && session.user) {
      const user = session.user;
      const fullName = user.user_metadata?.full_name || "Google User";
      const email = user.email;
      const username = email.split("@")[0]; 
      const token = session.access_token;

      localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
      localStorage.setItem("token", token);
      
      alert("Login Sukses! Menyimpan data dan memuat ulang halaman...");
      window.location.href = "/";
    } else {
      alert("Session kosong. Apakah env variables Vercel sudah benar?");
      window.location.href = "/login";
    }
  } catch (err) {
    alert("Terjadi kesalahan sistem: " + err.message);
    window.location.href = "/login";
  }
});
</script>

<template>
  <div class="text-center mt-20">
    Logging in with Google...
  </div>
</template>

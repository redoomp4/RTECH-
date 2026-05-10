<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/config/supabase.js";

const router = useRouter();
let authSubscription = null;

onMounted(() => {
  // Gunakan onAuthStateChange — cara paling andal menangkap login OAuth
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session && session.user) {
      const user = session.user;
      const fullName = user.user_metadata?.full_name || "Google User";
      const email = user.email;
      const username = email.split("@")[0];
      const token = session.access_token;

      // Simpan ke localStorage persis seperti logic asli
      localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
      localStorage.setItem("token", token);

      // Redirect ke homepage dengan full page reload
      window.location.href = "/";
    }
  });

  authSubscription = subscription;

  // Fallback: jika sudah ada session aktif (misalnya user refresh halaman ini)
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session && session.user) {
      const user = session.user;
      const fullName = user.user_metadata?.full_name || "Google User";
      const email = user.email;
      const username = email.split("@")[0];
      const token = session.access_token;

      localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
      localStorage.setItem("token", token);
      window.location.href = "/";
    }
  });
});

onUnmounted(() => {
  if (authSubscription) {
    authSubscription.unsubscribe();
  }
});
</script>

<template>
  <div class="text-center mt-20">
    Logging in with Google...
  </div>
</template>

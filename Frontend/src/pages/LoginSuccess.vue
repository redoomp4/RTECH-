<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  const email = params.get("email");
  const fullName = params.get("fullName");
  const token = params.get("token");

  if (username) {
    localStorage.setItem("user", JSON.stringify({ username, email, fullName }));
    localStorage.setItem("token", token);
    router.replace("/"); // redirect ke homepage
  }
});
</script>

<template>
  <div class="text-center mt-20">
    Logging in with Google...
  </div>
</template>

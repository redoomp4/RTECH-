<template>
  <div
    class="w-[90%] mx-auto sm:w-[450px] bg-white p-10 rounded-2xl shadow-xl new-password-card"
  >
    <!-- Back to Login -->
    <a href="/Login" class="relative text-sm text-green-600 font-medium group">
      Back to Login ➝
      <span
        class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"
      ></span>
    </a>

    <!-- Title -->
    <h1 class="text-4xl font-bold mt-2">Reset Password</h1>
    <p class="text-gray-500 mt-2">
      Masukkan password baru dan konfirmasi password
    </p>

    <!-- FORM -->
    <form @submit.prevent="handleReset" class="mt-6">
      <!-- New Password -->
      <label class="block text-sm font-semibold text-green-800">New Password</label>
      <input
        v-model="newPassword"
        type="password"
        placeholder="Masukkan password baru"
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />

      <!-- Confirm Password -->
      <label class="block text-sm font-semibold text-green-800 mt-4">Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Konfirmasi password baru"
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />

      <!-- Button -->
      <button
        type="submit"
        class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg mt-6 shadow hover:opacity-90 transition"
      >
        Reset Password
      </button>

      <!-- Error -->
      <p v-if="showError" class="text-red-600 mt-4 text-sm">
        {{ errorMessage }}
      </p>

      <!-- Success -->
     <p v-if="showSuccess" class="text-center text-sm mt-5 text-green-600">
  Password berhasil diubah! Silakan 
  <a href="/Login" class="relative font-medium text-green-700 group">
    log in
    <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
  </a>
</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const newPassword = ref("");
const confirmPassword = ref("");
const showError = ref(false);
const errorMessage = ref("");
const showSuccess = ref(false);

const handleReset = async () => {
  showError.value = false;
  errorMessage.value = "";
  showSuccess.value = false;

  if (newPassword.value !== confirmPassword.value) {
    showError.value = true;
    errorMessage.value = "Password dan konfirmasi harus sama!";
    return;
  }

  try {
    const userId = route.params.id;
    const res = await fetch(`http://localhost:3000/api/reset-password/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword: newPassword.value }),
    });

    const data = await res.json();

    if (data.success) {
      showSuccess.value = true;
      newPassword.value = "";
      confirmPassword.value = "";
    } else {
      showError.value = true;
      errorMessage.value = data.error || "Gagal mengubah password.";
    }
  } catch (err) {
    showError.value = true;
    errorMessage.value = "Terjadi kesalahan server.";
    console.error(err);
  }
};
</script>

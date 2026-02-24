<template>
  <div class="w-[90%] mx-auto sm:w-[450px] bg-white p-10 rounded-2xl shadow-xl forgot-password-card">
    <a href="/Login" class="relative text-sm text-green-600 font-medium group">
      Back to Login ➝
      <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <h1 class="text-4xl font-bold mt-2">Lupa Password</h1>
    <p class="text-gray-500 mt-2">Masukkan email dan username yang sudah terdaftar</p>

    <form @submit.prevent="handleVerify" class="mt-6">
      <label class="block text-sm font-semibold text-green-800">Email</label>
      <input v-model="email" type="email" placeholder="Masukkan Email" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <label class="block text-sm font-semibold text-green-800 mt-4">Username</label>
      <input v-model="username" type="text" placeholder="Masukkan Username" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <button type="submit" class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg mt-6 shadow hover:opacity-90 transition">
        Verifikasi
      </button>

      <p v-if="showError" class="text-red-600 mt-4 text-sm">Email atau Username tidak ditemukan</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      showError: false
    };
  },
  methods: {
    async handleVerify() {
      try {
        const res = await fetch("http://localhost:3000/api/check-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, username: this.username })
        });
        const data = await res.json();
        if (data.success) {
          window.location.href = `/reset-password/${data.userId}`;
        } else {
          this.showError = true;
        }
      } catch (err) {
        console.error(err);
        this.showError = true;
      }
    }
  }
};
</script>

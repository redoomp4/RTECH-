<template>
  <div
    class="w-[90%] mx-auto sm:w-[450px] bg-white p-10 rounded-2xl shadow-xl card-login"
  >
    <a href="/" class="relative text-sm text-green-600 font-medium group">
      Homepage ➝
      <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <h1 class="text-4xl font-bold mt-2">Masuk</h1>
    <p class="text-gray-500 mt-2">
      Masukkan username dan password anda untuk melakukan login
    </p>

    <form @submit.prevent="handleLogin" class="mt-6">
      <label class="block text-sm font-semibold text-green-800">Username</label>
      <input
        v-model="username"
        type="text"
        placeholder="Masukkan Username"
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        :disabled="loading"
      />

      <label class="block text-sm font-semibold text-green-800 mt-4">Password</label>
      <input
        v-model="password"
        type="password"
        placeholder="Masukkan Password"
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        :disabled="loading"
      />

      <div class="text-right mt-2">
        <a href="/forgot-password" class="relative text-sm text-green-600 font-medium group">
          Forgot Password
          <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <button
        :disabled="loading"
        type="submit"
        class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg mt-5 shadow hover:opacity-90 transition disabled:opacity-60"
      >
        <span v-if="!loading">Login</span>
        <span v-else>Loading...</span>
      </button>
    </form>

    <div class="flex items-center gap-3 my-6">
      <div class="flex-1 h-[1px] bg-gray-300"></div>
      <span class="text-gray-500 text-sm">Atau</span>
      <div class="flex-1 h-[1px] bg-gray-300"></div>
    </div>

    <button
      type="button"
      @click="redirectGoogle"
      class="w-full border-2 border-green-600 rounded-lg py-3 flex items-center justify-center gap-3 font-semibold hover:bg-green-50 transition"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-6" alt="google" />
      Continue with Google
    </button>

    <p class="text-center text-sm mt-5">
      Belum memiliki akun?
      <a href="/register" class="relative text-sm text-green-600 font-medium group">
        Daftar
        <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardLogin",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      if (!this.username || !this.password) {
        alert("Isi username dan password dulu.");
        return;
      }

      this.loading = true;
      try {
        const res = await axios.post("http://localhost:3000/api/login", {
          username: this.username,
          password: this.password
        });

        // Login berhasil
        const user = res.data.user;

        // Simpan user di localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Setup progress khusus per user
        if (!localStorage.getItem(`inProgressCourses_${user.username}`)) {
          localStorage.setItem(`inProgressCourses_${user.username}`, JSON.stringify([]));
        }
        if (!localStorage.getItem(`completedCourses_${user.username}`)) {
          localStorage.setItem(`completedCourses_${user.username}`, JSON.stringify([]));
        }

        this.$router.push("/"); // redirect ke home
      } catch (err) {
        // tangani error backend
        if (err.response && err.response.data && err.response.data.error) {
          alert(err.response.data.error);
        } else {
          alert("Login gagal — tidak dapat terhubung ke server.");
        }
      } finally {
        this.loading = false;
      }
    },
    redirectGoogle() {
      window.location.href = "http://localhost:3000/api/auth/google";
    },
  },
};
</script>

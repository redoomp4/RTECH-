<template>
  <div class="w-[90%] mx-auto sm:w-[500px] bg-white p-10 rounded-2xl shadow-xl card-register">
    <a href="/" class="relative text-sm text-green-600 font-medium group">
      Homepage ➝
      <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <h1 class="text-4xl font-bold mt-2">Daftar</h1>
    <p class="text-gray-500 mt-2">Lengkapi Form di bawah untuk membuat akun di Rtech</p>

    <form @submit.prevent="handleRegister" class="mt-6">
      <label class="block text-sm font-semibold text-green-800">Full Name</label>
      <input v-model="fullName" type="text" placeholder="Masukkan Nama Lengkap" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <label class="block text-sm font-semibold text-green-800 mt-4">Email</label>
      <input v-model="email" type="email" placeholder="Masukkan Email" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <label class="block text-sm font-semibold text-green-800 mt-4">Username</label>
      <input v-model="username" type="text" placeholder="Masukkan Username" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <label class="block text-sm font-semibold text-green-800 mt-4">Password</label>
      <input v-model="password" type="password" placeholder="Masukkan Password" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <label class="block text-sm font-semibold text-green-800 mt-4">Konfirmasi Password</label>
      <input v-model="confirm" type="password" placeholder="Masukkan Konfirmasi Password" required
        class="w-full border rounded-md p-3 mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"/>

      <button type="submit"
        class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg mt-6 shadow hover:opacity-90 transition">
        Daftar
      </button>
    </form>

    <div class="flex items-center gap-3 my-6">
      <div class="flex-1 h-[1px] bg-gray-300"></div>
      <span class="text-gray-500 text-sm">Atau</span>
      <div class="flex-1 h-[1px] bg-gray-300"></div>
    </div>

    <button type="button" @click="redirectGoogle"
      class="w-full border-2 border-green-600 rounded-lg py-3 flex items-center justify-center gap-3 font-semibold hover:bg-green-50 transition">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-6" alt="google" />
      Continue with Google
    </button>

    <p class="text-center text-sm mt-5">
      Memiliki akun ?
      <a href="/Login" class="relative text-sm text-green-600 font-medium group">
        log in
        <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
 data() {
  return {
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirm: "" // tambahkan ini
  };
},
methods: {
 handleRegister() {
  if (this.password !== this.confirm) {
    return alert("Password dan konfirmasi harus sama!");
  }

  fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password
    }),
    credentials: "include" // penting kalau nanti pakai session/cookie
  })
  .then(res => res.json())
  .then(data => {
    console.log("Register Response:", data);
    alert(data.message || data.error);
    if (data.message) window.location.href = "/login"; // redirect ke login
  })
  .catch(err => {
    console.error("Register Error:", err);
    alert("Gagal register, cek console untuk detail.");
  });
},
  redirectGoogle() {
    window.location.href = "http://localhost:3000/api/auth/google";
  }
}
};
</script>
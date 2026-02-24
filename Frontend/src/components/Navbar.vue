<template>
<nav 
  class="w-full fixed top-0 left-0 z-50 transition-all duration-300"
  :class="isScrolled ? 'bg-white/30 backdrop-blur-md border-b border-white/20' : 'bg-white shadow-md border-b border-gray-200'"
>
  <div :class="isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-white'" class="transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="../assets/image/rtech.png" alt="rtech" class="h-9 relative top-[-5px]" />
      </div>

      <!-- Desktop Menu -->
      <ul class="desktop:flex hidden items-center gap-20 text-gray-800 font-medium">
        <li><router-link to="/" class="hover:text-green-600 cursor-pointer">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-green-600 cursor-pointer">About</router-link></li>
        <li><router-link to="/course" class="hover:text-green-600 cursor-pointer">Course</router-link></li>
        <li><router-link to="/company" class="hover:text-green-600 cursor-pointer">Company</router-link></li>
        <li><router-link to="/contact" class="hover:text-green-600 cursor-pointer">Contact</router-link></li>

        <li class="flex items-center gap-8 ml-16 font-medium text-gray-800">
          <div class="h-7 w-px bg-gray-300 relative left-[-70px]"></div>
          <template v-if="!isLoggedIn">
            <router-link to="/register" class="hover:text-green-600 cursor-pointer relative left-[-40px]">Register</router-link>
            <router-link to="/login" class="hover:text-green-600 cursor-pointer relative left-[-30px]">Login</router-link>
          </template>
          <template v-else>
            <span class="text-green-700 relative left-[-40px]">Halo, {{ firstName }}</span>
            <button @click="logout" class="hover:text-green-600 cursor-pointer relative left-[-30px]">Logout</button>
          </template>
        </li>
      </ul>

      <!-- Mobile Button -->
      <button @click="open = !open" class="desktop:hidden text-gray-700 text-3xl">☰</button>
    </div>

    <!-- Mobile Dropdown -->
    <div v-show="open" class="desktop:hidden px-6 pb-4 bg-white/90 backdrop-blur-md transition-all">
      <ul class="flex flex-col gap-4 text-gray-800 font-medium">
        <li><router-link to="/" class="hover:text-green-600 cursor-pointer">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-green-600 cursor-pointer">About</router-link></li>
        <li><router-link to="/course" class="hover:text-green-600 cursor-pointer">Course</router-link></li>
        <li><router-link to="/company" class="hover:text-green-600 cursor-pointer">Company</router-link></li>
        <li><router-link to="/contact" class="hover:text-green-600 cursor-pointer">Contact</router-link></li>

        <div class="h-px bg-gray-300 my-2"></div>

        <template v-if="!isLoggedIn">
          <li><router-link to="/register" class="hover:text-green-600 cursor-pointer">Register</router-link></li>
          <li><router-link to="/login" class="hover:text-green-600 cursor-pointer">Login</router-link></li>
        </template>
        <template v-else>
          <li class="flex items-center justify-between">
            <span class="text-green-700">Halo, {{ firstName }}</span>
            <button @click="logout" class="hover:text-green-600">Logout</button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const isScrolled = ref(false)

// reactive user dari localStorage
const user = ref(null)

// cek apakah user sudah login
const isLoggedIn = computed(() => !!user.value)

// ambil nama depan
const firstName = computed(() => {
  if (!user.value?.username) return ''
  return user.value.username.split(' ')[0]
})

// logout
const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  user.value = null
  window.location.href = '/'
}

// fungsi scroll navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// inisialisasi user saat mount
onMounted(() => {
  const saved = localStorage.getItem('user')
  if (saved) user.value = JSON.parse(saved)

  // scroll listener
  window.addEventListener('scroll', handleScroll)

  // storage listener supaya navbar update otomatis jika login di tab lain
  window.addEventListener('storage', (e) => {
    if (e.key === 'user') {
      user.value = e.newValue ? JSON.parse(e.newValue) : null
    }
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


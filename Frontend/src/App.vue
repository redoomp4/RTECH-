<script setup>
import { onMounted } from 'vue';

// Import gambar agar Vite memproses path-nya
import hero1 from '@/assets/image/hero 1.png';
import hero3 from '@/assets/image/hero3.png';
import hero4 from '@/assets/image/hero4.png';
import cert from '@/assets/image/certificate.png';

onMounted(() => {
  // Daftar gambar yang ingin di-load di background
  const imagesToPreload = [hero1, hero3, hero4, cert];

  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});
</script>

<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

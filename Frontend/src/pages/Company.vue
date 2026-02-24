<template>
  <Navbar />

  <div
    :style="{ backgroundImage: `url(${hero3})` }"
    class="w-full min-h-screen bg-cover bg-center
           text-white text-center flex flex-col items-center
           pt-[100px] pb-20
           lg:pt-[100px]
           md:pt-[80px]
           sm:pt-10"
  >
    <!-- TITLE -->
    <section class="-mt-4"> <!-- naikkan dikit -->
      <h3
        class="font-[Katibeh] text-[24px] md:text-[32px] sm:text-[20px] tracking-wide drop-shadow-md mb-2"
      >
        Our Company
      </h3>

      <h1
        class="font-[Katibeh] font-bold text-green-200 drop-shadow-md
               text-[48px] md:text-[64px] sm:text-[36px] -mt-8"
      >
        Meet our people
      </h1>
    </section>

    <!-- Panggil CardCompany -->
    <section class="mt-8 w-full px-5 md:px-12">
      <CardCompany small />
    </section>
  </div>

  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CardCompany from "@/components/CardCompany.vue";
import hero3 from "@/assets/image/hero3.png";
</script>

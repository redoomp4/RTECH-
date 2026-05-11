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
    <section class="mt-4 px-4">
      <h3
        class="font-['Poppins'] font-bold text-[28px] md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] mb-2 md:mb-4 text-green-100"
      >
        Our Company
      </h3>

      <h1
        class="font-['Poppins'] font-bold text-green-300 drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)]
               text-[50px] md:text-6xl lg:text-7xl -mt-3 md:mt-0 leading-tight"
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

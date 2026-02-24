<template>
  <Navbar />

  <!-- HERO -->
  <div
    class="relative text-white bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgHero})` }"
  >
    <section
      class="flex flex-col lg:flex-row justify-between items-center gap-10
             px-10 py-28 lg:px-28 lg:py-32"
    >
      <!-- LEFT TEXT -->
      <div class="lg:w-[45%] text-center lg:text-left">
        <h3
          class="text-[30px] font-normal font-[Katibeh]
                 mb-[-10px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        >
          Contact Us
        </h3>

        <h1
          class="text-[60px] font-semibold font-[Katibeh] text-green-200
                 drop-shadow-[2px_2px_4px_rgba(255,255,255,0.5)] leading-none"
        >
          Get better care
        </h1>

        <p class="text-[17px] leading-relaxed mt-4 text-justify">
          Gratitude to the Network Engineers, Cloud Computing Experts, and
          System Security Guardians for your dedication in building secure
          digital systems and protecting data.
        </p>
      </div>

      <!-- RIGHT LOGO -->
      <div class="flex flex-col items-center">
        <div
          class="w-[380px] h-[380px] rounded-full bg-[#1b1b1b]
                 flex items-center justify-center p-10 overflow-hidden"
        >
          <img
            src="../assets/image/logo 15.png"
            class="object-contain w-full"
          />
        </div>

        <a
          href="https://wa.me/6281385701722?text=Halo%20saya%20ingin%20bertanya%20tentang%20RTech%20Academy"
          target="_blank"
          class="mt-6 px-10 py-3 bg-[#2a2a2a] text-white
                 rounded-full text-[16px]"
        >
          Contact Now →
        </a>
      </div>
    </section>
  </div>

  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";


import bgHero from "../assets/image/hero4.png";

export default {
  name: "ContactPage",
  components: { Navbar, Footer },
  data() {
    return {
      bgHero,
    };
  },
};
</script>

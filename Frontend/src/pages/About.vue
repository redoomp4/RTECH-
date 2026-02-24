<template>
  <Navbar />

  <div class="w-full min-h-screen pt-[90px] font-[Poppins]">

    <!-- ABOUT SECTION -->
    <section
      class="
        flex justify-between items-center 
        px-[8%] py-[60px] gap-[60px]

        max-[1024px]:px-[5%] 
        max-[1024px]:py-[50px]
        max-[1024px]:gap-[40px]

        max-[640px]:flex-col-reverse 
        max-[640px]:text-center 
        max-[640px]:px-5 
        max-[640px]:py-10
      "
    >

      <!-- TEXT -->
      <div class="w-[55%] max-[640px]:w-full">
        <h1
          class="
            text-[40px] font-bold mb-5
            max-[1024px]:text-[34px]
            max-[640px]:text-[30px]
          "
        >
          About Rtech Academy
        </h1>

        <p
          class=" text-justify
            text-[17px] leading-[1.7] text-[#444]
            max-[1024px]:text-[22px]
            max-[640px]:text-[15px]
          "
        >
          RTech Academy is a technology education platform established in November 2023.
          The academy focuses on developing skills in IT Infrastructure, Cloud Computing,
          and Cyber Security, aiming to support students, graduates, and professionals in
          enhancing the technical competencies required in today's digital industry.
          Through practical learning, structured curriculum, and guidance from experienced
          instructors, RTech Academy is committed to shaping digital talent that is ready 
          to compete and capable of facing future technological challenges.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="flex justify-center">
        <img
          src="../assets/image/rtech.png"
          alt="Rtech Logo"
          class="
            w-[420px] object-contain

            max-[1024px]:w-[350px]
            max-[640px]:w-[260px]
          "
        />
      </div>

    </section>

    <!-- SKILLS SECTION -->
    <section
      class="
        flex justify-center items-center text-center 
        gap-[80px] py-[40px] pb-[100px]

        max-[1024px]:flex-col 
        max-[1024px]:gap-[35px]
        max-[1024px]:pb-[70px]

        max-[640px]:flex-col
        max-[640px]:gap-[35px]
        max-[640px]:pb-[70px]
      "
    >

      <!-- EACH SKILL -->
      <div
        class="
          flex flex-col items-center transition-all duration-200
          hover:-translate-y-1
        "
      >
        <div class="w-full h-[240px] flex items-center justify-center overflow-hidden 
          max-[1024px]:h-[300px]
          max-[640px]:h-[180px]
        ">
          <img src="../assets/image/logo 14.png" class="h-[90%] object-contain" />
        </div>

        <h3
          class="
            text-[20px] font-semibold mt-2
            max-[1024px]:text-[25px]
            max-[640px]:text-[18px]
          "
        >
          Network Engineers
        </h3>
      </div>

      <div
        class="
          flex flex-col items-center transition-all duration-200
          hover:-translate-y-1
        "
      >
        <div class="w-full h-[240px] flex items-center justify-center overflow-hidden 
          max-[1024px]:h-[300px]
          max-[640px]:h-[180px]
        ">
          <img src="../assets/image/logo 13.png" class="h-[90%] object-contain" />
        </div>

        <h3
          class="
            text-[20px] font-semibold mt-2
            max-[1024px]:text-[25px]
            max-[640px]:text-[18px]
          "
        >
          Cloud Computing
        </h3>
      </div>

      <div
        class="
          flex flex-col items-center transition-all duration-200
          hover:-translate-y-1
        "
      >
        <div class="w-full h-[240px] flex items-center justify-center overflow-hidden 
          max-[1024px]:h-[300px]
          max-[640px]:h-[180px]
        ">
          <img src="../assets/image/logo 7.png" class="h-[90%] object-contain" />
        </div>

        <h3
          class="
            text-[20px] font-semibold mt-2
            max-[1024px]:text-[25px]
            max-[640px]:text-[18px]
          "
        >
          Cyber Security
        </h3>
      </div>

    </section>

  </div>

  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutPage',
  components: { Navbar, Footer },
}
</script>

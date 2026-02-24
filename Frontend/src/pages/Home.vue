<template>
  <Navbar />

  <div class="w-full">

    <section 
  class="
    relative w-full overflow-hidden pt-16
    min-h-screen
    md:h-screen         
  "
>
  <img
    src="../assets/image/hero 1.png"
    class="absolute inset-0 w-full h-full object-cover"
    alt="hero"
  />

  <div class="absolute inset-0 flex items-center bg-black/20 px-[50px]">

    <div 
      class="
        text-white 
        mt-[20px]
        -translate-y-[180px]     
        md:-translate-y-[50px]    
        sm:translate-y-[150px]   
      "
    >

      <!-- HERO TEXT -->
      <h1 
        class="
          font-bold text-white leading-tight

          text-[30px]       
          md:text-[60px]     
          sm:text-[45px]     
        "
      >
        WELCOME TO <br />
        THE REDOX <span class="text-green-100">TECHNOLOGY</span>
      </h1>

      <!-- HERO PARAGRAPH -->
      <p 
        class="
          mt-3 text-white

          text-[20px]      
          md:text-[36px]    
          sm:text-[20px]     
        "
      >
        Technology Academy & Synchronizing the Cloudscape.
      </p>

    </div>
  </div>
</section>

    <!-- 3 FEATURE CARDS -->
    <section class="py-12 bg-gradient-to-r from-green-50 to-white">
      <div class="max-w-6xl mx-auto px-6 flex flex-row gap-10">
        <CardHome />
      </div>
    </section>

    <!-- BENEFIT SECTION -->
    <section class="py-20 bg-gradient-to-r from-green-50 to-white">
      <div class="max-w-6xl mx-auto px-6">
        
        <h2 class="text-3xl font-bold text-center mb-10">
          Benefit Untuk Kamu dari RTECH
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div class="space-y-5">
            <BenefitItem title="Materi yang Selalu Mengikuti Tren Teknologi"
              content="Materi selalu update mengikuti perkembangan industri modern." />
            <BenefitItem title="Mentor dari Perusahaan Terkemuka"
              content="Belajar langsung dari praktisi di perusahaan besar." />
            <BenefitItem title="Sertifikat Resmi Sebagai Bukti Kompetensi"
              content="Tersedia sertifikat resmi untuk meningkatkan peluang karir." />
            <BenefitItem title="Program Penyaluran Kerja & Magang"
              content="Dapatkan peluang karir dan magang setelah selesai belajar." />
            <BenefitItem title="Hands-On Lab"
              content="Praktek langsung menggunakan tools dan simulasi industri." />
          </div>

          <div class="flex justify-center items-center">
            <img src="../assets/image/logo 11.png" class="w-[70%]" alt="benefit" />
          </div>

        </div>
      </div>
    </section>

    
    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardHome from "@/components/CardHome.vue";
import BenefitItem from "@/components/BenefitItem.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Navbar, CardHome, BenefitItem, Footer }
};
</script>

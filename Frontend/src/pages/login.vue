<template>
  <div>
    <!-- NAVBAR -->
    <Navbar />

    <!-- CONTENT -->
    <section class="py-20 bg-gradient-to-r from-green-50 to-white">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        <!-- Left Image -->
        <div class="flex justify-center items-center relative">
          <img 
            src="../assets/image/logo 5.png"
            class="w-[70%] rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            alt="logo"
          />
        </div>

        <!-- Card Login -->
        <div class="flex justify-end">
          <CardLogin />
        </div>

      </div>
    </section>
  </div>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardLogin from "@/components/CardLogin.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  components: {
    Navbar,
    CardLogin,
    Footer,
  },
};
</script>

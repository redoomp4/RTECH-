<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <section class="py-20 bg-gradient-to-r from-green-50 to-white">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        <!-- Left Image / Logo -->
        <div class="flex justify-center items-center">
          <img
            src="../assets/image/logo 2.png"
            class="w-[70%] rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            alt="logo"
          />
        </div>

        <!-- Card Reset Password -->
        <div class="flex justify-end">
          <CardNewPassword />
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CardNewPassword from "@/components/CardNewPassword.vue";

export default {
  name: "NewPassword",
  components: {
    Navbar,
    Footer,
    CardNewPassword,
  },
};
</script>

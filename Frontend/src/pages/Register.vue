  <template>
    <div>
      <!-- NAVBAR -->
      <Navbar />

      <!-- CONTENT -->
      <section class="py-20 bg-gradient-to-r from-green-50 to-white">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

       <!-- Left Image -->
<div class="flex justify-center items-center mt-12 md:mt-0 md:-translate-y-20">
  <img
    src="../assets/image/logo 1.png"
    class="w-[70%] rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
    alt="logo"
  />
</div>




          <!-- Register Card -->
          <div class="flex justify-end">
            <CardRegister />
          </div>

        </div>
      </section>

      <!-- FOOTER -->
      <Footer />
    </div>
  </template>

  <script>
  import Navbar from "@/components/Navbar.vue";
  import CardRegister from "@/components/CardRegister.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "Register",
    components: {
      Navbar,
      CardRegister,
      Footer,
    },
  };
  </script>

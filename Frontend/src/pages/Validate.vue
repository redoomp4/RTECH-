    <template>
      <div class="bg-gradient-to-br from-white to-green-200 md:min-h-0 min-h-screen">


        <!-- NAVBAR -->
        <Navbar />

        <!-- CONTENT WRAPPER -->
        <div class="px-4 py-10 md:px-10 md:py-12 lg:px-16 lg:py-20 mt-16">
          <div
            class="max-w-6xl mx-auto bg-white/40 backdrop-blur-md rounded-3xl 
                  p-6 md:p-8 lg:p-12 
                  grid md:grid-cols-2 gap-8 md:gap-10 shadow-xl"
          >

            <!-- LEFT TEXT -->
            <div class="mt-6 md:mt-0 lg:mt-10">
              <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Form Verifikasi</h1>

              <p class="text-gray-700 leading-relaxed mb-4 md:mb-5">
                Peserta yang memiliki sertifikat adalah peserta yang telah lulus dari
                pelatihan dengan mengikuti dan menyelesaikan seluruh materi dan tugas.
              </p>

              <p class="text-gray-700 leading-relaxed">
                Halaman verifikasi sertifikat digunakan untuk memvalidasi Sertifikat.
                Masukkan nama panjang pada sertifikat dan nomor sertifikat pada form berikut.
              </p>
            </div>

            <!-- RIGHT FORM -->
            <div class="space-y-6 md:space-y-8 mt-10 md:mt-4 lg:mt-16">
              <!-- INPUT NOMOR SERTIFIKAT -->
              <input
                v-model="certificateId"
                type="text"
                placeholder="Input Nomor Sertifikat"
                class="w-full p-4 md:p-5 rounded-xl border border-gray-300 shadow-sm 
                      focus:ring-green-400 focus:ring-2"
              />

              <!-- INPUT NAMA PANJANG -->
              <input
                v-model="username"
                type="text"
                placeholder="Input Username"
                class="w-full p-4 md:p-5 rounded-xl border border-gray-300 shadow-sm 
                      focus:ring-green-400 focus:ring-2"
              />

              <!-- BUTTON -->
              <button
                @click="validateCertificate"
                class="bg-green-500 hover:bg-green-600 text-white font-medium 
                      py-3 px-7 rounded-xl shadow-md"
              >
                Verifikasi →
              </button>

              <!-- ERROR BOX -->
              <div
  v-if="showErrorBox"
  class="bg-yellow-100 border border-yellow-300 p-4 md:p-5 rounded-xl 
        flex gap-4 items-start"
>

                <span class="text-yellow-700 text-xl">⚠</span>
                <div>
                  <h3 class="font-semibold text-yellow-800">Tidak Ditemukan!</h3>
                  <p class="text-yellow-800 text-sm">
                    Nomor sertifikat dan nama panjang tidak ada di database kami.
                  </p>
                </div>
              </div>

              <!-- SUCCESS BOX -->
              <div
                v-if="showSuccess"
                class="bg-green-100 border border-green-300 p-4 md:p-5 rounded-xl 
                      flex gap-4 items-start"
              >
                <span class="text-green-700 text-xl">✔</span>
                <div>
                  <h3 class="font-semibold text-green-800">Valid!</h3>
                  <p class="text-green-800 text-sm">
                    Sertifikat valid dan terdaftar di sistem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER -->
        
      </div>
      <Footer/>
    </template>

 <script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import axios from "axios";

// FORM VALUE
const certificateId = ref("");
const username = ref("");

// STATUS BOX
const showErrorBox = ref(false);
const showSuccess = ref(false);

// DATA RESULT (OPTIONAL)
const certificateData = ref(null);

async function validateCertificate() {
  showSuccess.value = false;
  showErrorBox.value = false;

  try {
    const res = await axios.post("http://localhost:3000/api/validate-certificate", {
      certificate_code: certificateId.value,
      username: username.value,
    });

    if (res.data.valid) {
      certificateData.value = res.data.certificate;
      showSuccess.value = true;
    } else {
      showErrorBox.value = true;
    }

  } catch (err) {
    showErrorBox.value = true;
    console.log("FRONTEND ERROR:", err);
  }
}

</script>

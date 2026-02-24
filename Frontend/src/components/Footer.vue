<template>
  <footer class="w-full bg-white border-t mt-10">
    <div class="max-w-6xl mx-auto px-6 py-12">

      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Logo + Deskripsi -->
        <div>
          <img src="../assets/image/rtech.png" alt="rtech" class="w-60">

          <p class="text-gray-600 text-sm mt-3">
            Tempat belajar untuk calon praktisi dengan materi
            sesuai standar industri dan harga terjangkau.
          </p>

          <!-- Social Icons -->
          <div class="flex gap-4 mt-4">

            <!-- YouTube -->
            <a href="https://youtube.com/@rdhoalfrd" target="_blank" class="w-7 h-7 fill-current text-gray-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7">
                <path d="M19.615 3.184A2.983 2.983 0 0 0 17.5 2H6.5a2.983 2.983 0 0 0-2.115.816A3.014 3.014 0 0 0 3.569 4.9 32.775 32.775 0 0 0 3 12c0 2.5.216 4.74.569 7.1a3.014 3.014 0 0 0 .816 1.716A2.983 2.983 0 0 0 6.5 21h11a2.983 2.983 0 0 0 2.115-.816 3.014 3.014 0 0 0 .816-1.716A32.775 32.775 0 0 0 21 12c0-2.5-.216-4.74-.569-7.1a3.014 3.014 0 0 0-.816-1.716zM10 15V9l5 3-5 3z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com/rdhoalfrd/" target="_blank" class="w-7 h-7 fill-current text-gray-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" class="w-7 h-7">
                <path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm10 2c2 0 3 1 3 3v10c0 2-1 3-3 3H7c-2 0-3-1-3-3V7c0-2 1-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/muhridhoalfarod" target="_blank" class="w-7 h-7 fill-current text-gray-500 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" class="w-7 h-7">
                <path d="M6 8H3V21h3V8zM4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zM21 21h-3v-6c0-1.2-.3-2-1.5-2s-2 1-2 2v6h-3V8h3v2s1-2 3.5-2 3.5 1.8 3.5 4V21z"/>
              </svg>
            </a>
          </div>

          <!-- Button WhatsApp -->
<a
  href="https://wa.me/6281385701722?text=Halo%20saya%20ingin%20bertanya%20tentang%20RTech%20Academy"
  target="_blank"
  class="mt-6 inline-block bg-white border rounded-full px-5 py-2 text-sm shadow hover:bg-gray-100"
>
  Contact Now →
</a>

        </div>

        <!-- Produk & Layanan -->
        <div>
          <h3 class="font-semibold mb-3">Produk & Layanan</h3>
          <ul class=" link-underline space-y-2 text-gray-600 text-sm">
            <li><a href="/Course" class="hover:text-green-600">Course</a></li>
            <li><a href="/Company" class="hover:text-green-600">Partnership</a></li>
            <li><a href="/Validate" class="hover:text-green-600">Cek Validasi Sertifikat</a></li>
          </ul>
        </div>

        <!-- Informasi -->
        <div>
          <h3 class="font-semibold mb-3">Informasi</h3>
          <ul class=" link-underline space-y-2 text-gray-600 text-sm">
            <li><a href="/Contact" class="hover:text-green-600">Kontak</a></li>
            <li><a href="/About" class="hover:text-green-600">Tentang Kami</a></li>
          </ul>
        </div>

        <!-- Hubungi Kami -->
        <div>
          <h3 class="font-semibold mb-3">Hubungi Kami</h3>
          <ul class=" link-underline space-y-2 text-gray-600 text-sm">
            <li>Phone : +62 813-8570-1722</li>
            <li>Email : muhridhoalfarod@gmail.com</li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div class="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© 2025 rtech. All rights reserved.</p>
        <img src="../assets/image/rtech.png" class="w-40 opacity-70" />
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterRtech"
};
</script>

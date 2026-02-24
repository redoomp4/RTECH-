<template>
<section class="w-full flex justify-center mt-10">
  <div class="flex flex-wrap gap-24 justify-center mx-auto text-center">

    <!-- CARD 1 -->
    <router-link
  to="/course" class="p-6 rounded-2xl border border-grey/80 bg-white/30 
                hover:border-green-600 hover:scale-[1.03]
                transition-all cursor-pointer backdrop-blur-md shadow-sm
                w-72">
      <div class="w-[120px] h-[120px] mx-auto flex items-center justify-center">
        <img src="../assets/image/logo 4.png" class="w-[120px] h-[100px] object-contain" />
      </div>

      <h3 class="text-xl font-semibold mt-3">IT Infrastructure</h3>
      <p class="text-gray-600 text-sm mt-1">
        Learn about servers, networking, and enterprise systems.
      </p>
    </router-link>

    <!-- CARD 2 -->
    <router-link
  to="/course" class="p-6 rounded-2xl border border-grey/80 bg-white/30 
                hover:border-green-600 hover:scale-[1.03]
                transition-all cursor-pointer backdrop-blur-md shadow-sm
                w-72">
      <div class="w-[120px] h-[120px] mx-auto flex items-center justify-center">
        <img src="../assets/image/logo 3.png" class="w-full h-full object-contain" />
      </div>

      <h3 class="text-xl font-semibold mt-3">Cloud Computing</h3>
      <p class="text-gray-600 text-sm mt-1">
        Manage scalable cloud platforms and distributed systems.
      </p>
    </router-link>

    <!-- CARD 3 -->
    <router-link
  to="/course" class="p-6 rounded-2xl border border-grey/80 bg-white/30 
                hover:border-green-600 hover:scale-[1.03]
                transition-all cursor-pointer backdrop-blur-md shadow-sm
                w-72">
      <div class="w-[120px] h-[120px] mx-auto flex items-center justify-center">
        <img src="../assets/image/logo 10.png" class="w-full h-full object-contain" />
      </div>

      <h3 class="text-xl font-semibold mt-3">Cyber Security</h3>
      <p class="text-gray-600 text-sm mt-1">
        Protect information systems from threats and vulnerabilities.
      </p>
    </router-link>

  </div>
</section>
</template>
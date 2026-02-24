<template>
  <router-link
    :to="'/Course/' + id"
    class="group w-[275px] min-h-[420px] bg-white rounded-[32px]
           overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)]
           flex flex-col relative
           transition-transform duration-200
           hover:scale-[1.03] no-underline text-black"
  >
    <!-- Thumbnail -->
    <div class="relative w-full h-[180px]">
      <img :src="image" alt="Course Banner"
           class="w-full h-full object-cover" />

      <!-- Discount badge -->
      <div
        class="absolute bottom-[-18px] right-5 w-[60px] h-[60px]
               bg-[#65df89e9] rounded-full flex flex-col
               items-center justify-center
               text-white font-bold text-[12px]
               shadow-[0_3px_8px_rgba(36,235,36,0.226)] leading-[14px]"
      >
        -{{ discount }}%
        <br />Off
      </div>
    </div>

    <!-- Content -->
    <div class="px-[22px] py-[20px] flex flex-col gap-3">
      <div class="text-[14px] font-bold">
        ⭐ {{ rating }}
        <span class="text-[12px] opacity-60">
          ({{ reviews }} Reviews)
        </span>
      </div>

      <h3 class="text-[20px] font-extrabold leading-[1.2]">
        {{ title }}
      </h3>

      <div class="flex gap-[6px] text-[12px] opacity-70">
        <span>{{ level }}</span>
        <span>•</span>
        <span>{{ modules }} Modules</span>
        <span>•</span>
        <span>{{ students }} Students</span>
      </div>

      <!-- Description (Clamp 3 line effect) -->
      <p
        class="text-[13px] opacity-70 leading-[1.4]
               overflow-hidden text-ellipsis 
               max-h-[4.2em]"
      >
        {{ description }}
      </p>
    </div>

    <!-- Hover line bottom -->
    <div
      class="absolute bottom-0 left-1/2 h-[4px] bg-[#36b449] rounded-[4px]
             w-0 group-hover:w-[70%]
             transition-all duration-300
             -translate-x-1/2"
    />
  </router-link>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    id: Number,
    image: String,
    rating: String,
    reviews: String,
    title: String,
    level: String,
    modules: String,
    students: String,
    description: String,
    discount: String
  }
};
</script>

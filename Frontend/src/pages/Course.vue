<template>
  <Navbar />

  <div class="bg-gradient-to-b from-white to-green-50 min-h-screen pb-32">
    <div class="max-w-6xl mx-auto pt-24 px-6">

      <!-- TITLE + SEARCH -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>
          <h1 class="text-4xl font-bold">Course</h1>
          <p class="text-gray-600 mt-4 text-lg leading-relaxed">
            Semua course di Rtech akan membuat skill kamu <br>
            bertambah. Jadi lebih mahir sekarang!
          </p>
        </div>

        <!-- SEARCH + BUTTON -->
        <div class="flex items-center gap-4 mt-14 justify-end">
          <div class="flex items-center bg-white px-4 py-2 rounded-full shadow w-[260px]">
            <span class="text-gray-400 mr-2">🔍</span>
            <input
              v-model="search"
              type="text"
              placeholder="Cari Course"
              class="flex-1 outline-none text-sm"
            />
          </div>

          <button
            @click="selectedCategory = 'all'"
            class="px-6 py-2 rounded-full shadow text-gray-700 font-medium
                   border border-gray-300 bg-white
                   hover:border-green-600 hover:scale-[1.05]
                   transition-all cursor-pointer"
            :class="selectedCategory === 'all' ? 'border-green-600 scale-[1.05]' : ''"
          >
            Semua Course
          </button>
        </div>

      </div>

      <!-- CATEGORY WIDGET -->
      <WidgetType @select="setCategory" />

      <!-- COURSE CARDS -->
     <div
  class="grid 
         phone:grid-cols-1
         ipad:grid-cols-2
         desktop:grid-cols-3
         gap-8 mt-20
         w-full
         justify-items-center mx-auto"
>
        <CourseCard
          v-for="(c, i) in filteredCourses"
          :key="i"
          :id="c.id"
          :image="c.image"
          :rating="c.rating"
          :reviews="c.reviews"
          :title="c.title"
          :level="c.level"
          :modules="c.modules"
          :students="c.students"
          :description="c.description"
          :discount="c.discount"
          :courseType="c.type"
          @clickCourse="goToDetail"
        />

      </div>

    </div>
  </div>

  <Footer />
</template>

<script>
import CourseCard from "@/components/CourseCard.vue";
import Navbar from "@/components/Navbar.vue";
import WidgetType from "@/components/WidgedType.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "CoursePage",
  components: { CourseCard, Navbar, WidgetType, Footer },

  data() {
    return {
      search: "",
      selectedCategory: "all",

      courses: [
        {
          id: 1,
          image: new URL('@/assets/image/banner.jpg', import.meta.url).href,
          rating: "4.8",
          reviews: "30",
          title: "Linux System Administration",
          level: "Beginner",
          modules: "1",
          students: "39",
          description: "In this course, you will learn the inner workings of Ubuntu-based Linux systems, from basic management to advanced configuration. Gain a deep understanding of all the necessary tools to efficiently manage and build production-ready Linux infrastructure.",
          discount: "100",
          category: "SysAdmin",
          type: "Open"
        },
        {
          id: 2,
          image: new URL('@/assets/image/banner2.jpg', import.meta.url).href,
          rating: "4.9",
          reviews: "100",
          title: "Cybersecurity Fundamentals",
          level: "Beginner",
          modules: "1",
          students: "120",
          description: "In this course, you will explore the core principles of modern cybersecurity, from understanding digital threats to implementing effective defense strategies. Build a strong foundational skill set in securing systems, networks, and data, preparing you to handle real-world security challenges with confidence.",
          discount: "100",
          category: "Cyber Security",
          type: "Open"
        },
      ]
    };
  },

  computed: {
    filteredCourses() {
      return this.courses.filter(c => {
        const matchCategory =
          this.selectedCategory === "all" ||
          c.category.toLowerCase() === this.selectedCategory.toLowerCase();

        const matchSearch = c.title.toLowerCase().includes(this.search.toLowerCase());

        return matchCategory && matchSearch;
      });
    }
  },

  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    },

    goToDetail(id) {
      this.$router.push(`/course/${id}`);
    }
  }
};
</script>

  <template>
    <div>
      <Navbar />

      <div class="min-h-screen bg-gradient-to-br from-green-50 to-white pt-28 pb-32">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

          <!-- LEFT CONTENT -->
          <div class="mt-6">
            <h1 class="text-5xl font-extrabold mb-6">{{ course.title }}</h1>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">{{ course.longDesc }}</p>

            <div class="flex items-center gap-3 mt-6">
              <img src="@/assets/image/rtech.png" class="w-25 h-10 object-contain" />
              <div class="flex flex-col justify-center mt-2">
                <p class="text-gray-800 font-semibold text-lg leading-tight">
                  Creator Rtech Academy dalam {{ course.category }}
                </p>
              </div>
            </div>

            <div class="mt-8 flex items-center gap-3 text-lg">
              ⭐ <span class="font-bold">{{ course.rating }}</span>
              <span class="text-gray-600">{{ course.students }} student</span>
            </div>
          </div>

          <!-- RIGHT CARD -->
          <div class="flex justify-center lg:justify-start ">
            <CardCourseInside
    :type="course.status"
    :banner="course.image"
    :students="course.students"
    :level="course.level"
    :category="course.category"
    :estimate="course.estimate"
    :access="course.access"
    :courseId="course.id"
    :courseTitle="course.title"
    :fullName="userName"
  />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  </template>

  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import CardCourseInside from "@/components/CardCourseInside.vue";

  export default {
    name: "InsideCourse",
    components: { Navbar, Footer, CardCourseInside },

    data() {
      return {
        course: {},
        userName: "User Tidak Dikenal"
      };
    },

    created() {
      const id = Number(this.$route.params.id);

      const allCourses = [
        {
          id: 1,
          title: "Linux System Administration",
          longDesc:"In this course, you will learn the inner workings of Ubuntu-based Linux systems, from basic management to advanced configuration. Gain a deep understanding of all the necessary tools to efficiently manage and build production-ready Linux infrastructure.",
          rating: "4.0",
          students: 39,
          status: "open",
          image: new URL("@/assets/image/banner.jpg", import.meta.url).href,
          level: "Beginner",
          category: "SysAdmin",
          estimate: "3 hari",
          access: "1 Tahun"
        },
        {
          id: 2,
          title: "Cyber Security Fundamentals",
          longDesc:"In this course, you will explore the core principles of modern cybersecurity, from understanding digital threats to implementing effective defense strategies. Build a strong foundational skill set in securing systems, networks, and data, preparing you to handle real-world security challenges with confidence.",        
          rating: "4.8",
          students: 120,
          status: "open",
          image: new URL("@/assets/image/Banner2.jpg", import.meta.url).href,
          level: "Beginner",
          category: "Cyber Security",
          estimate: "1 minggu",
          access: "1 Tahun"
        }
      ];

      this.course = allCourses.find(c => c.id === id);

      // ambil nama pengguna dari localStorage
      this.userName = localStorage.getItem("fullName") || "User Tidak Dikenal";

      // cek status course
    const completed = JSON.parse(localStorage.getItem("completedCourses") || "[]");
  const inProgress = JSON.parse(localStorage.getItem("inProgressCourses") || "[]");

  if (completed.includes(id)) {
    this.course.status = "done";       // sudah selesai
  } else if (inProgress.includes(id)) {
    this.course.status = "wait";       // sedang belajar / kembali belajar
  } else {
    this.course.status = "open";       // belum mulai
  }

    }
  };
  </script>

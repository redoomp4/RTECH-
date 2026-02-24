<template>
  <div class="w-[90%] mx-auto sm:w-[450px] bg-white p-10 rounded-2xl shadow-xl card-course-inside">
    <!-- BACK TO COURSE -->
    <a href="/Course" class="relative text-sm text-green-600 font-medium group">
      Back to Course ➝
      <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <!-- BANNER -->
    <img :src="banner" class="w-full rounded-xl mt-4 mb-6 shadow-md" />

    <!-- BUTTON STATUS -->
    <button
      class="w-full py-3 rounded-lg font-semibold text-white shadow hover:opacity-90 transition mb-8"
      :class="buttonClass"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>

    <!-- LIST DETAIL -->
    <div class="space-y-5 text-gray-700">
      <div class="flex justify-between text-lg">
        <span>Total Siswa</span>
        <span class="font-bold">{{ students }}</span>
      </div>
      <div class="flex justify-between text-lg">
        <span>Skill Level</span>
        <span class="px-3 py-1 bg-gray-200 rounded-lg text-sm font-semibold">{{ level }}</span>
      </div>
      <div class="flex justify-between text-lg">
        <span>Kategori Materi</span>
        <span class="px-3 py-1 bg-gray-200 rounded-lg text-sm font-semibold">{{ category }}</span>
      </div>
      <div class="flex justify-between text-lg">
        <span>Estimasi Belajar</span>
        <span class="font-bold">{{ estimate }}</span>
      </div>
      <div class="flex justify-between text-lg">
        <span>Akses Course</span>
        <span class="font-bold">{{ access }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import templateImg from "@/assets/image/certificate.png";

export default {
  name: "CardCourseInside",
  props: {
    courseId: Number,
    banner: String,
    students: Number,
    level: String,
    category: String,
    estimate: String,
    access: String,
    courseTitle: String,
  },
  data() {
    return {
      type: "open", // default tombol
    };
  },
  computed: {
    buttonText() {
      if (this.type === "open") return "Mulai Belajar";
      if (this.type === "wait") return "Mulai Kembali";
      if (this.type === "done") return "Ambil Sertifikat";
      return "Belajar";
    },
    buttonClass() {
      return {
        open: "bg-green-500 hover:bg-green-600",
        wait: "bg-yellow-500 hover:bg-yellow-600",
        done: "bg-green-500 hover:bg-green-600",
      }[this.type];
    },
  },
  mounted() {
    this.updateButtonType();
    window.addEventListener("storage", this.updateButtonType);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.updateButtonType);
  },
  methods: {
    updateButtonType() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.type = "open"; // user belum login
        return;
      }

      const username = user.username;
      const inProgressKey = `inProgressCourses_${username}`;
      const completedKey = `completedCourses_${username}`;

      const inProgress = JSON.parse(localStorage.getItem(inProgressKey) || "[]");
      const completed = JSON.parse(localStorage.getItem(completedKey) || "[]");

      if (completed.includes(this.courseId)) {
        this.type = "done"; // tombol Ambil Sertifikat
      } else if (inProgress.includes(this.courseId)) {
        this.type = "wait"; // tombol Mulai Kembali
      } else {
        this.type = "open"; // user baru, tombol Mulai Belajar
      }
    },

    handleClick() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$router.push("/login");
        return;
      }

      const username = user.username;
      const inProgressKey = `inProgressCourses_${username}`;
      const completedKey = `completedCourses_${username}`;

      if (this.type === "open" || this.type === "wait") {
        // tandai course sebagai in-progress
        let inProgress = JSON.parse(localStorage.getItem(inProgressKey) || "[]");
        if (!inProgress.includes(this.courseId)) inProgress.push(this.courseId);
        localStorage.setItem(inProgressKey, JSON.stringify(inProgress));

        this.$router.push(`/CourseCore/${this.courseId}`);
      } else if (this.type === "done") {
        this.generateCertificate();
      }
    },

    generateCertificate() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fullName = user?.fullName || "User Tidak Dikenal"; // <-- pakai fullName
  const courseTitle = this.courseTitle || "Unknown Course";
  const certificateNumber = `RTC-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;

  // generate sertifikat gambar
  const img = new Image();
  img.src = templateImg;
  img.crossOrigin = "anonymous";

  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);
    ctx.font = "60px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(fullName, canvas.width / 2, canvas.height / 2 - 20); // <-- fullName
    ctx.font = "40px Arial";
    ctx.fillText(courseTitle, canvas.width / 2, canvas.height / 2 + 40);
    ctx.font = "30px Arial";
    ctx.fillText(certificateNumber, canvas.width / 2, canvas.height - 100);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `certificate_${certificateNumber}.png`;
    link.click();
  };

  // simpan ke DB
  fetch("http://localhost:3000/api/save-certificate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    certificateNumber,
    username: user.username // HARUS ADA
  }),
})
.then(res => res.json())
.then(res => console.log("Sertifikat tersimpan di DB:", res))
.catch(err => console.error("Gagal simpan sertifikat:", err));

}
  }
};
</script>
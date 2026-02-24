<template>
  <div class="min-h-screen flex flex-col bg-white mt-16 px-4 md:px-8">

    <!-- MAIN CONTENT -->
    <div class="flex-1 p-6">
      <Navbar />

      <div class="max-w-4xl mx-auto mt-6">
       <a :href="`/Course/${course.id}`" class="relative text-sm text-green-600 font-medium group">
  Exit Course ➝
  <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
</a>
        <!-- Judul -->
        <h1 class="text-4xl font-bold mb-6 mt-5">{{ course.title }}</h1>

        <!-- Konten -->
        <div class="text-gray-700 leading-relaxed mb-10">
          <p class="whitespace-pre-line text-lg text-justify">
            {{ course.content }}
          </p>
        </div>

        <!-- Tombol selesai -->
        <button
          class="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
          @click="finishCourse"
        >
          Selesai Belajar
        </button>

      </div>

      <Footer />
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "CourseCore",
  components: { Navbar, Footer },

  data() {
    return {
      course: {},
    };
  },

  created() {
    const id = Number(this.$route.params.id);

    const allCourses = [
      {
        id: 1,
        title: "Introduction to Linux System Administration",
          content: `Linux System Administration refers to the process of managing and maintaining Linux operating systems, which are widely used in servers, cloud platforms, and enterprise environments. A Linux system administrator is responsible for ensuring that the system runs efficiently, securely, and without interruption. This role includes configuring the system, managing users, monitoring performance, and maintaining network services.

  Linux is well-known for its stability, scalability, and open-source nature, which makes it a popular choice for modern technology infrastructures. Many large organizations, data centers, and cloud service providers rely on Linux to run critical applications and operations. As a result, learning Linux system administration is an essential skill for anyone pursuing a career in IT, DevOps, cybersecurity, or cloud engineering.

  Studying Linux system administration provides foundational knowledge about system architecture, file systems, permissions, and networking. It also introduces practical skills such as installing software, automating tasks using shell scripts, managing services, and strengthening system security. With strong Linux skills, administrators can effectively maintain server health, reduce downtime, and support reliable business operations.`
        },
      {
        id: 2,
        title: "Cyber Security Fundamentals",
        content: `Cybersecurity is the practice of protecting computer systems, networks, and data from malicious attacks, unauthorized access, and digital threats. As technology continues to advance, cyberattacks have become more sophisticated, making cybersecurity an essential discipline in both personal and professional environments. This field focuses on safeguarding confidentiality, integrity, and availability—three core principles known as the CIA Triad. Understanding these principles helps individuals and organizations build secure digital infrastructures capable of resisting modern cyber threats.

Cybersecurity covers a wide range of topics including threat identification, vulnerability assessment, secure network configuration, encryption, authentication, and incident response. Cyber professionals must understand various attack techniques such as phishing, malware, ransomware, social engineering, and network intrusion. They also need to be familiar with defensive technologies like firewalls, intrusion detection systems, access control, and data encryption. Mastery of these concepts ensures that digital assets are well-protected and that potential breaches can be detected and mitigated quickly.

Studying cybersecurity is essential in today’s digital world, where companies, governments, and individuals rely heavily on technology. With growing concerns over privacy, data leaks, and cybercrime, the demand for cybersecurity professionals continues to rise. Learning these fundamentals not only prepares students for careers in IT security, ethical hacking, and digital forensics, but also helps them develop a security-first mindset that is crucial for protecting critical systems and information in any environment.`}
    ];

    this.course = allCourses.find(c => c.id === id);
  },

  methods: {
  finishCourse() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Silakan login dulu");
      this.$router.push("/login");
      return;
    }

    const username = user.username;
    const inProgressKey = `inProgressCourses_${username}`;
    const completedKey = `completedCourses_${username}`;

    // hapus dari inProgress
    let inProgress = JSON.parse(localStorage.getItem(inProgressKey) || "[]");
    inProgress = inProgress.filter(x => x !== this.course.id);
    localStorage.setItem(inProgressKey, JSON.stringify(inProgress));

    // tambahkan ke completed
    let completed = JSON.parse(localStorage.getItem(completedKey) || "[]");
    if (!completed.includes(this.course.id)) completed.push(this.course.id);
    localStorage.setItem(completedKey, JSON.stringify(completed));

    // kembali ke halaman Course
    this.$router.push(`/Course/${this.course.id}`);
  }
}

};
</script>


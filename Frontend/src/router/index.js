import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import Company from "@/pages/Company.vue";
import login from "@/pages/login.vue";
import Register from "@/pages/Register.vue";
import ForgotPass from "@/pages/ForgotPass.vue";
import Course from "@/pages/Course.vue";
import CourseDetail from "@/pages/CourseDetail.vue";
import CourseCore from "@/pages/CourseCore.vue";
import Validate from "@/pages/Validate.vue";
import LoginSucces from "@/pages/LoginSuccess.vue"
import axios from "axios";
import NewPassword from "@/pages/NewPassword.vue";
axios.defaults.baseURL = "http://localhost:3000"; // Ganti dengan URL backend-mu

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/company", name: "Company", component: Company },
  { path: "/login", name: "Login", component: login },
  { path: "/register", name: "Register", component: Register },
  { path: "/forgot-password", name: "ForgotPass", component: ForgotPass },
  { path: "/course", name: "Course", component: Course },
  { path: "/course/:id", name: "CourseDetail", component: CourseDetail },
  { path: "/CourseCore/:id", name: "CourseCore", component: CourseCore },
  { path:"/validate", name:"Validate", component:Validate},
  { path: "/login-Success", name: "LoginSuccess", component: LoginSucces },
  { path: "/reset-password/:id", name: "NewPassword", component: NewPassword }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior() {
    return { top: 0 };
  }
});

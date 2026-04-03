<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <Navbar
      :current-lang="currentLang"
      :theme="theme"
      :translations="t"
      @update:lang="handleSetLang"
      @toggle-theme="toggleTheme"
    />
    <Hero :translations="t" />
    <About :translations="t" />
    <Services :translations="t" />
    <FAQ :translations="t" />
    <Contact :translations="t" />
    <Footer :translations="t" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import { translations } from "./translations";

const theme = ref("light");
const currentLang = ref("ru");

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedLang = localStorage.getItem("language") || "ru";

  theme.value = savedTheme;
  currentLang.value = savedLang;
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
});

const toggleTheme = () => {
  console.log("Кнопка нажата! Текущая тема:", theme.value);

  const newTheme = theme.value === "light" ? "dark" : "light";
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
};

const handleSetLang = (lang) => {
  currentLang.value = lang;
  localStorage.setItem("language", lang);
};

const t = computed(() => translations[currentLang.value]);
</script>

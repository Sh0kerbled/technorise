<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 animate-fade-in-down"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div
          class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
        >
          {{ translations.logo }}
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <button
            @click="$emit('toggle-theme')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <Moon v-if="theme === 'dark'" :size="20" />
            <Sun v-else :size="20" />
          </button>

          <div class="relative">
            <button
              @click="isLangMenuOpen = !isLangMenuOpen"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-90 flex items-center space-x-1"
            >
              <Globe :size="20" />
              <span class="text-sm uppercase">{{ currentLang }}</span>
            </button>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="isLangMenuOpen"
                class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="selectLang(lang.code)"
                  class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  :class="
                    currentLang === lang.code
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : ''
                  "
                >
                  {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>

          <button
            class="md:hidden p-2 text-gray-800 dark:text-gray-200"
            @click="isMenuOpen = !isMenuOpen"
          >
            <X v-if="isMenuOpen" :size="24" />
            <Menu v-else :size="24" />
          </button>
        </div>
      </div>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isMenuOpen" class="md:hidden pb-4 overflow-hidden">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="block w-full text-left py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {{ item.label }}
          </button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { Menu, X, Sun, Moon, Globe } from "lucide-vue-next";

const props = defineProps({
  currentLang: String,
  theme: String,
  translations: Object,
});

const emit = defineEmits(["update:lang", "toggle-theme"]);

const isMenuOpen = ref(false);
const isLangMenuOpen = ref(false);

const navItems = computed(() => [
  { id: "about", label: props.translations.about },
  { id: "services", label: props.translations.services },
  { id: "faq", label: props.translations.faq },
  { id: "contact", label: props.translations.contact },
]);

const languages = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "kk", label: "Қазақша" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    isMenuOpen.value = false;
  }
};

const selectLang = (code) => {
  emit("update:lang", code);
  isLangMenuOpen.value = false;
};
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out forwards;
}
</style>

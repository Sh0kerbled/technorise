<template>
  <footer
    class="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-12 px-4 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3
            class="text-2xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold"
          >
            {{ translations.logo }}
          </h3>
          <p
            class="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300"
          >
            {{ translations.footerDesc }}
          </p>
        </div>

        <div>
          <h4 class="text-xl mb-4">{{ translations.quickLinks }}</h4>
          <div class="space-y-2">
            <button
              v-for="item in quickLinks"
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <div>
          <h4 class="text-xl mb-4">{{ translations.contacts }}</h4>
          <div class="space-y-3">
            <a
              href="#"
              class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:scale-105 transition-all duration-300 transform origin-left w-max"
            >
              <Send :size="20" />
              <span>Telegram</span>
            </a>
            <a
              href="#"
              class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white hover:scale-105 transition-all duration-300 transform origin-left w-max"
            >
              <MessageCircle :size="20" />
              <span>WhatsApp</span>
            </a>
            <div
              class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              <Phone :size="20" />
              <span>+7 (123) 456-78-90</span>
            </div>
            <div
              class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              <Mail :size="20" />
              <span>info@company.com</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400 transition-colors duration-300"
      >
        <p>
          © {{ currentYear }} {{ translations.logo }}.
          {{ translations.allRights }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { Send, MessageCircle, Mail, Phone } from "lucide-vue-next";

const props = defineProps({ translations: Object });

const quickLinks = computed(() => [
  { id: "about", label: props.translations.about },
  { id: "services", label: props.translations.services },
  { id: "faq", label: props.translations.faq },
  { id: "contact", label: props.translations.contact },
]);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const currentYear = new Date().getFullYear();
</script>

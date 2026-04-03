<template>
  <section
    class="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h1
        class="text-5xl md:text-7xl mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up"
      >
        {{ translations.heroTitle }}
      </h1>

      <p
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-up animation-delay-200 transition-colors duration-300"
      >
        {{ translations.heroSubtitle }}
      </p>

      <div
        class="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400"
      >
        <a
          href="#"
          class="flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          <Send :size="20" />
          <span>Telegram</span>
        </a>

        <a
          href="#"
          class="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          <MessageCircle :size="20" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MessageCircle, Send } from "lucide-vue-next";
defineProps({ translations: Object });
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>

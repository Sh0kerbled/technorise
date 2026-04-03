<template>
  <section
    id="about"
    ref="elementRef"
    class="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-4xl md:text-5xl text-center mb-12 transition-all duration-700"
        :class="
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ translations.aboutTitle }}
      </h2>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div
          class="transition-all duration-700 delay-[200ms]"
          :class="
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          "
        >
          <p
            class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300"
          >
            {{ translations.aboutText1 }}
          </p>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300"
          >
            {{ translations.aboutText2 }}
          </p>
        </div>

        <div
          class="grid grid-cols-2 gap-6 transition-all duration-700 delay-[400ms]"
          :class="
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          "
        >
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 cursor-default"
          >
            <div
              class="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 font-bold"
            >
              {{ stat.number }}
            </div>
            <div
              class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useInView } from "../composables/useInView";

const props = defineProps({ translations: Object });
const { elementRef, isInView } = useInView({ threshold: 0.2 });

const stats = computed(() => [
  { number: "500+", label: props.translations.clients },
  { number: "10+", label: props.translations.years },
  { number: "98%", label: props.translations.satisfaction },
  { number: "24/7", label: props.translations.support },
]);
</script>

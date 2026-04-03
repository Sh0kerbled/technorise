<template>
  <section
    id="faq"
    ref="elementRef"
    class="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-3xl mx-auto">
      <h2
        class="text-4xl md:text-5xl text-center mb-16 transition-all duration-700"
        :class="
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ translations.faqTitle }}
      </h2>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-700"
          :class="
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <button
            @click="openIndex = openIndex === index ? null : index"
            class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-900 dark:text-gray-100 transition-colors duration-300"
          >
            <span class="text-lg pr-4">{{ faq.question }}</span>
            <ChevronDown
              :size="24"
              class="transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
            />
          </button>

          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="
              openIndex === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            "
          >
            <div class="overflow-hidden">
              <div
                class="px-6 pb-6 text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { useInView } from "../composables/useInView";

const props = defineProps({ translations: Object });
const { elementRef, isInView } = useInView({ threshold: 0.2 });
const openIndex = ref(null);

const faqs = computed(() => [
  { question: props.translations.faq1Q, answer: props.translations.faq1A },
  { question: props.translations.faq2Q, answer: props.translations.faq2A },
  { question: props.translations.faq3Q, answer: props.translations.faq3A },
  { question: props.translations.faq4Q, answer: props.translations.faq4A },
]);
</script>

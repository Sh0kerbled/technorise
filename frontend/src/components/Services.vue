<template>
  <section
    id="services"
    ref="elementRef"
    class="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-4xl md:text-5xl text-center mb-16 transition-all duration-700"
        :class="
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ translations.servicesTitle }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          :class="
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          "
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            :class="`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`"
          >
            <component :is="service.icon" :size="32" class="text-white" />
          </div>
          <h3
            class="text-xl mb-3 text-gray-900 dark:text-white transition-colors duration-300"
          >
            {{ service.title }}
          </h3>
          <p
            class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
          >
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Rocket, Zap, Shield, Smartphone } from "lucide-vue-next";
import { useInView } from "../composables/useInView";

const props = defineProps({ translations: Object });
const { elementRef, isInView } = useInView({ threshold: 0.2 });

const services = computed(() => [
  {
    icon: Rocket,
    title: props.translations.service1Title,
    desc: props.translations.service1Desc,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: props.translations.service2Title,
    desc: props.translations.service2Desc,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: props.translations.service3Title,
    desc: props.translations.service3Desc,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: props.translations.service4Title,
    desc: props.translations.service4Desc,
    color: "from-green-500 to-emerald-500",
  },
]);
</script>

<template>
  <section
    id="contact"
    ref="elementRef"
    class="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-4xl md:text-5xl text-center mb-16 transition-all duration-700"
        :class="
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ translations.contactTitle }}
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <div
          class="space-y-6 transition-all duration-700 delay-200"
          :class="
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          "
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0"
            >
              <MapPin class="text-white" :size="24" />
            </div>
            <div>
              <h3 class="text-xl mb-2">{{ translations.address }}</h3>
              <p
                class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                1-й микрорайон, 68/4​1-й м-н, Ауэзовский район, Алматы
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0"
            >
              <Phone class="text-white" :size="24" />
            </div>
            <div>
              <h3 class="text-xl mb-2">{{ translations.phone }}</h3>
              <p
                class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                +7 (123) 456-78-90
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0"
            >
              <Mail class="text-white" :size="24" />
            </div>
            <div>
              <h3 class="text-xl mb-2">{{ translations.email }}</h3>
              <p
                class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                info@company.com
              </p>
            </div>
          </div>
        </div>

        <div
          class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg h-[400px] transition-all duration-700 delay-300"
          :class="
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d861.165166123851!2d76.8523813697208!3d43.23315595140845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1775196152890!5m2!1sru!2skz"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Phone, Mail } from "lucide-vue-next";
import { useInView } from "../composables/useInView";

defineProps({ translations: Object });
const { elementRef, isInView } = useInView({ threshold: 0.2 });
</script>

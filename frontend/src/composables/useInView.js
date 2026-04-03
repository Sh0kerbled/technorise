import { ref, onMounted, onUnmounted } from "vue";

export function useInView(options = { threshold: 0.2 }) {
  const elementRef = ref(null);
  const isInView = ref(false);

  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Когда элемент появляется на экране, меняем состояние
      if (entry.isIntersecting) {
        isInView.value = true;
        // Раскомментируй строку ниже, если хочешь, чтобы анимация проигрывалась только один раз:
        observer.unobserve(elementRef.value);
      } else {
        // Закомментируй этот else, если НЕ хочешь чтобы секции исчезали при уходе из зоны видимости
        // isInView.value = false;
      }
    }, options);

    if (elementRef.value) {
      observer.observe(elementRef.value);
    }

    onUnmounted(() => {
      if (elementRef.value) observer.disconnect();
    });
  });

  return { elementRef, isInView };
}

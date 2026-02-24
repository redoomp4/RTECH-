<template>
  <div class="w-full max-w-xl bg-white rounded-xl border shadow-sm">
    <button
      @click="toggle"
      class="flex items-center justify-between w-full px-5 py-4"
    >
      <span class="text-gray-700 font-medium">
        {{ title }}
      </span>

      <span
        class="text-xl font-bold transition-transform duration-300"
        :class="isOpen ? 'rotate-45' : ''"
      >
        +
      </span>
    </button>

    <div v-if="isOpen" class="px-5 pb-4 text-gray-600 animate-fadeIn">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitItem",
  props: {
    title: {
      type: String,
      default: "Materi yang Selalu Mengikuti Tren Teknologi"
    },
    content: {
      type: String,
      default:
        "Materi selalu update mengikuti perkembangan teknologi terbaru sehingga tetap relevan di industri."
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>

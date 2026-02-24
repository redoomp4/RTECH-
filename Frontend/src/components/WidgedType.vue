<template>
  <div class="flex gap-6 justify-center flex-wrap mt-10">
    <button
  v-for="(item, index) in courseTypes"
  :key="index"
  class="px-12 py-5 rounded-3xl font-bold text-white text-lg shadow-xl hover:scale-105 transition"
  :style="gradientStyle"
  @click="$emit('select', item)"
>

      <span class="drop-shadow-lg">
        {{ item }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "WidgetTypeCourse",
  data() {
    return {
      courseTypes: [
        "Cyber Security",
        "Networking",
        "SysAdmin",
        "Cloud",
        "DevOps",
      ],
    };
  },
  computed: {
    gradientStyle() {
      return {
        background: "linear-gradient(to bottom, #8ccf8c 10%, #5e9b5e 90%)",
      };
    },
  },
};
</script>

<style scoped>
button {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}
</style>

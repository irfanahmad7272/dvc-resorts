<template>
  <div>
    <div class="text-center mt-5 text-2xl space-x-2">
      <button
        class="rounded-md w-24 py-0.5"
        :class="[
          activeChart == 'map'
            ? 'bg-custom-blue4 text-white '
            : 'border border-custom-blue4 text-custom-blue4',
        ]"
        @click="activeChart = 'map'"
      >
        Map one
      </button>
      <button
        class="rounded-md w-24 py-0.5"
        :class="[
          activeChart == 'map2'
            ? 'bg-custom-blue4 text-white '
            : 'border border-custom-blue4 text-custom-blue4',
        ]"
        @click="activeChart = 'map2'"
      >
        Map two
      </button>
    </div>
    <div class="max-w-3xl mx-auto overflow-hidden mt-5">
      <img
        :src="`/assets/resorts/animal-kingdom/${activeChart}.jpg`"
        class="w-full"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeChart: "map",
      showImage: false,
    };
  },
};
</script>

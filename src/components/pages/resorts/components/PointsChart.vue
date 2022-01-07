<template>
  <div>
    <div class="text-center mt-5 text-2xl">
      <button
        class="rounded w-24 py-0.5 mx-2"
        :class="[
          activeChart == '2021'
            ? 'bg-custom-blue4 text-white '
            : 'border border-custom-blue4 text-custom-blue4',
        ]"
        @click="activeChart = '2021'"
      >
        2021
      </button>
      <button
        class="rounded w-24 py-0.5 mx-2"
        :class="[
          activeChart == '2022'
            ? 'bg-custom-blue4 text-white '
            : 'border border-custom-blue4 text-custom-blue4',
        ]"
        @click="activeChart = '2022'"
      >
        2022
      </button>
    </div>
    <div class="mt-5">
      <img
        class="w-full"
        :src="`/assets/resorts${folderName}/charts/${activeChart}.png`"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeChart: "2021",
      folderName: window.location.pathname,
    };
  },
};
</script>

<template>
  <div>
    <div class="mt-5 text-center text-2xl">
      <button
        class="mx-2 w-24 rounded py-0.5"
        :class="[
          activeChart == '2022'
            ? 'bg-custom-blue4 text-white '
            : 'border-custom-blue4 text-custom-blue4 border',
        ]"
        @click="activeChart = '2022'"
      >
        2022
      </button>
      <button
        class="mx-2 w-24 rounded py-0.5"
        :class="[
          activeChart == '2023'
            ? 'bg-custom-blue4 text-white '
            : 'border-custom-blue4 text-custom-blue4 border',
        ]"
        @click="activeChart = '2023'"
      >
        2023
      </button>
    </div>
    <div class="mt-5">
      <img class="w-full" :src="`/assets/resorts${folderName}/charts/${activeChart}.png`" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeChart: "2022",
      folderName: window.location.pathname,
    };
  },
};
</script>

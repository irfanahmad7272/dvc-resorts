<template>
  <div class="w-full text-center col-span-12 md:col-span-9">
    <div v-for="(tab, index) in tabs" :key="index">
      <div v-if="activePage === tab.name">
        <div>
          <h1 class="text-3xl font-semibold text-custom-blue4">
            {{ tab.name }}
          </h1>
        </div>
        <div class="py-10 px-4 md:px-0">
          <ResortsSlider :images="tab.imgs" />
        </div>
        <div class="text-2xl text-custom-blue4 mt-5 mx-auto">
          {{ tab.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResortsSlider from "./ResortsSlider";
export default {
  components: {
    ResortsSlider,
  },
  props: ["tabs", "activePage"],
};
</script>

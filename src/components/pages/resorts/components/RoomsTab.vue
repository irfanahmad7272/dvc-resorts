<template>
  <div class="w-full text-center col-span-12 md:col-span-9">
    <template v-for="(tab, index) in tabs">
      <div :key="index" v-if="activePage == tab.name">
        <div>
          <h1 class="text-3xl font-semibold text-custom-blue4">
            {{ tab.name }}
          </h1>
        </div>
        <div class="py-10 px-5 md:px-0">
          <ResortsSlider :images="tab.imgs" />
        </div>
        <span class="inline-block text-2xl text-custom-blue4 mt-5">
          {{ tab.description }}
        </span>
        <span class="text-custom-blue2 font-semibold text-2xl block mt-5">
          Amenities</span
        >
        <div class="m-5">
          <div class="mt-2 text-left list-disc text-custom-blue4 mx-auto">
            <ul class="list-disc grid grid-cols-2 md:grid-cols-3 gap-x-10">
              <li v-for="(amenitie, index) in tab.amenities" :key="index">
                {{ amenitie }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <div v-if="activePage === 'Floor Plans'" class="w-full">
      <div class="text-center w-full">
        <h1 class="text-3xl font-semibold text-custom-blue4">Floor Plans</h1>
      </div>
      <div class="py-10 px-5 md:px-0">
        <ResortsSlider :images="floors" />
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
  props: ["tabs", "activePage", "floors", "activeFloor"],
};
</script>

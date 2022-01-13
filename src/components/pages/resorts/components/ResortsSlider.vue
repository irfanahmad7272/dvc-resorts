<template>
  <div>
    <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
      <div v-for="(img, i) in images" :key="i">
        <img
          class="w-full h-64 md:h-96 2xl:h-[28rem] pointer-events-none"
          :src="img.img || img"
          alt="slider-imgs"
        />
        <div class="my-5 text-2xl space-y-2" v-if="img.img">
          <p>{{ img.name }}</p>
          <p>
            {{ img.size }}
          </p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  props: ["images"],
};
</script>

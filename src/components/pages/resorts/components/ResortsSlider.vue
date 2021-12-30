<template>
  <div>
    <VueSlickCarousel
      :autoplay="true"
      :arrows="true"
      :dots="true"
      :lazyLoad="true"
    >
      <div v-for="(img, i) in images" :key="i">
        <img
          class="w-full h-64 md:h-96 pointer-events-none"
          :src="img"
          alt="slider-imgs"
        />
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

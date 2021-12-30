<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
              <div v-for="(img, i) in images" :key="i">
                <img
                  class="w-full h-64 md:h-96 pointer-events-none"
                  :src="img"
                  alt="slider-imgs"
                />
              </div>
            </VueSlickCarousel>
            <div class="text-center mt-14">
              <h2
                class="text-custom-blue4 text-4xl font-semibold uppercase mt-2"
              >
                Disney's Vero Beach Resort
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                For those who prefer a more secluded location, Disney’s Vero
                Beach Resort offers the perfect getaway. Escape the hustle and
                bustle of the Orlando theme parks at this Atlantic Coast
                paradise, located 2 hours southeast of Walt Disney World on the
                white sands of Vero Beach. Whether you stay in a Villa or a
                standalone cottage, the pristine white sandy beach lies on the
                other side of your door. Fill your days with plenty of
                recreational activities— both on and offshore, and enjoy the
                surf and turf menus at the world-renowned local restaurants.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Vero beach Resort great!
              </h2>
            </div>
            <Cards :data="cards" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Cards from "../../components/Cards";
export default {
  components: {
    VueSlickCarousel,
    Cards,
  },
  data() {
    return {
      active: false,
      cards: [
        {
          discription:
            "Vero Beach is located on beachfront property along Florida's Treasure Coast, where guests can experience a getaway away from other tourist beach destinations.  ",
          name: "Beachside paradise",
          img: "/assets/resorts/animal-kingdom/b1.png",
        },
        {
          discription:
            "Miles of natural shoreline, sea turtle nesting grounds, and golf make up just some of the activities that will enhance this Florida beach escape. ",
          name: "Experience real Florida",
          img: "/assets/resorts/vero-beach/4.png",
        },
        {
          discription:
            "kids of all ages will enjoy splashing into the Mickey-shaped pool and adventuring down the Pirates Plunge pool slide. Join the family for a round of mini-golf, or play pick-up basketball or volleyball game.  ",
          name: "Family-friendly activities",
          img: "/assets/resorts/vero-beach/5.png",
        },
      ],
      images: [
        "/assets/resorts/vero-beach/1.png",
        "/assets/resorts/vero-beach/2.png",
        "/assets/resorts/vero-beach/3.png",
        "/assets/resorts/vero-beach/4.png",
        "/assets/resorts/vero-beach/5.png",
        "/assets/resorts/vero-beach/6.png",
        "/assets/resorts/vero-beach/7.png",
        "/assets/resorts/vero-beach/8.png",
        "/assets/resorts/vero-beach/9.png",
      ],
    };
  },
};
</script>

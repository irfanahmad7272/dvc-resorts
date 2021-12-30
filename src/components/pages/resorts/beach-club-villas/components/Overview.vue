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
                Disney's Beach Club Villas
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Relax with the charm of Disney's Beach Club Villas, modeled
                after the romance and elegance of New England beach cottages
                that dot the northeast. Amenities abound at the Beach Club and
                its sister resort, the Yacht Club, including a wide selection of
                dining locations, pools, and a white-sand beach. Shops,
                entertainment, restaurants are a short walk away at Disney's
                BoardWalk Inn. The resort is also within walking distance of
                Epcot.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Beach club villas Resort great!
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
            "Stroll along the boardwalk and enter Epcot from the International Gateway or hop on a ferry to Disney’s Hollywood Studios.",
          name: "Access to Epcot and Hollywood Studios",
          img: "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview2.jpg",
        },
        {
          discription:
            "Pastel colors and a large central lobby offer a beach-like escape in the heart of Walt Disney World. ",
          name: "Bright and sunny design",
          img: "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview3.jpg",
        },
        {
          discription:
            "From world-class steaks to gourmet ice cream, you can find it all at the Yacht and Beach Clubs. ",
          name: "Sophisticated dining",
          img: "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview4.jpg",
        },
      ],
      images: [
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview2.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview3.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview4.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview5.jpg",
      ],
    };
  },
};
</script>

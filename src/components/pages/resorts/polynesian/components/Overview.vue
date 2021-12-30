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
                Disney's Polynesian Villas & Bungalows
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Discover a South Pacific paradise at Disney's Polynesian Villas
                & Bungalows. Enjoy the Tiki torches and the white-sand beaches
                of this getaway, inspired by the mysterious island of Bora Bora.
                With spacious rooms and all the amenities of home, you can
                unwind after a day of adventure at the Magic Kingdom—just a
                short boat or monorail ride away. Relax in a plunge pool on your
                private deck while you watch fireworks over Cinderella Castle as
                the night descends.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Polynesian Resort great!
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
            "Spend even more time playing at Magic Kingdom, with quick access via monorail, ferry boat, or bus.",
          name: "In the heart of it all",
          img: "/assets/resorts/old-key-west/3.png",
        },
        {
          discription:
            "The Polynesian Villas & Bungalows offer the largest Deluxe Studios on property and overwater Bungalows that sleep up to eight guests.",
          name: "Spacious accommodations",
          img: "/assets/resorts/old-key-west/4.png",
        },
        {
          discription:
            "With a plethora of tiki lounges, bars, and full-service Polynesian-inspired restaurants, dining at the resort is second to none. ",
          name: "tiki-inspired dining",
          img: "/assets/resorts/old-key-west/5.png",
        },
      ],
      images: [
        "/assets/resorts/old-key-west/1.png",
        "/assets/resorts/old-key-west/2.png",
        "/assets/resorts/old-key-west/3.png",
        "/assets/resorts/old-key-west/4.png",
        "/assets/resorts/old-key-west/5.png",
        "/assets/resorts/old-key-west/6.png",
        // "/assets/resorts/old-key-west/7.png",
        // "/assets/resorts/old-key-west/8.png",
        "/assets/resorts/old-key-west/9.png",
      ],
    };
  },
};
</script>

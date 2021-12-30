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
                Disney's Grand Californian
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The only DVC resort located at Disneyland, the Villas at
                Disney’s Grand Californian Hotel & Spa offer close access to all
                the magic of Disneyland. The excitement and thrills of Disney's
                California Adventure Park are minutes away. Enjoy world-class
                amenities, recreation, and dining at this one-of-a-kind resort!
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                WHAT MAKES THIS DISNEY VACATION CLUB RESORT
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
            "Located steps away from Disney's California Adventure, resort guests can use an exclusive entrance to enter the park.",
          name: "Convenient theme park access",
          img: "/assets/resorts/grand-californian/1.png",
        },
        {
          discription:
            " With Craftsman-style theming and a rustic ambiance, the Grand Californian celebrates the beauty and wonder of the entire state. ",
          name: "Grand adventure",
          img: "/assets/resorts/grand-californian/2.png",
        },
        {
          discription:
            "Swim and splash together as a family at the resort's three pools: the Mariposa, the Redwood, and the Fountain. Enjoy water slides, whirlpool spas, and private cabana rentals to enhance your pool day.",
          name: "Playful oasis",
          img: "/assets/resorts/boardwalk-villas/6.png",
        },
      ],
      images: [
        "/assets/resorts/grand-californian/1.png",
        "/assets/resorts/grand-californian/2.png",
      ],
    };
  },
};
</script>

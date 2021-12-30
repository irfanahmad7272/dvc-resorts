<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto m-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="(tab, index) in tabs"
            @click="changeView($event, tab.name)"
            :key="index"
          >
            <a :href="'#' + tab.name"> {{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="w-full text-center col-span-12 md:col-span-9">
        <div v-for="(tab, index) in tabs" :key="index">
          <div v-if="activePage === tab.name">
            <div>
              <h1 class="text-3xl font-semibold text-custom-blue4">
                {{ tab.name }}
              </h1>
            </div>
            <div class="py-10 px-4 md:px-0">
              <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
                <div v-for="(img, i) in tab.imgs" :key="i">
                  <img
                    class="w-full h-64 md:h-96 pointer-events-none"
                    :src="img"
                    alt="slider-imgs"
                  />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="text-2xl text-custom-blue4 mt-5 mx-auto">
              {{ tab.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      activePage: "ʻAMAʻAMA – Contemporary Island Cooking",
      tabs: [
        {
          name: "ʻAMAʻAMA – Contemporary Island Cooking",
          imgs: [
            "/assets/resorts/aulani/dinning/amma/1.png",
            "/assets/resorts/aulani/dinning/amma/2.png",
            "/assets/resorts/aulani/dinning/amma/3.png",
          ],
          description:
            " Sit back and relax at this beachfront eatery and let the sound of the ocean waves calm you.  The menu rotates throughout the year, highlighting fresh ingredients and modern twists on Hawaiian cuisine. ",
        },
        {
          name: "Disney Character Breakfast at Makahiki",
          imgs: [
            "/assets/resorts/aulani/dinning/amma/3.png",
            "/assets/resorts/aulani/dinning/mamas/2.png",
          ],
          description:
            "This full-service restaurant offers buffet and à la carte options in a family-friendly atmosphere with an open-air dining room.  Join your favorite Disney characters for breakfast, which includes tropical fruits, fresh pastries, and other specialties. At dinner, enjoy a fixed, three-course meal that infuses local ingredients into the main entrees. ",
        },
        {
          name: "mama’s snack stop",
          imgs: [
            "/assets/resorts/aulani/dinning/mamas/1.png",
            "/assets/resorts/aulani/dinning/mamas/2.png",
            "/assets/resorts/aulani/dinning/mamas/3.png",
          ],
          description:
            "As a pit-stop near the Waikolohe Valley pool area, Mama’s Snack Stop serves up hot dogs, chicken tenders, yummy coconut shrimp, and more. ",
        },
        {
          name: "Ulu cafe",
          imgs: [
            "/assets/resorts/aulani/dinning/ulu/1.png",
            "/assets/resorts/aulani/dinning/ulu/2.png",
          ],
          description:
            "Conveniently located near the Wailana Pool, select from a variety of grab-and-go items, carryout meals, poke bowls, and snacks.   ",
        },
        {
          name: "Off the Hook",
          imgs: "/assets/resorts/aulani/dinning/off-the-hook/1.png",
          description:
            "This open-air, beachside lounge resembles a fisherman’s shack and serves various drinks and Hawaiian-inspired appetizers.",
        },
        {
          name: "The `Ōlelo Room",
          imgs: "/assets/resorts/aulani/dinning/olelo/1.png",
          description:
            "Inspired and infused with the Hawaiian language, this bar and lounge offers beer, wine, spirits, and Hawaiian appetizers.",
        },
        {
          name: "Ka Wa'a: A Luau at Aulani",
          imgs: "/assets/resorts/aulani/dinning/kawa/1.png",
          description:
            "Discover a culinary and cultural experience that infuses the legends, traditions, natural wonders, and the people of Hawaii at this one-of-a-kind dining experience",
        },
      ],
    };
  },
  methods: {
    changeView(e, tab) {
      e.preventDefault();
      this.activePage = tab;
    },
  },
};
</script>

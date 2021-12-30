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
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      activePage: "Wind & Waves Grill",
      tabs: [
        {
          name: "Wind & Waves Grill",
          imgs: [
            "/assets/resorts/vero-beach/dining/wave/1.png",
            "/assets/resorts/vero-beach/dining/wave/2.png",
            "/assets/resorts/vero-beach/dining/wave/3.png",
            "/assets/resorts/vero-beach/dining/wave/4.png",
          ],
          description:
            "Feast on a delectable assortment of dishes at this lively seaside restaurant as you meet some of your favorite Disney Characters on select mornings. Later on, fresh seafood and locally sourced ingredients blend into entrees like Key West Shrimp and Roasted Salmon with braised red cabbage and spätzle. ",
        },
        {
          name: "The Green Cabin Room",
          imgs: [
            "/assets/resorts/vero-beach/dining/green/1.png",
            "/assets/resorts/vero-beach/dining/green/2.png",
            "/assets/resorts/vero-beach/dining/green/3.png",
            "/assets/resorts/vero-beach/dining/green/4.png",
          ],
          description:
            "Come “aboard” this inviting nautical lounge for cocktail hour or dessert. The decor is modeled after the Spanish galleons, who were known to frequent the waters around Vero Beach. Legend has it that one vessel, the San Martin, shipwrecked off the coast in the early 1600s.  ",
        },
        {
          name: "Wind & Waves Bar",
          imgs: [
            "/assets/resorts/vero-beach/dining/green/1.png",
            "/assets/resorts/vero-beach/dining/green/2.png",
            "/assets/resorts/vero-beach/dining/green/3.png",
            "/assets/resorts/vero-beach/dining/green/4.png",
          ],
          description:
            "Retreat at this poolside bar, which serves specialty cocktails, draft beers, wine, and high-end Florida liquors. Go with the flow and unwind while listening to the sounds of the ocean waves. ",
        },
        {
          name: "Wind & Waves Market",
          imgs: [
            "/assets/resorts/vero-beach/dining/green/1.png",
            "/assets/resorts/vero-beach/dining/green/2.png",
            "/assets/resorts/vero-beach/dining/green/3.png",
            "/assets/resorts/vero-beach/dining/green/4.png",
          ],
          description:
            "This grab-and-go snack bar serves light meals, baked goods, burgers, sandwiches, and sweets like Mickey Whoopie Pies. Take your order poolside or relax in your spacious Villa.  ",
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

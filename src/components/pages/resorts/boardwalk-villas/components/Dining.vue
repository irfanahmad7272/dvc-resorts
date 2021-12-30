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
              <ResortsSlider :images="tab.imgs" />
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
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: {
    ResortsSlider,
  },
  data() {
    return {
      activePage: "Flying Fish Café:",
      tabs: [
        {
          name: "Flying Fish Café:",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream2.jpg",
          ],
          description:
            "Sizzling steaks and fresh seafood take center stage at this Signature Dining location. Festive decor like parachuting fish and roller coaster tracks create a high-energy atmosphere. ",
        },
        {
          name: "Big River Grille & Brewing Works:",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream2.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream3.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream4.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream5.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream6.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream7.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream8.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream9.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-beachesCream10.jpg",
          ],
          description:
            "A microbrewery with a family-friendly vibe serves up award-winning brews and a full food menu that offers unique interpretations of classic American pub fare",
        },
        {
          name: "ESPN Club",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-BeachClubMarketplace1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-BeachClubMarketplace2.jpg",
          ],
          description:
            "This is the place to be for the sports lovers in your family. Dine on American pub classics while enjoying sporting events from around the world. Don't leave without taking a look at their branded merchandise. ",
        },
        {
          name: "Martha's Vineyard",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-Martha'sVineyard1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-Martha'sVineyard2.jpg",
          ],
          description:
            "Canoodle over a Cape Cod or any signature cocktail from the full bar menu at this mellow New England beach house-inspired lounge. Imported wines and draft beers, including Sam Adams Seasonal, enhance the mood. Appetizers are also available.",
        },
        {
          name: "BoardWalk Bakery: ",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-DisneyResortsPrivateDining.webp",
          ],
          description:
            "A cozy stop along the boardwalk, munch on fresh baked goods, salads, sandwiches, and soups while strolling along. Enjoy a selection of hot and cold beverages to please your palate. ",
        },
        {
          name: "Trattoria Al Forno: ",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-DisneyResortsPrivateDining.webp",
          ],
          description:
            "Take in this casual Italian eatery that serves both breakfast and dinner. For breakfast, sample dishes like poached eggs with fennel sausage, creamy polenta and toasted focaccia, and buttermilk pancakes. Reserve a spot for the Bon Voyage adventure breakfast and dine with royal couples from Tangled and The Little Mermaid. At dinner, enjoy classic Italian dishes like lasagna al-forno and chicken parmigiana. Pair your meal with an extensive array of authentic Italian wines. ",
        },
        {
          name: "Pizza Window: ",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse2.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse3.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse4.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse5.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse6.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse7.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-YachtsmanSteakhouse8.jpg",
          ],
          description:
            "A walk-up pizza stand modeled after the many pizza slice shops that dot the Atlantic City boardwalk. Order a slice of cheese, pepperoni, or the Boardwalk Signature Pizza or entire pie to feed the family. Quench your thirst with sangria, draft beer, and soft drinks.  ",
        },
        {
          name: "AbracadaBar: ",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompass.jpg",
          ],
          description:
            "Experience a lounge with mystery and intrigue with magical cocktails at this sophisticated bar and lounge, with an intriguing backstory as a watering hole for famous magicians. ",
        },
        {
          name: "Boardwalk Ice Cream:",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant2.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant3.jpg",
          ],
          description:
            "A traditional ice cream parlor, a sundae here is the perfect way to end a trip down the boardwalk. Taste delectable treats like the Shore-Side Sundae made with SNICKERS® and a brownie a la mode. ",
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

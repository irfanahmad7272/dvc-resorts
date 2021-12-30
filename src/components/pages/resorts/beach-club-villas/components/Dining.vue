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
      activePage: "Cape May Cafe",
      tabs: [
        {
          name: "Cape May Cafe",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe2.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe3.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe4.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe5.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe6.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe7.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-capeMayCafe8.jpg",
          ],
          description:
            "Come in for family-friendly dining with special appearances by Disney characters for breakfast. The all-you-care-to-enjoy breakfast includes house-made pastries, omelets, and Mickey waffles. Dinner selections include seafood boils, turf platters, parker rolls, and more. ",
        },
        {
          name: "Beaches & Cream Soda Shop",
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
            "Sip on flavored sodas, malted milkshakes, and taste sweet treats at Beaches and Cream. The shop includes a full menu including burgers, chili-cheese tater tots, and other American comfort foods. Be sure to save room for dessert! Try their signature sundae, The Kitchen Sink, if you dare. It includes eight scoops of ice cream with all the toppings you could ever imagine served in (you guessed it) a kitchen sink.  ",
        },
        {
          name: "Beach Club Marketplace",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-BeachClubMarketplace1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-BeachClubMarketplace2.jpg",
          ],
          description:
            "Start your Disney day with a breakfast sandwich or Mickey waffles. Stop by for lunch and dinner with a selection of macaroni and cheese dishes, hot or cold sandwiches, and refreshing salads.",
        },
        {
          name: "Martha's Vineyard",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-Martha'sVineyard1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-Martha'sVineyard2.jpg",
          ],
          description:
            "Enjoy beach-inspired cocktails like the Cape Cod at this full bar and lounge. Draft beers (including Sam Adams Seasonal), imported wines, and select appetizers set the tone for your vacation. ",
        },
        {
          name: "Disney Resorts Private Dining",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-DisneyResortsPrivateDining.webp",
          ],
          description:
            "Convenience, Comfort and Quality Whether you’re hungry for a late dinner or you just want some breakfast when you wake, private dining is the ticket. With Disney Resorts Private Dining, you can choose from a variety of American favorites—along with some specialty items particular to your Disney Resort hotel!",
        },
        {
          name: "Crew's Cup Lounge",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-DisneyResortsPrivateDining.webp",
          ],
          description:
            "Try charcuterie boards, jumbo shrimp cocktail, and roasted prime rib at this nautical outpost, located next to the Yachtsman Steakhouse at Disney's Yacht Club. Sip on bourbon flights, beer, cider, wine, and specialty cocktails before or after your meal.",
        },
        {
          name: "Yachtsman Steakhouse",
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
            "Nautical touches surround you in the airy dining room at this full-service restaurant located at Disney's Yacht Club. Watch as butchers hand-cut grain-fed beef in the dry-aging room, then prepare the cuts on an oak-fired grill in the open-air kitchen. Fan-favorite dishes include Prime New York Strip Steak with peppercorn-brandy sauce and the Truffle Macaroni & Cheese. An imaginative kid's menu is sure to please the pickiest of eaters in the family. Be sure to save room for a S’mores Sundae or Banana Bread Pudding for dessert! ",
        },
        {
          name: "The Market at Ale & Compass",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-TheMarketAtAle.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-TheMarketAtAle1.jpg",
          ],
          description:
            "From dining to shopping, cruise over for a variety of provisions. Once inside, you’ll find breakfast favorites like Mickey waffles with bacon, tasty sandwiches and hot paninis at lunchtime and delightful coffee beverages to brighten your day—along with magical Disney merchandise.",
        },
        {
          name: "Ale & Compass Lounge",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompass.jpg",
          ],
          description:
            "Lively spirits, delectable snacks, and high-quality liquors are all found at this nautical hideaway at Disney's Yacht Club. Crafted cocktails include the Captain’s Mai Tai and Spicy Pomegranate Margarita.",
        },
        {
          name: "Ale & Compass Restaurant",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant1.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant2.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-AleCompassRestaurant3.jpg",
          ],
          description:
            "This full-service eatery at Disney's Yacht Club makes you feel like you've stepped inside a traditional New England lighthouse. This cozy restaurant is a comfortable place to refuel before starting your day of park hopping or is a place to kick up your feet after a day of thrills. There's something for everyone at breakfast, from fruit smoothies to omelets and caramel apple French toast. At dinner, dine on various entrees like the New England seafood pot pie, lemon-herb half chicken, pappardelle pasta, strip steaks, and more. Be sure to ask about the fresh catch of the day!",
        },
        {
          name: "Hurricane Hanna's Waterside Bar and Grill",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-HhurricaneHanna.webp",
          ],
          description:
            "Located near Stromalong Bay, the Beach Club's pool area, this quick-service stop includes a full bar, cocktails, smoothies, salads, sandwiches, and snacks.",
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

<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto m-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="(tab, index) in tabs"
            @click="activePage = tab.name"
            :key="index"
          >
            {{ tab.name }}
          </li>
        </ul>
      </div>

      <DiningTab :tabs="tabs" :activePage="activePage" />
    </div>
  </div>
</template>

<script>
import DiningTab from "../../components/DiningTab";
export default {
  components: { DiningTab },
  data() {
    return {
      activePage: "Flying Fish Café:",
      tabs: [
        {
          name: "Flying Fish Café:",
          imgs: [
            "/assets/resorts/boardwalk-villas/flying-fish.jpg",
            "/assets/resorts/boardwalk-villas/flying-fish2.jpg",
            "/assets/resorts/boardwalk-villas/flying-fish3.jpg",
            "/assets/resorts/boardwalk-villas/flying-fish4.jpg",
            "/assets/resorts/boardwalk-villas/flying-fish5.jpg",
          ],
          description:
            "Sizzling steaks and fresh seafood take center stage at this Signature Dining location. Festive decor like parachuting fish and roller coaster tracks create a high-energy atmosphere. ",
        },
        {
          name: "Big River Grille & Brewing Works:",
          imgs: [
            "/assets/resorts/boardwalk-villas/big-river-grill.jpg",
            "/assets/resorts/boardwalk-villas/big-river-grill2.jpg",
            "/assets/resorts/boardwalk-villas/big-river-grill3.png",
            "/assets/resorts/boardwalk-villas/big-river-grill4.jpg",
            "/assets/resorts/boardwalk-villas/big-river-grill5.png",
          ],
          description:
            "A microbrewery with a family-friendly vibe serves up award-winning brews and a full food menu that offers unique interpretations of classic American pub fare",
        },
        {
          name: "ESPN Club",
          imgs: [
            "/assets/resorts/boardwalk-villas/espn.jpg",
            "/assets/resorts/boardwalk-villas/espn2.jpg",
            "/assets/resorts/boardwalk-villas/espn3.jpg",
            "/assets/resorts/boardwalk-villas/espn4.jpg",
          ],
          description:
            "This is the place to be for the sports lovers in your family. Dine on American pub classics while enjoying sporting events from around the world. Don't leave without taking a look at their branded merchandise. ",
        },
        {
          name: "Martha's Vineyard",
          imgs: [
            "/assets/resorts/boardwalk-villas/martha.jpg",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-restorant-Martha'sVineyard1.jpg",
            "/assets/resorts/boardwalk-villas/martha2.jpg",
          ],
          description:
            "Canoodle over a Cape Cod or any signature cocktail from the full bar menu at this mellow New England beach house-inspired lounge. Imported wines and draft beers, including Sam Adams Seasonal, enhance the mood. Appetizers are also available.",
        },
        {
          name: "BoardWalk Bakery: ",
          imgs: [
            "/assets/resorts/boardwalk-villas/bakery.jpg",
            "/assets/resorts/boardwalk-villas/bakery2.webp",
            "/assets/resorts/boardwalk-villas/bakery3.jpg",
            "/assets/resorts/boardwalk-villas/bakery4.jpg",
          ],
          description:
            "A cozy stop along the boardwalk, munch on fresh baked goods, salads, sandwiches, and soups while strolling along. Enjoy a selection of hot and cold beverages to please your palate. ",
        },
        {
          name: "Trattoria Al Forno: ",
          imgs: [
            "/assets/resorts/boardwalk-villas/trattoria.webp",
            "/assets/resorts/boardwalk-villas/trattoria2.webp",
            "/assets/resorts/boardwalk-villas/trattoria3.webp",
            "/assets/resorts/boardwalk-villas/trattoria4.jpg",
            "/assets/resorts/boardwalk-villas/trattoria5.jpg",
          ],
          description:
            "Take in this casual Italian eatery that serves both breakfast and dinner. For breakfast, sample dishes like poached eggs with fennel sausage, creamy polenta and toasted focaccia, and buttermilk pancakes. Reserve a spot for the Bon Voyage adventure breakfast and dine with royal couples from Tangled and The Little Mermaid. At dinner, enjoy classic Italian dishes like lasagna al-forno and chicken parmigiana. Pair your meal with an extensive array of authentic Italian wines. ",
        },
        {
          name: "Pizza Window: ",
          imgs: [
            "/assets/resorts/boardwalk-villas/pizza-window.jpg",
            "/assets/resorts/boardwalk-villas/pizza-window2.jpg",
            "/assets/resorts/boardwalk-villas/pizza-window3.jpg",
            "/assets/resorts/boardwalk-villas/pizza-window4.jpg",
          ],
          description:
            "A walk-up pizza stand modeled after the many pizza slice shops that dot the Atlantic City boardwalk. Order a slice of cheese, pepperoni, or the Boardwalk Signature Pizza or entire pie to feed the family. Quench your thirst with sangria, draft beer, and soft drinks.  ",
        },
        {
          name: "AbracadaBar: ",
          imgs: [
            "/assets/resorts/boardwalk-villas/abracada-bar.jpg",
            "/assets/resorts/boardwalk-villas/abracada-bar2.jpg",
            "/assets/resorts/boardwalk-villas/abracada-bar3.jpg",
            "/assets/resorts/boardwalk-villas/abracada-bar4.jpg",
            "/assets/resorts/boardwalk-villas/5.png",
          ],
          description:
            "Experience a lounge with mystery and intrigue with magical cocktails at this sophisticated bar and lounge, with an intriguing backstory as a watering hole for famous magicians. ",
        },
        {
          name: "Boardwalk Ice Cream:",
          imgs: [
            "/assets/resorts/boardwalk-villas/ice-cream.jpg",
            "/assets/resorts/boardwalk-villas/ice-cream2.jpg",
            "/assets/resorts/boardwalk-villas/ice-cream3.jpg",
            "/assets/resorts/boardwalk-villas/ice-cream4.webp",
            "/assets/resorts/boardwalk-villas/ice-cream5.jpg",
          ],
          description:
            "A traditional ice cream parlor, a sundae here is the perfect way to end a trip down the boardwalk. Taste delectable treats like the Shore-Side Sundae made with SNICKERS® and a brownie a la mode. ",
        },
      ],
    };
  },
};
</script>

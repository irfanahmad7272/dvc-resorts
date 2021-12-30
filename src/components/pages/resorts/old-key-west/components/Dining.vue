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
      activePage: "Olivia's Cafe",
      tabs: [
        {
          name: "Olivia's Cafe",
          imgs: [
            "/assets/resorts/old-key-west/dining/olivia/1.png",
            "/assets/resorts/old-key-west/dining/olivia/2.png",
            "/assets/resorts/old-key-west/dining/olivia/3.png",
            "/assets/resorts/old-key-west/dining/olivia/4.png",
          ],
          description:
            "Caribbean flavors meet American favorites at this casual restaurant. It's truly a hidden gem! You're invited to Olivia's nautical-themed restaurant featuring Conch Fritters, sandwiches, and Havana Beef Sandwiches. ",
        },
        {
          name: "Good's Food To Go",
          imgs: ["/assets/resorts/old-key-west/dining/togo/1.png"],
          description:
            "A counter-service outdoor eatery where everything is 'all good!' Grab burgers, hot dogs, 'pizza nachos,' salads, or sandwiches to go and relax at the picnic table that overlooks the pool. Snacks and beverages are also available",
        },
        {
          name: "Turtle Shack Poolside Snacks",
          imgs: [
            "/assets/resorts/old-key-west/dining/pool/1.png",
            "/assets/resorts/old-key-west/dining/pool/2.png",
          ],
          description:
            "This seasonal snack shack includes full entrees like pizza, sandwiches, salads, and desserts and is steps away from one of the resort's four pools.  Draft and bottled beers, wines, and a selection of smoothies and soft drinks are also available. After finishing your meal, head to the nearby shuffleboards or game room for more adventures. ",
        },
        {
          name: "Gurgling Suitcase Libations & Spirits",
          imgs: [
            "/assets/resorts/old-key-west/dining/gurgling/1.png",
            "/assets/resorts/old-key-west/dining/gurgling/2.png",
            "/assets/resorts/old-key-west/dining/gurgling/3.png",
            "/assets/resorts/old-key-west/dining/gurgling/4.png",
          ],
          description:
            "Enjoy domestic and imported beers, wine, and signature drinks like the Turtle Krawl by the pool or inside this casual dining location. Are you getting hungry? Order off the menu from Olivia's Cafe and never have to leave your lounge chair",
        },
      ],
    };
  },
};
</script>

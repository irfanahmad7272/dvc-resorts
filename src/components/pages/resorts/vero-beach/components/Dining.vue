<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream m-20 mx-auto">
          <li
            class="border-custom-blue4 cursor-pointer border py-2 px-4"
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
      activePage: "Wind & Waves Grill",
      tabs: [
        {
          name: "Wind & Waves Grill",
          imgs: [
            "/assets/resorts/vero-beach/dining/wave/1.webp",
            "/assets/resorts/vero-beach/dining/wave/2.jpg",
            "/assets/resorts/vero-beach/dining/wave/3.jpg",
            "/assets/resorts/vero-beach/dining/wave/4.webp",
          ],
          description:
            "Feast on a delectable assortment of dishes at this lively seaside restaurant as you meet some of your favorite Disney Characters on select mornings. Later on, fresh seafood and locally sourced ingredients blend into entrees like Key West Shrimp and Roasted Salmon with braised red cabbage and spätzle. ",
        },
        {
          name: "The Green Cabin Room",
          imgs: [
            "/assets/resorts/vero-beach/dining/green/1.webp",
            "/assets/resorts/vero-beach/dining/green/2.jpg",
            "/assets/resorts/vero-beach/dining/green/3.jpg",
            "/assets/resorts/vero-beach/dining/green/4.jpg",
          ],
          description:
            "Come “aboard” this inviting nautical lounge for cocktail hour or dessert. The decor is modeled after the Spanish galleons, who were known to frequent the waters around Vero Beach. Legend has it that one vessel, the San Martin, shipwrecked off the coast in the early 1600s.  ",
        },
        {
          name: "Wind & Waves Bar",
          imgs: [
            "/assets/resorts/vero-beach/dining/bar/1.jpg",
            "/assets/resorts/vero-beach/dining/bar/2.webp",
            "/assets/resorts/vero-beach/dining/bar/3.jpg",
          ],
          description:
            "Retreat at this poolside bar, which serves specialty cocktails, draft beers, wine, and high-end Florida liquors. Go with the flow and unwind while listening to the sounds of the ocean waves. ",
        },
        {
          name: "Wind & Waves Market",
          imgs: [
            "/assets/resorts/vero-beach/dining/market/1.jpg",
            "/assets/resorts/vero-beach/dining/market/2.jpg",
          ],
          description:
            "This grab-and-go snack bar serves light meals, baked goods, burgers, sandwiches, and sweets like Mickey Whoopie Pies. Take your order poolside or relax in your spacious Villa.  ",
        },
      ],
    };
  },
};
</script>

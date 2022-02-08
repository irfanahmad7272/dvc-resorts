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
      activePage: "The Turf Club Bar and Grill",
      tabs: [
        {
          name: "The Turf Club Bar and Grill",
          imgs: [
            "/assets/resorts/saratoga-springs/dining/grill/1.jpg",
            "/assets/resorts/saratoga-springs/dining/grill/2.jpg",
            "/assets/resorts/saratoga-springs/dining/grill/3.jpg",
            "/assets/resorts/saratoga-springs/dining/grill/4.jpg",
          ],
          description:
            "Vintage equestrian memorabilia adorn the walls of this bar and grill, located next to the Lake Buena Vista Golf Course. Savor American favorites at this racetrack-inspired clubhouse with golf course and lakefront views",
        },
        {
          name: "The Artist's Palette",
          imgs: [
            "/assets/resorts/saratoga-springs/dining/art/1.png",
            "/assets/resorts/saratoga-springs/dining/art/02.jpg",
            "/assets/resorts/saratoga-springs/dining/art/03.jpg",
            "/assets/resorts/saratoga-springs/dining/art/2.png",
            "/assets/resorts/saratoga-springs/dining/art/3.png",
          ],
          description:
            "Create a pleasing culinary picture with grab-and-go items, sandwiches, salads, and hot breakfast at this quick-service eatery. It's open for breakfast, lunch, and dinner; menu items range from Mickey waffles to rotisserie chicken.",
        },
        {
          name: "The Paddock Grill",
          imgs: [
            "/assets/resorts/saratoga-springs/dining/padock/1.jpg",
            "/assets/resorts/saratoga-springs/dining/padock/2.png",
            "/assets/resorts/saratoga-springs/dining/padock/3.jpg",
            "/assets/resorts/saratoga-springs/dining/padock/4.jpg",
          ],
          description:
            "Dine alfresco at this open-air eatery, which serves breakfast, lunch, and dinner. Gourmet menu times like the Saratoga burger, spice-crusted fish, classic cobb salad, and homemade potato chips make this restaurant stand out. ",
        },
        {
          name: "Backstretch Pool Bar",
          imgs: [
            "/assets/resorts/saratoga-springs/dining/pool/1.jpg",
            "/assets/resorts/saratoga-springs/dining/pool/2.png",
            "/assets/resorts/saratoga-springs/dining/pool/3.jpg",
          ],
          description:
            "Enjoy classic snacks like pretzels, pizzas, sandwiches, and a variety of cocktails and mocktails at this poolside snack bar. Treats like ice cream are also available. ",
        },
      ],
    };
  },
};
</script>

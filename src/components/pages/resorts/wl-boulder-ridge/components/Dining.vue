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
      activePage: "Artist Points",
      tabs: [
        {
          name: "Artist Points",
          imgs: [
            "/assets/resorts/boulder-ridge/01.webp",
            "/assets/resorts/boulder-ridge/dining/2.webp",
            "/assets/resorts/boulder-ridge/dining/3.jpg",
            "/assets/resorts/boulder-ridge/dining/4.jpg",
          ],
          description:
            "Dine with beloved characters from Snow White and the Seven Dwarfs at the Story Book Dinner at Artist Point. The restaurant is transformed into an enchanted forest while you dine under twinkling lights. Enjoy a wide variety of cocktails, mocktails, and storybook-themed entrees, including Mushroom Bisque soup and Grimm Roasted Chicken. Top it all off with a 'poison' apple or Gooseberry pie for dessert.",
        },
        {
          name: "Whispering Canyon Cafe",
          imgs: [
            "/assets/resorts/boulder-ridge/dining/5.jpg",
            "/assets/resorts/boulder-ridge/dining/6.jpg",
            "/assets/resorts/boulder-ridge/dining/7.webp",
            "/assets/resorts/boulder-ridge/dining/8.jpg",
          ],
          description:
            "Round up the whole family for a rootin’ tootin’ good time with hearty western fare and antics from Cast Members. Serving breakfast, lunch, and dinner, Whispering Canyon Café offers entrees the entire family will love.  ",
        },
        {
          name: "Roaring Fork: ",
          imgs: [
            "/assets/resorts/boulder-ridge/dining/9.jpg",
            "/assets/resorts/boulder-ridge/dining/10.jpg",
          ],
          description:
            "Rush by for a rapid refuel. Continental and hot breakfast are served, along with gourmet sandwiches, grill items, and pizza for lunch and dinner. Try a roast beef bleu cheese sandwich or a signature Wilderness Salad. Beer and wine are also available.",
        },
        {
          name: "Territory Lounge",
          imgs: ["/assets/resorts/boulder-ridge/dining/11.webp"],
          description:
            "Rustic décor, northwestern wines, and delicious appetizers like flatbreads and wings are welcome, familiar territory. Specialty cocktails like the pear blossom cosmo and beers such as Moosehead and Red Hook are featured. ",
        },
        {
          name: "Geyser Point Bar and Grill ",
          imgs: [
            "/assets/resorts/boulder-ridge/dining/12.jpg",
            "/assets/resorts/boulder-ridge/dining/13.jpg",
            "/assets/resorts/boulder-ridge/dining/14.jpg",
          ],

          description:
            "A poolside restaurant with a wilderness theme, Geyser Point allows diners to explore spirits and quick bites while overlooking Bay Lake. ",
        },
      ],
    };
  },
};
</script>

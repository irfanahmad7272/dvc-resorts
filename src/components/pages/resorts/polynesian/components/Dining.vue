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
      activePage: "Best Friends Breakfast at ʻOhana",
      tabs: [
        {
          name: "Best Friends Breakfast at ʻOhana",
          imgs: [
            "/assets/resorts/polynesian/dining/ohana/1.jpg",
            "/assets/resorts/polynesian/dining/ohana/2.jpg",
          ],
          description: `"'Ohana means family," and you're treated as such at this restaurant, which serves family-style breakfast and dinner. Catch a glimpse of Cinderella Castle while you dine, and enjoy the sounds of Hawaiian music and marvel as your meal is prepared in an open-air kitchen. Mickey and pals greet you at breakfast as you take your pick from Mickey and Stitch waffles, scrambled eggs, breakfast potatoes, pineapple bread, and more in an all-you-care-to-enjoy setting. For dinner, enjoy Polynesian-inspired entrees with seasoned meats, island shrimp casserole, Kielbasa sausage, noodles, and more. Top it off with pineapple coconut bread pudding a la mode for dessert! `,
        },
        {
          name: "Disney's Spirit of Aloha Dinner Show",
          imgs: [
            "/assets/resorts/polynesian/dining/aloha/1.webp",
            "/assets/resorts/polynesian/dining/aloha/2.jpg",
          ],
          description:
            "Enjoy this spectacular, Hawaiian-inspired luau without leaving the east coast! Hula and fire dancers wow audiences along with songs and traditions from Tahiti, New Zealand, Hawaii, Samoa, and Tonga. Platters of pulled pork, ribs, and roasted chicken are brought to your table at this all-you-care-to-enjoy feast. Beer, wine, and soft drinks are included in the meal pricing. Make sure you save room for Pineapple Guava Cake for dessert! ",
        },
        {
          name: "Kona Café",
          imgs: [
            "/assets/resorts/polynesian/dining/kona/1.jpg",
            "/assets/resorts/polynesian/dining/kona/2.jpg",
            "/assets/resorts/polynesian/dining/kona/3.jpg",
          ],
          description:
            "Breakfast, lunch, and dinner are all available at this relaxing cafe with Asian inspirations—including an on-site sushi kitchen. ",
        },
        {
          name: "Tambu Lounge – Great Ceremonial House",
          imgs: [
            "/assets/resorts/polynesian/dining/tambu/1.webp",
            "/assets/resorts/polynesian/dining/tambu/2.jpg",
          ],
          description:
            "A tiki-style hut located in the main lobby of the Great Ceremonial House, it's the perfect place to grab a drink and a bite after arriving at the resort. Sample Hawaiian-inspired appetizers like flatbreads and barbecue pork ribs, along with specialty cocktails.",
        },
        {
          name: "Trader Sam's Grog Grotto",
          imgs: [
            "/assets/resorts/polynesian/dining/trader/1.png",
            // "/assets/resorts/polynesian/dining/trader/2.png",
            "/assets/resorts/polynesian/dining/trader/3.png",
            "/assets/resorts/polynesian/dining/trader/4.png",
          ],
          description:
            "Stop by this popular, tropical tiki bar with unique menu items that honor the cuisine of the South Seas. ",
        },
        {
          name: "Capt. Cook's",
          imgs: [
            "/assets/resorts/polynesian/dining/capt/1.png",
            "/assets/resorts/polynesian/dining/capt/2.png",
            "/assets/resorts/polynesian/dining/capt/3.png",
          ],
          description:
            "This quick-service restaurant serves breakfast, lunch, and dinner. Start your morning with a Mickey waffle or banana-stuffed french toast. Then, stop by for a unique array of sandwiches, salads, and sides later in the day",
        },
        {
          name: "Barefoot Pool Bar",
          imgs: [
            "/assets/resorts/polynesian/dining/lanai/1.png",
            "/assets/resorts/polynesian/dining/barefoot/2.png",
            "/assets/resorts/polynesian/dining/barefoot/3.png",
            "/assets/resorts/polynesian/dining/barefoot/4.png",
          ],
          description:
            "Smoothies, beer, wine, and tiki cocktails are served up at this outdoor, open-air bar overlooking a white-sand beach and the Seven Seas Lagoon. ",
        },
        {
          name: "Pineapple Lanai",
          imgs: [
            "/assets/resorts/polynesian/dining/lanai/1.webp",
            "/assets/resorts/polynesian/dining/lanai/2.png",
          ],
          description:
            "Can't get enough DOLE Whip®? Get this Magic Kingdom staple, soft-serve ice cream, and more at this sweet stop just outside the Great Ceremonial House. Get it served in a souvenir Tiki bowl to take home! ",
        },
      ],
    };
  },
};
</script>

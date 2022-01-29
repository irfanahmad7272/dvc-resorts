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
      activePage: "ʻAMAʻAMA – Contemporary Island Cooking",
      tabs: [
        {
          name: "ʻAMAʻAMA – Contemporary Island Cooking",
          imgs: [
            "/assets/resorts/aulani/dinning/amma/1.webp",
            "/assets/resorts/aulani/dinning/amma/2.webp",
            "/assets/resorts/aulani/dinning/amma/3.webp",
          ],
          description:
            " Sit back and relax at this beachfront eatery and let the sound of the ocean waves calm you.  The menu rotates throughout the year, highlighting fresh ingredients and modern twists on Hawaiian cuisine. ",
        },
        {
          name: "Disney Character Breakfast at Makahiki",
          imgs: [
            "/assets/resorts/aulani/dinning/malhaki/1.png",
            "/assets/resorts/aulani/dinning/malhaki/2.png",
            "/assets/resorts/aulani/dinning/malhaki/3.png",
            "/assets/resorts/aulani/dinning/malhaki/4.jpg",
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
          imgs: [
            "/assets/resorts/aulani/dinning/off-the-hook/1.jpg",
            "/assets/resorts/aulani/dinning/off-the-hook/2.webp",
          ],
          description:
            "This open-air, beachside lounge resembles a fisherman’s shack and serves various drinks and Hawaiian-inspired appetizers.",
        },
        {
          name: "The `Ōlelo Room",
          imgs: [
            "/assets/resorts/aulani/dinning/olelo/1.jpg",
            "/assets/resorts/aulani/dinning/olelo/2.jpg",
            "/assets/resorts/aulani/dinning/olelo/3.webp",
            "/assets/resorts/aulani/dinning/olelo/4.jpg",
          ],
          description:
            "Inspired and infused with the Hawaiian language, this bar and lounge offers beer, wine, spirits, and Hawaiian appetizers.",
        },
        {
          name: "Ka Wa'a: A Luau at Aulani",
          imgs: [
            "/assets/resorts/aulani/dinning/kawa/1.jpg",
            "/assets/resorts/aulani/dinning/kawa/2.jpg",
            "/assets/resorts/aulani/dinning/kawa/3.jpg",
            "/assets/resorts/aulani/dinning/kawa/4.jpg",
          ],
          description:
            "Discover a culinary and cultural experience that infuses the legends, traditions, natural wonders, and the people of Hawaii at this one-of-a-kind dining experience",
        },
      ],
    };
  },
};
</script>

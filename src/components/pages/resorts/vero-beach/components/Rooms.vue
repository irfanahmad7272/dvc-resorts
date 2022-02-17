<template>
  <div>
    <div class="mt-10 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto mb-8 md:mt-20">
          <li
            class="border-custom-blue4 cursor-pointer border py-2 px-4"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="tab in tabs"
            @click="activePage = tab.name"
            :key="tab.name"
          >
            {{ tab.name }}
          </li>
          <li
            class="border-custom-blue4 cursor-pointer border py-2 px-4"
            @click="activePage = 'Floor Plans'"
            :class="[{ 'bg-custom-blue4 text-white': activePage == 'Floor Plans' }]"
          >
            Floor Plans
          </li>
        </ul>
      </div>
      <RoomsTab
        :tabs="tabs"
        :activePage="activePage"
        :floors="floors"
        :floorImgs="floors.imgs"
        :activeFloor="activeFloor"
      />
    </div>
  </div>
</template>
<script>
import RoomsTab from "../../components/RoomsTab";
export default {
  components: { RoomsTab },

  data() {
    return {
      activePage: "Deluxe Studio",
      activeFloor: 0,
      floors: [
        {
          img: "/assets/resorts/vero-beach/floor/1.png",
          name: "Deluxe Studio",
          size: "1 queen-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/vero-beach/floor/2.png",
          name: "Deluxe Inn Room – Standard View",
          size: "2 queen-size beds Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/vero-beach/floor/3.png",
          name: "Deluxe Inn Room – Ocean View",
          size: "2 queen-size beds Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/vero-beach/floor/4.png",
          name: "1-Bedroom Villa",
          size: "1 king-size bed, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/vero-beach/floor/5.png",
          name: "2-Bedroom Villa",
          size: "1 king-size bed, 1 queen-size bed, 1 queen-size sleeper sofa, 1 double sleeper sofa, 1 sleeper chair Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/vero-beach/floor/7.png",
          name: "2-Bedroom Lock-Off Villa",
          size: "1 king-size bed, 1 queen-size bed, 1 queen-size sleeper sofa, 1 double sleeper sofa, 1 sleeper chair Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/vero-beach/floor/6.png",
          name: "3-Bedroom Beach Cottage",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: ["/assets/resorts/vero-beach/rooms/studio/2.jpg"],
          description: "1 queen-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Ceiling fan",
            "Paper plates and bowls, & plastic utensils",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Alarm clock",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Small refrigerator",
          ],
        },

        {
          name: "Deluxe Inn Room",
          imgs: ["/assets/resorts/vero-beach/rooms/studio/3.webp"],
          description: "2 queen-size beds Sleeps Up to 4",
          amenities: [
            "Ceiling fan",
            "Paper plates and bowls, & plastic utensils",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Alarm clock",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Small refrigerator",
          ],
        },
        {
          name: "1-Bedroom Villa",
          imgs: ["/assets/resorts/vero-beach/rooms/1bed/1.jpg"],
          description:
            "1 king-size bed, 1 queen-size bed, 1 queen-size sleeper sofa, 2 single pull-down beds (29' x 67') Sleeps Up to 8",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Refrigerator",
            "Whirlpool tub",
            "High chair",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "Ceiling fans",
            "Soaking tub",
            "Voicemail",
            "Blu-ray player",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/vero-beach/rooms/2bed/1.jpg",
            "/assets/resorts/vero-beach/rooms/2bed/2.jpg",
          ],
          description:
            "1 king-size bed, 1 queen-size bed, 1 queen-size sleeper sofa, 1 double sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Refrigerator",
            "Whirlpool tub",
            "High chair",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "Ceiling fans",
            "Soaking tub",
            "Voicemail",
            "Blu-ray player",
          ],
        },

        {
          name: "3-Bedroom Beach Cottage",
          imgs: ["/assets/resorts/vero-beach/rooms/3bed/1.jpg"],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Refrigerator",
            "Whirlpool tub",
            "High chair",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "Ceiling fans",
            "Soaking tub",
            "Voicemail",
            "Blu-ray player",
          ],
        },
      ],
    };
  },
};
</script>

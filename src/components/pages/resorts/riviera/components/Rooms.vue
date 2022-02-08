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
      activePage: "Tower Studio",
      activeFloor: 0,
      floors: [
        {
          img: "/assets/resorts/riviera/floors/1.png",
          name: "Tower Studio",
          size: "1 queen-size pull-down bed Sleeps Up to 2",
        },
        {
          img: "/assets/resorts/riviera/floors/2.png",
          name: "Deluxe Studio",
          size: "1 queen-size bed, 1 queen-size pull-down bed, 1 single pull-down bed Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/riviera/floors/3.png",
          name: "1-Bedroom Villa",
          size: "1 king-size bed, 1 queen-size pull down bed, 1 single pull-down bed Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/riviera/floors/4.png",
          name: "2-Bedroom Villa",
          size: "1 king-size bed, 2 queen-size beds, 1 queen-size pull-down bed, 1 single pull down bed Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/riviera/floors/5.png",
          name: "2-Bedroom Lock-Off Villa",
          size: "1 king-size bed, 1 queen-size bed, 2 queen-size pull-down beds, 2 single pull-down beds Sleeps Up to 10",
        },
        {
          img: "/assets/resorts/riviera/floors/6.png",
          name: "3-Bedroom Grand Villa",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Tower Studio",
          imgs: [
            "/assets/resorts/riviera/rooms/tower/2.jpg",
            "/assets/resorts/riviera/rooms/tower/1.jpg",
          ],
          description: "1 queen-size pull-down bed Sleeps Up to 2",
          amenities: [
            "Paper plates and bowls, & plastic utensils",
            "High chair (upon request)",
            "Private porch or balcony",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Ice bucket",
            "Full bathroom with walk-in shower",
            "Wireless Internet access",
            "Microwave",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Flat panel TV",
            "Coffee Maker",
            "Small refrigerator",
          ],
        },
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/riviera/rooms/deluxe/1.jpg",
            "/assets/resorts/riviera/rooms/deluxe/2.jpg",
          ],
          description:
            "1 queen-size bed, 1 full-size sleeper sofa, 1 single pull-down bed (29' x 67')",
          amenities: [
            "Private porch or balcony",
            "Dishes, glasses and utensils",
            "Paper plates and bowls, & plastic utensils",
            "Split bathroom with shower / tub combination on one side and walk-in shower on the other",
            "Ice bucket",
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
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Small refrigerator",
          ],
        },

        {
          name: "1-Bedroom Villa",
          imgs: ["/assets/resorts/riviera/rooms/1bed/1.png"],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Stacked washer and dryer",
            "Dishes, glasses and utensils",
            "Stove and oven",
            "Ice bucket",
            "Pots and pans",
            "Full bathroom with bubble-jet tub",
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
            "Stove and oven",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "High chair (upon request)",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/riviera/rooms/2bed/1.jpg",
            "/assets/resorts/riviera/rooms/2bed/2.webp",
            "/assets/resorts/riviera/rooms/2bed/3.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size pull-down bed, 1 single pull down bed Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Stacked washer and dryer",
            "Dishes, glasses and utensils",
            "Stove and oven",
            "Ice bucket",
            "Pots and pans",
            "Full bathroom with bubble-jet tub",
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
            "Stove and oven",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "High chair (upon request)",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            "/assets/resorts/riviera/rooms/3bed/1.jpg",
            "/assets/resorts/riviera/rooms/3bed/2.jpg",
            "/assets/resorts/riviera/rooms/3bed/3.jpg",
            "/assets/resorts/riviera/rooms/3bed/4.webp",
          ],
          description:
            "1  king-size bed, 2 queen-size beds, 2 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Stacked washer and dryer",
            "Dishes, glasses and utensils",
            "Stove and oven",
            "Ice bucket",
            "Pots and pans",
            "Full bathroom with bubble-jet tub",
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
            "Stove and oven",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "High chair (upon request)",
          ],
        },
      ],
    };
  },
};
</script>

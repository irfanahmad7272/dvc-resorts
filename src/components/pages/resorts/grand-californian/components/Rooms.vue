<template>
  <div>
    <div class="mt-10 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="mx-auto mb-8 bg-custom-lightcream md:mt-20">
          <li
            class="cursor-pointer border border-custom-blue4 py-2 px-4"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="tab in tabs"
            @click="activePage = tab.name"
            :key="tab.name"
          >
            {{ tab.name }}
          </li>
          <li
            class="cursor-pointer border border-custom-blue4 py-2 px-4"
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
          img: "/assets/resorts/grand-californian/floors/1.png",
          name: "Deluxe Studio",
          size: "1 queen-size bed and 1 queen-size sleeper sofa Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/grand-californian/floors/2.png",
          name: "1-Bedroom Villa",
          size: "1 king-size bed, 1 queen-size sleeper sofa, 1 single pull-down bed (29 x 67) Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/grand-californian/floors/3.png",
          name: "2-Bedroom Villa",
          size: "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 single pull-down bed (29 x 67) Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/grand-californian/floors/4.png",
          name: "2-Bedroom Lock-Off Villa",
          size: "1 king-size bed, 1 queen-size bed, 2 queen-size sleeper sofas, 1 single pull-down bed (29 x 67) Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/grand-californian/floors/5.png",
          name: "3-Bedroom Grand Villa",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa, 1 double-size sleeper sofa Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/grand-californian/rooms/studio/1.jpg",
            "/assets/resorts/grand-californian/rooms/studio/2.jpg",
            "/assets/resorts/grand-californian/rooms/studio/3.jpg",
            "/assets/resorts/grand-californian/rooms/studio/4.jpg",
            "/assets/resorts/grand-californian/rooms/studio/5.jpg",
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
          imgs: [
            "/assets/resorts/grand-californian/rooms/1bed/1.jpg",
            "/assets/resorts/grand-californian/rooms/1bed/2.jpg",
            "/assets/resorts/grand-californian/rooms/1bed/3.jpg",
            "/assets/resorts/grand-californian/rooms/1bed/4.jpg",
            "/assets/resorts/grand-californian/rooms/1bed/5.jpg",
          ],
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
            "/assets/resorts/grand-californian/rooms/2bed/1.jpg",
            "/assets/resorts/grand-californian/rooms/2bed/2.jpg",
            "/assets/resorts/grand-californian/rooms/2bed/3.jpg",
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
            "/assets/resorts/grand-californian/rooms/3bed/1.webp",
            "/assets/resorts/grand-californian/rooms/3bed/2.jpg",
            "/assets/resorts/grand-californian/rooms/3bed/3.jpg",
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

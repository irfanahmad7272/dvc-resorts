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
          img: "/assets/resorts/copper-creek/floor/01.jpg",
          name: "Deluxe Studio Villas (Sleeps Four)",
          size: "One queen-size bed & one queen-size sleeper sofa. Kitchenette. Full bath with tub/shower or walk-in shower.",
        },
        {
          img: "/assets/resorts/copper-creek/floor/4.png",
          name: "One-Bedroom Villa (Sleeps Four)",
          size: "One king-size bed & one queen-size sleeper sofa. Full kitchen. Washer/dryer. Full bathroom with whirlpool tub and walk-in shower.",
        },
        {
          img: "/assets/resorts/copper-creek/floor/1.png",
          name: "Two-Bedroom Villa (Sleeps Eight)",
          size: "One king-size bed, one queen-size beds and one queen-size sleeper sofa. Full kitchen. Washer/dryer. Two full bathrooms – one with whirlpool tub and shower, one with shower only.",
        },
        {
          img: "/assets/resorts/copper-creek/floor/2.png",
          name: "Three-Bedroom Grand Villa (Sleeps Twelve):",
          size: "One king-size bed, four queen-size beds and one queen-size sleeper sofa. Fully equipped kitchen. Laundry room with washer and dryer. Three bathrooms – one with whirlpool tub and shower, two with shower only.",
        },
        {
          img: "/assets/resorts/copper-creek/floor/3.png",
          name: "Two-Bedroom Cascade Cabin (Sleeps Eight):",
          size: "One king-size bed, one queen-size bed, one queen-size sleeper sofa, one pull-down bunk-size bed and one sleeper chair. Two bathrooms—one with walk-in shower and bubble-jet tub and the other with walk-in shower. Fully equipped kitchen. Laundry room with washer & dryer. Private deck with hot-tub and double-sided fireplace.",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/copper-creek/rooms/studio/1.jpg",
            "/assets/resorts/copper-creek/rooms/studio/2.jpg",
            "/assets/resorts/copper-creek/rooms/studio/3.jpg",
            "/assets/resorts/copper-creek/rooms/studio/4.jpg",
            "/assets/resorts/copper-creek/rooms/studio/5.jpg",
          ],
          description: "1 queen-size bed, 1 queen-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Ice bucket",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Paper plates and bowls, & plastic utensils",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "High chair (upon request)",
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
            "/assets/resorts/copper-creek/rooms/1bed/1.jpg",
            "/assets/resorts/copper-creek/rooms/1bed/2.png",
          ],
          description: "1 king-size bed, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/copper-creek/rooms/bed2/1.jpg",
            "/assets/resorts/copper-creek/rooms/bed2/2.jpg",
            "/assets/resorts/copper-creek/rooms/bed2/3.jpg",
          ],
          description:
            "1 king-size bed, 1 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            "/assets/resorts/copper-creek/rooms/bed3/1.png",
            "/assets/resorts/copper-creek/rooms/bed3/2.png",
          ],
          description:
            "1  king-size bed, 2 queen-size beds, 1 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "Cabin",
          imgs: [
            "/assets/resorts/copper-creek/rooms/Copper-Creek-Villas-and-Cabins-at-Disneys-Wilderness-Lodge_Full_30468.jpg",
          ],
          description:
            "1  king-size bed, 2 queen-size beds, 2 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Master bathroom with bubble-jet tub",
            "Washer and dryer",
            "In-room safe",
            "Hair dryer",
            "In-Mirror TV",
            "Coffee maker",
            "Screened-in porch",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "High chair",
            "Built-in hot tub on porch",
            "Flat screen television",
            "Second full bathroom",
            "Double-sided fireplace",
            "Microwave",
            "Toaster",
          ],
        },
      ],
    };
  },
};
</script>

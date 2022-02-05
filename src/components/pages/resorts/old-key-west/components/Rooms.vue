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
          img: "/assets/resorts/old-key-west/floor/1.png",
          name: "Deluxe Studio",
          size: "2 Queen Beds Sleeps up to 4 Adults",
        },
        {
          img: "/assets/resorts/old-key-west/floor/2.png",
          name: "1 Bedroom Villa",
          size: "1 King Bed and 1 Queen-Size Sleeper Sofa and 1 Twin-Size Sleeper Chair 1 King Bed and 1 Queen-Size Sleeper Sofa and 1 Twin-Size Sleeper Chair Sleeps up to 5 Adults",
        },
        {
          img: "/assets/resorts/old-key-west/floor/3.png",
          name: "2 Bedroom Villa",
          size: "1 King Bed and 2 Queen Beds and 1 Queen-Size Sleeper Sofa and 1 Twin-Size Sleeper Chair 1 King Bed and 2 Queen Beds and 1 Queen-Size Sleeper Sofa and 1 Twin-Size Sleeper Chair Sleeps up to 9 Adults",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/old-key-west/rooms/studio/1.jpg",
            "/assets/resorts/old-key-west/rooms/studio/2.webp",
            "/assets/resorts/old-key-west/rooms/studio/3.jpg",
          ],
          description:
            "1 queen-size bed, 1 full-size sleeper sofa, 1 single pull-down bed (29' x 67')",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Whirlpool tub",
            "DVD player",
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
            "Refrigerator",
          ],
        },

        {
          name: "1 Bedroom Villa",
          imgs: [
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 1.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 5.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 6.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 7.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 8.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 12.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 14.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 15.jpg",
            "/assets/resorts/old-key-west/rooms/1bed/Old Key Rooms 1 Bedroom 16.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 5",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Whirlpool tub",
            "DVD player",
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
            "Refrigerator",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 1.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 2.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 3.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 4.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 5.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 6.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 7.jpg",
            // "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 8.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 9.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Whirlpool tub",
            "DVD player",
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
            "Refrigerator",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 6.jpg",
            "/assets/resorts/old-key-west/rooms/studio/Old Key West Rooms Studio 7.jpg",
          ],
          description:
            "1  king-size bed, 2 queen-size beds, 2 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
            "Whirlpool tub",
            "DVD player",
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
            "Refrigerator",
          ],
        },
      ],
    };
  },
};
</script>

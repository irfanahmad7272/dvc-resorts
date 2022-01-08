<template>
  <div>
    <div class="mt-10 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto mb-8 md:mt-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="tab in tabs"
            @click="activePage = tab.name"
            :key="tab.name"
          >
            {{ tab.name }}
          </li>
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            @click="activePage = 'Floor Plans'"
            :class="[
              { 'bg-custom-blue4 text-white': activePage == 'Floor Plans' },
            ]"
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
      activePage: "Hotel Room",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/aulani/floor/1.png",
          "/assets/resorts/aulani/floor/2.png",
          "/assets/resorts/aulani/floor/3.png",
          "/assets/resorts/aulani/floor/4.png",
        ],
        description: [
          {
            name: "Aulani Floorplan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Aulani Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
        ],
      },
      tabs: [
        {
          name: "Hotel Room",
          imgs: [
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 1.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 5.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 6.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 11.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 13.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 16.jpg",
            // "/assets/resorts/animal-kingdom/Animal Kingdom Studio 18 (2).jpg",
          ],
          description:
            "2 queen-size beds Sleeps Up to 4 Guests and 1 infant (under 3 years of age) 17 Vacation Points Per Night Points Chart- Modal Deluxe Studio",
          amenities: [
            "Single-serve tea and coffee maker",

            "Small refrigerator",
            "Full bathroom",
            "Slippers",
            "Blu-ray player",
            "Free Wifi",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",

            "Portable crib (available upon request)",
          ],
        },
        {
          name: "Deluxe Studio",
          imgs: [
            // "/assets/resorts/aulani/rooms/studio/Aulani Rooms Studio 1.JPG",
            "/assets/resorts/aulani/rooms/studio/Aulani Rooms Studio 2.png",
            "/assets/resorts/aulani/rooms/studio/Aulani Rooms Studio 3.png",
            "/assets/resorts/aulani/rooms/studio/Aulani Rooms Studio 5.jpg",
            "/assets/resorts/aulani/rooms/studio/Aulani Rooms Studio 14.png",
          ],
          description:
            "1 queen-size bed and 1 queen-size sleeper sofa Sleeps Up to 4 Guests and 1 infant (under 3 years of age)",
          amenities: [
            "Kitchenette",
            "Paper plates and bowls",
            "plastic utensils",
            "Refrigerator",
            "Toaster",
            "Blu-ray player",

            "Tea kettle",
            "Portable crib (available upon request",
            "Blu-ray player",
            "Small refrigerator",
            "Microwave",
            "Full bathroom",
            "Iron & Ironing Board",
            "Hair Dryer",
            "In-room safe",

            "Coffee make",
            "Free Wifi",
          ],
        },
        {
          name: "1-Bedroom Villa – Value Accommodation",
          imgs: [
            "/assets/resorts/aulani/rooms/1bedvila/Aulani Rooms 1 Bedroom Kitchen 11.jpg",
            "/assets/resorts/aulani/rooms/1bedvila/Aulani Rooms 1 Bedroom Master Bedroom 1.jpg",
            "/assets/resorts/aulani/rooms/1bedvila/Aulani Rooms 1 Bedroom Master Bedroom 13.jpg",
          ],
          description:
            "1 king-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Microwave",
            "Washer and dryer",
            "Whirlpool tub",
            "Iron and ironing board",
            "Coffee Maker",
            "Hair dryer",
            "Portable Cr",
            "Free Wifi ",
          ],
        },
        {
          name: "1 Bedroom Villa",
          imgs: [
            "/assets/resorts/aulani/rooms/1bed/Aulani Rooms 1 Bedroom 1.png",
            "/assets/resorts/aulani/rooms/1bed/Aulani Rooms 1 Bedroom 2.png",
            "/assets/resorts/aulani/rooms/1bed/Aulani Rooms 1 Bedroom 3.png",
            // "/assets/resorts/aulani/rooms/1bed/Aulani Rooms 1 Bedroom 4.png",
            "/assets/resorts/aulani/rooms/1bed/Aulani Rooms 1 Bedroom 5.png",
          ],
          description:
            "1 king-size bed, 1 double-size sleeper sofa, 1 sleeper chair Sleeps Up to 5",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Washer and dryer",
            "Free Wifi",
            "Microwave",
            "Blender (available upon request",
            "Electric mixer (available upon request)",
            "Laundry baskets",
            "Blu-ray player",
            "Bed rails (available upon request)",

            "Portable Crib",
            "Hair Dryer",
            "Iron & Iron",
            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/aulani/rooms/2bed/Aulani Rooms 2 Bedroom Master Bedroom 2.jpg",
            // "/assets/resorts/aulani/rooms/2bed/Aulani Rooms 2 Bedroom Second Bedroom 1.PNG",)
          ],
          description:
            "1 king-size bed, 1 queen-size sleeper sofa, 1 single pull-down bed (29' x 67') Sleeps Up to 9 Guests and 1 infant (under 3 years of age)",
          amenities: [
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Washer and dryer",
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",
            "Blender (available upon request)",
            "Electric mixer (available upon request",
            "Laundry baskets",

            "Tea kettle",
            "Blu-ray player",

            "High chairs",
            "Portable Crib",

            "Hair Dryer",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Wireless In",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },

        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            // "/assets/resorts/aulani/rooms/3bed/Aulani Rooms 3 Bedroom Grand Villa 1.JPG",
            "/assets/resorts/aulani/rooms/3bed/Aulani Rooms 3 Bedroom Grand Villa 2.jpg",
            // "/assets/resorts/aulani/rooms/3bed/Aulani Rooms 3 Bedroom Grand Villa 3.PNG",
            "/assets/resorts/aulani/rooms/3bed/Aulani Rooms 3 Bedroom Grand Villa 4.png",
            "/assets/resorts/aulani/rooms/3bed/Aulani Rooms 3 Bedroom Grand Villa 5.png",
          ],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 12 Guests and 1 infant (under 3 years of age)",
          amenities: [
            "Toaster",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Refrigerator",
            "Toaster",
            "Fully Equipped Kitchen",
            "Internet - Free WiFi Service",
            "Microwave",
            "Tea kettle",
            "Blender (available upon request)",
            "Electric mixer (available upon request)",
            "Laundry baskets",
            "Blu-ray player",

            "High Chair",

            "Hair Dryer",
            "Iron & Ironing Board",
            "Bed rails (available upon request)",
            "Washer & Dryer",
            "Wireless In",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
      ],
    };
  },
};
</script>

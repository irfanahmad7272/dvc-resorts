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
      activePage: "Tower Studio",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan One Bedroom Jambo House.jpg",
          "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Studio Jambo House.9199fb6c.jpg",
          "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Studio Jambo House.9199fb6c.jpg",
          "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Three Bedroom Jambo House.jpg",
          "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Two Bedroom Jambo House.jpg",
        ],
        description: [
          {
            name: "Rivera Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Rivera Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Rivera Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Rivera Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Rivera Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
        ],
      },
      tabs: [
        {
          name: "Tower Studio",
          imgs: [
            "/assets/resorts/rci/rooms/tower/1.jpeg",
            "/assets/resorts/rci/rooms/tower/2.jpeg",
            "/assets/resorts/rci/rooms/tower/3.jpeg",
            "/assets/resorts/rci/rooms/tower/4.jpeg",
            "/assets/resorts/rci/rooms/tower/5.jpeg",
            "/assets/resorts/rci/rooms/tower/6.jpeg",
            "/assets/resorts/rci/rooms/tower/7.jpeg",
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
            "/assets/resorts/rci/rooms/tower/1.jpeg",
            "/assets/resorts/rci/rooms/tower/2.jpeg",
            "/assets/resorts/rci/rooms/tower/3.jpeg",
            "/assets/resorts/rci/rooms/tower/4.jpeg",
            "/assets/resorts/rci/rooms/tower/5.jpeg",
            "/assets/resorts/rci/rooms/tower/6.jpeg",
            "/assets/resorts/rci/rooms/tower/7.jpeg",
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
            "/assets/resorts/rci/rooms/1bed/1.jpg",
            "/assets/resorts/rci/rooms/1bed/2.jpg",
            "/assets/resorts/rci/rooms/1bed/3.jpg",
            "/assets/resorts/rci/rooms/1bed/4.jpg",
            "/assets/resorts/rci/rooms/1bed/5.jpg",
            "/assets/resorts/rci/rooms/1bed/6.jpg",
            "/assets/resorts/rci/rooms/1bed/7.jpg",
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
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa1.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa2.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa3.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa4.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa5.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa6.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa7.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa8.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa9.webp",
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
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa1.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa2.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa3.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa4.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa5.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa6.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa7.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa8.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa9.webp",
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

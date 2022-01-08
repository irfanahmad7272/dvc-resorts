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
      activePage: "Deluxe Studio",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/polynesian/floor/1.png",
          "/assets/resorts/polynesian/floor/1.png",
          "/assets/resorts/polynesian/floor/1.png",
        ],
        description: [
          {
            name: "Polynensian Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Polynensian Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Polynensian Floor plan Studio Kadani Village",
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
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/polynesian/rooms/1.jpg",
            "/assets/resorts/polynesian/rooms/2.jpg",
            "/assets/resorts/polynesian/rooms/3.jpg",
            "/assets/resorts/polynesian/rooms/4.jpg",
          ],
          description:
            "1 queen-size bed, 1 queen-size sleeper sofa, 1 single pull-down bed (29' x 67') Sleeps Up to 5",
          amenities: [
            "Fully equipped kitchen",
            "Paper plates and bowls, & plastic utensils",
            "Small refrigerator",
            "Full bath separated into two areas—one with shower and sink, and the other with toilet, sink and tub/shower combination",
            "Private porch or balcony",
            "Lighted make-up mirror",
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
          imgs: ["/assets/resorts/polynesian/rooms/1bed/1.jpg"],
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
          name: "Bungalow",
          imgs: [
            "/assets/resorts/polynesian/rooms/2bed/1.jpg",
            "/assets/resorts/polynesian/rooms/2bed/2.jpg",
            "/assets/resorts/polynesian/rooms/2bed/3.jpg",
          ],
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
            "Voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Alarm clock",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Refrigerator",
            "Two full bathrooms",
            "Vacuum cleaner",
            "Robes",
            "Private deck with plunge pool and lounge furniture",
            "Lighted make-up mirror",
          ],
        },
      ],
    };
  },
};
</script>

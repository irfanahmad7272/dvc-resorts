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
          "/assets/resorts/saratoga-springs/floor/1.png",
          "/assets/resorts/saratoga-springs/floor/2.png",
          "/assets/resorts/saratoga-springs/floor/3.png",
          "/assets/resorts/saratoga-springs/floor/4.png",
          "/assets/resorts/saratoga-springs/floor/5.png",
        ],
        description: [
          {
            name: "Saratoga Springs Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Saratoga Springs Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Saratoga Springs Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Saratoga Springs Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Saratoga Springs Floor plan Three Bedroom Jambo House",
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
          imgs: ["/assets/resorts/saratoga-springs/rooms/studio/1.jpg"],
          description: "1 queen-size bed, 1 double-size sleeper sofa",
          amenities: [
            "Kitchenette",
            "Paper plates and bowls, & plastic utensils",
            "Dishes, glasses and utensils",
            "DVD player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
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
          name: "1 Bedroom Villa",
          imgs: [
            "/assets/resorts/saratoga-springs/rooms/1bed/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/3.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/4.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/5.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/6.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/7.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/8.jpg",
            "/assets/resorts/saratoga-springs/rooms/1bed/9.jpg",
          ],
          description: "1 king-size bed, 1 queen-size sleeper sofa Sleeps 5",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Stove and oven",
            "Washer and dryer",
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
            "/assets/resorts/saratoga-springs/rooms/2bed/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/2bed/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/2bed/3.jpg",
            "/assets/resorts/saratoga-springs/rooms/2bed/4.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa Sleeps 9",
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
          name: "Treehouse Villa",
          imgs: [
            "/assets/resorts/saratoga-springs/rooms/3bed/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/3.jpg",
          ],
          description:
            "2 queen-size beds, 1 bunk bed, 1 queen-size sleeper sofa, 1 sleeper chair sleeps Up to 9",
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
            "/assets/resorts/saratoga-springs/rooms/3bed/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/3.jpg",
          ],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps 12",
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

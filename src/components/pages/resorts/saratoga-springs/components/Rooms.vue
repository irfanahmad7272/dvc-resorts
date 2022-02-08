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
          img: "/assets/resorts/saratoga-springs/floor/1.png",
          name: "Deluxe Studio",
          size: "1 queen-size bed, 1 double-size pull-down Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/2.png",
          name: "1-Bedroom Villa Standard Room",
          size: "1 king-size bed, 1 queen-size pull-down, 1 twin-size pull-down Exclusive to Members Booking with Points: 5th Guest can be accommodated, but no additional bedding, linens or towels will be provided Sleeps Up to 4",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/3.png",
          name: "2-Bedroom Villa",
          size: "1 king-size bed, 2 queen-size beds, 1 queen-size pull-down, 1 twin-size pull-down Exclusive to Members Booking with Points: 9th Guest can be accommodated, but no additional bedding, linens or towels will be provided Sleeps Up to 8",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/4.png",
          name: "2-Bedroom Lock-Off Villa",
          size: "1 king-size bed, 1 queen-size bed, 1 queen-size pull-down, 1 double-size pull-down, 1 twin-size pull-down Exclusive to Members Booking with Points: 9th Guest can be accommodated, but no additional bedding, linens or towels will be provided Sleeps Up to 8",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/7.png",
          name: "Treehouse Villa",
          size: "2 queen-size beds, 1 bunk bed, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/6.png",
          name: "3-Bedroom Grand Villa Standard Room",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size pull-down Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/saratoga-springs/floor/5.png",
          name: "3-Bedroom Grand Villa Preferred Room",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size pull-down Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/saratoga-springs/rooms/studio/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/studio/1.jpg",
          ],
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
          description: "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa Sleeps 9",
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
            "/assets/resorts/saratoga-springs/rooms/treehouse/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/treehouse/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/treehouse/3.jpg",
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
            "/assets/resorts/saratoga-springs/rooms/3bed/01.webp",
            "/assets/resorts/saratoga-springs/rooms/3bed/1.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/2.jpg",
            "/assets/resorts/saratoga-springs/rooms/3bed/3.jpg",
          ],
          description: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps 12",
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

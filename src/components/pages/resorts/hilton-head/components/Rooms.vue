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
          "/assets/resorts/hilton-head/floor/1.png",
          "/assets/resorts/hilton-head/floor/2.png",
          "/assets/resorts/hilton-head/floor/3.png",
          "/assets/resorts/hilton-head/floor/4.png",
        ],
        description: [
          {
            name: "Hilton Head Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Hilton Head Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Hilton Head Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Hilton Head Floor plan Three Bedroom Jambo House",
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
          imgs: ["/assets/resorts/hilton-head/rooms/studio/1.jpg"],
          description:
            "1 queen-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Kitchenette",
            "Alarm clock",
            "Small refrigerator",
            "Full bathroom",
            "Paper plates, bowls, and plastic utensils",
            "Flat screen television",
            "DVD Player",
            "Wireless Internet access",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Voicemail",
            "Portable crib (available upon request)",
          ],
        },
        {
          name: "1-Bedroom Villa",
          imgs: [
            "/assets/resorts/hilton-head/rooms/1bed/1.jpg",
            "/assets/resorts/hilton-head/rooms/1bed/2.jpg",
            "/assets/resorts/hilton-head/rooms/1bed/3.jpg",
          ],
          description:
            "1 queen-size bed and 1 queen-size sleeper sofa Sleeps Up to 4 Guests and 1 infant (under 3 years of age)",
          amenities: [
            "Kitchenette",
            "Fully equipped kitchen",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Toaster",
            "DVD Player",
            "Alarm clock",
            "Whirlpool tub",
            "Portable crib (available upon request",
            "Blu-ray player",
            "Refrigerator",
            "Microwave",
            "Full bathroom",
            "Iron & Ironing Board",
            "Hair Dryer",
            "In-room safe",
            "Voicemail",
            "Coffee maker",
            "Flat screen television",
            "Wireless Internet access",
            "Stove and oven",
          ],
        },
        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/hilton-head/rooms/1bed/1.jpg",
            "/assets/resorts/hilton-head/rooms/1bed/2.jpg",
            "/assets/resorts/hilton-head/rooms/1bed/3.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Toaster",
            "DVD Player",
            "Alarm clock",
            "Whirlpool tub",
            "Portable crib (available upon request",
            "Blu-ray player",
            "Refrigerator",
            "Microwave",
            "Full bathroom",
            "Iron & Ironing Board",
            "Hair Dryer",
            "In-room safe",
            "Voicemail",
            "Coffee maker",
            "Flat screen television",
            "Wireless Internet access",
            "Stove and oven",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: ["/assets/resorts/hilton-head/rooms/1bed/3.jpg"],
          description:
            "1 king-size bed, 1 double-size sleeper sofa, 1 sleeper chair Sleeps Up to 5",
          amenities: [
            "Fully equipped kitchen",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Toaster",
            "DVD Player",
            "Alarm clock",
            "Whirlpool tub",
            "Portable crib (available upon request",
            "Blu-ray player",
            "Refrigerator",
            "Microwave",
            "Full bathroom",
            "Iron & Ironing Board",
            "Hair Dryer",
            "In-room safe",
            "Voicemail",
            "Coffee maker",
            "Flat screen television",
            "Wireless Internet access",
            "Stove and oven",
          ],
        },
      ],
    };
  },
};
</script>

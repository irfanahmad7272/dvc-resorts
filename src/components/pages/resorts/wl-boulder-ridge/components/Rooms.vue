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
      floors: [
        {
          img: "/assets/resorts/boulder-ridge/floor/1.png",
          name: "Boulder Ridge Floor plan One Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/2.png",
          name: "Boulder Ridge Floor plan Studio Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/3.png",
          name: "Boulder Ridge Floor plan Studio Kadani Village",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/4.png",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/4.png",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/4.png",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/4.png",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/boulder-ridge/rooms/studio/1.jpg",
            "/assets/resorts/boulder-ridge/rooms/studio/2.jpg",
            "/assets/resorts/boulder-ridge/rooms/studio/3.jpg",
            "/assets/resorts/boulder-ridge/rooms/studio/4.jpg",
          ],
          description:
            "1 queen-size bed, 1 double-size sleeper sofa, 1 single pull-down bed (29' x 67') Sleeps Up to 5",
          amenities: [
            "Dishes, glasses and utensils",
            "Paper Plates/Bowls/Plastic Utensils",
            "High chair (upon request)",
            "DVD player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Wireless Internet access",
            "Microwave",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "High chair (upon request)",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Small Fridge",
          ],
        },

        {
          name: "1-Bedroom Villa",
          imgs: [
            "/assets/resorts/boulder-ridge/rooms/bed1/1.jpg",
            "/assets/resorts/boulder-ridge/rooms/bed1/2.jpg",
            "/assets/resorts/boulder-ridge/rooms/bed1/3.jpg",
            "/assets/resorts/boulder-ridge/rooms/bed1/4.jpg",
          ],
          description: "1 king-size bed, 1 queen-size sleeper sofa",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Private porch or balconys",
            "Whirlpool tub",
            "Washer and dryer",
            "DVD player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "High chair (upon request)",
            "Wireless Internet access",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
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
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Second full bathroom",
            "Whirlpool tub",
            "Washer and dryer",
            "DVD player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "High chair (upon request)",
            "Wireless Internet access",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
      ],
    };
  },
};
</script>

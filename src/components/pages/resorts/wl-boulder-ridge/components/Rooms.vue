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
          img: "/assets/resorts/boulder-ridge/floor/1.png",
          name: "Deluxe Studio Villas (Sleeps Five)",
          size: "Deluxe Studio Villas feature one full bathroom and accommodate up to five Guests, plus one child under age three in a crib, and include a kitchenette, queen-size bed, double-size sleeper sofa, pull-down bunk sized bed, flat-panel TV, DVD player, and private balcony.",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/3.png",
          name: "One-Bedroom Villa (Sleeps Four Plus)",
          size: "Features a master suite with a king-size bed and a private bathroom, and a living room with queen-size sleeper sofa. * 5th guest can be accommodated but must provide their own bedding and linens",
        },
        {
          img: "/assets/resorts/boulder-ridge/floor/2.png",
          name: "Two-Bedroom Villa (Sleeps Eight Plus)",
          size: "Features a master suite with a king-size bed; a separate bedroom with 2 queen-size beds and private bathroom; and a living room with queen-size sleeper sofa. * 9th guest can be accommodated but must provide own bedding and linens",
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
          description: "1 king-size bed, 1 queen-size beds, 1 queen-size sleeper sofa",
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

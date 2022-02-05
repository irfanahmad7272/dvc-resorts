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
          img: "/assets/resorts/boardwalk-villas/floor/4.png",
          name: "Deluxe Studio Villas (Sleeps Five)",
          size: "Studios feature kitchenette with microwave oven, under-counter refrigerator, wet bar, coffee maker, ceiling fan, TV, hair dryer and high-speed internet access. Private porch or balcony. One queen-size bed, one pull-down bunk size bed and a double-size sleeper sofa. The average studio offers 359 square feet of living space.",
        },
        {
          img: "/assets/resorts/boardwalk-villas/floor/1.png",
          name: "One-Bedroom Villa (Sleeps Four Plus)",
          size: "Features a fully equipped kitchen, washer/dryer, ceiling fans, TV in each room and VCR in the living room. Master suite features a king-size bed, a whirlpool tub, hair dryer and high-speed internet access. Queen-size sleeper sofa in the living room. Private porch or balcony. – 712 square feet of living space. * Fifth guest can be accommodated, but must provide their own bedding and linens.",
        },
        {
          img: "/assets/resorts/boardwalk-villas/floor/2.png",
          name: "Two-Bedroom Lock-Off Villa (Sleeps Eight)",
          size: "Features a fully equipped kitchen, washer/dryer, ceiling fans, TV in each room and VCR in the living room. Master suite features a king-size bed, a whirlpool tub, hair dryer and high-speed internet access. Additional bedroom offers private bath with hair dryer, queen-size bed and double-size sleeper sofa. Queen-size sleeper sofa in the living room. Private porch or balcony. – 1,072 square feet of living space.",
        },
        {
          img: "/assets/resorts/boardwalk-villas/floor/3.png",
          name: "Three-Bedroom Grand Villas (Sleep Twelve)",
          size: "Features a King-size bed in master bedroom, two queen size beds in two additional bedrooms, Queen-size sleeper sofa in living room, three bathrooms, Whirlpool tub in master bathroom, Flat panel TV and DVD player in living room, Flat panel TV in master bedroom, Fully equipped in-room laundry area with washer and dryer and private balcony.",
        },
      ],
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/boardwalk-villas/rooms/studio/BoardWalk Rooms Studio 5.png",
            "/assets/resorts/boardwalk-villas/rooms/studio/BoardWalk Rooms Studio 6.png",
            "/assets/resorts/boardwalk-villas/rooms/studio/BoardWalk Rooms Studio 7.jpg",
            "/assets/resorts/boardwalk-villas/rooms/studio/BoardWalk Rooms Studio 8.jpg",
            "/assets/resorts/boardwalk-villas/rooms/studio/BoardWalk Rooms Studio 9.jpg",
          ],
          description:
            "1 queen-size bed, 1 full-size sleeper sofa, 1 single pull-down bed (29' x 67')",
          amenities: [
            "Kitchenette",
            "Paper plates and bowls, & plastic utensils",
            "Small refrigerator",
            "Full bathroom",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Internet - Free WiFi Service",
            "Microwave",
            "Voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Mini-refrigerator",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },

        {
          name: "1 Bedroom Villa",
          imgs: [
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 3.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 4.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 5.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 6.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 7.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 8.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 9.png",
            "/assets/resorts/boardwalk-villas/rooms/1bed/BoardWalk Rooms 1 Bedroom 10.png",
          ],
          description:
            "5th Guest can be accommodated, but no additional bedding, linens or towels will be provided Sleeps Up to 4",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Whirlpool tub",
            "Toaster",
            "Wireless Internet access",
            "Fully Equipped Kitchen with Refrigerator",
            "Microwave",
            "Voicemail",
            "High Chair",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Hair Dryer",
            "Flat screen television",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "2-Bedroom",
          imgs: [
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom 5.jpg",
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master 4.jpg",
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master 5.jpg",
            // "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master Second Bedroom 3.jpg",
          ],
          description:
            "1 king-size bed, 1 queen-size bed, 1 full-size sleeper sofa, 1 queen-size sleeper sofa, 1 single pull-down bed (29' x 67')",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Whirlpool tub",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Voicemail",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Hair Dryer",
            "Flat screen television",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            "/assets/resorts/boardwalk-villas/rooms/3bed/1.jpg",
            "/assets/resorts/boardwalk-villas/rooms/3bed/2.jpg",
            "/assets/resorts/boardwalk-villas/rooms/3bed/3.jpg",
          ],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Whirlpool tub",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Voicemail",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Hair Dryer",
            "Flat screen television",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
            "Portable crib",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="mt-10 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto mb-8 md:mt-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="tab in tabs"
            @click="changeView($event, tab.name)"
            :key="tab.name"
          >
            <a :href="'#' + tab.name"> {{ tab.name }}</a>
          </li>
          <li
            class="py-2 px-4 border border-custom-blue4"
            @click="changeView($event, 'Floor Plans')"
            :class="[
              { 'bg-custom-blue4 text-white': activePage == 'Floor Plans' },
            ]"
          >
            <a> Floor Plans </a>
          </li>
        </ul>
      </div>
      <div class="w-full text-center col-span-12 md:col-span-9">
        <template v-for="(tab, index) in tabs">
          <div :key="index" v-if="activePage == tab.name">
            <div>
              <h1 class="text-3xl font-semibold text-custom-blue4">
                {{ tab.name }}
              </h1>
            </div>
            <div class="py-10 px-5 md:px-0">
              <ResortsSlider :images="tab.imgs" />
            </div>
            <span class="inline-block w-8/12 text-2xl text-custom-blue4 mt-5">
              {{ tab.description }}
            </span>
            <span class="text-custom-blue2 font-semibold text-2xl block mt-5">
              Amenities</span
            >
            <div class="m-5">
              <div class="mt-2 text-left list-disc text-custom-blue4 mx-auto">
                <ul class="list-disc grid grid-cols-2 md:grid-cols-3 gap-x-10">
                  <li
                    class="md:px-4"
                    v-for="(amenitie, index) in tab.amenities"
                    :key="index"
                  >
                    {{ amenitie }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <div v-if="activePage === 'Floor Plans'" class="w-full">
          <div class="text-center w-full">
            <h1 class="text-3xl font-semibold text-custom-blue4">
              Floor Plans
            </h1>
          </div>

          <div>
            <span class="inline-block w-8/12 text-lg text-custom-blue4 mt-5">
              {{ floors.description[activeFloor].name }}
            </span>
            <span class="inline-block w-8/12 text-lg text-custom-blue4 mt-5">
              {{ floors.description[activeFloor].size }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: { ResortsSlider },
  data() {
    return {
      activePage: "Deluxe Studio",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/boardwalk-villas/floor/1.png",
          "/assets/resorts/boardwalk-villas/floor/2.png",
          "/assets/resorts/boardwalk-villas/floor/3.png",
          "/assets/resorts/boardwalk-villas/floor/4.png",
        ],
        description: [
          {
            name: "Boardwalk Villas Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Boardwalk Villas Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Boardwalk Villas Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Boardwalk Villas Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Boardwalk Villas Floor plan Three Bedroom Jambo House",
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
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom 5.jpg",
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master 4.jpg",
            "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master 5.jpg",
            // "/assets/resorts/boardwalk-villas/rooms/2bed/BoardWalk Rooms 2 Bedroom Master Second Bedroom 3.jpg",
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
  methods: {
    changeView(e, tab) {
      e.preventDefault();
      this.activePage = tab;
    },
  },
};
</script>

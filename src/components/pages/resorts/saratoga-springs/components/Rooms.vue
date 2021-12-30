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
              <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
                <div v-for="(img, i) in tab.imgs" :key="i">
                  <img
                    class="w-full h-64 md:h-96 pointer-events-none"
                    :src="img"
                    alt="slider-imgs"
                  />
                </div>
              </VueSlickCarousel>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
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
  methods: {
    changeView(e, tab) {
      e.preventDefault();
      this.activePage = tab;
    },
  },
};
</script>

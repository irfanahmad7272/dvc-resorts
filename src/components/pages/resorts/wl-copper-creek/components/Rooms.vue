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
          "/assets/resorts/copper-creek/floor/1.png",
          "/assets/resorts/copper-creek/floor/2.png",
          "/assets/resorts/copper-creek/floor/3.png",
          "/assets/resorts/copper-creek/floor/4.png",
          "/assets/resorts/copper-creek/floor/3.png",
        ],
        description: [
          {
            name: "Copper Creek Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Copper Creek Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Copper Creek Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Copper Creek Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Copper Creek Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Copper Creek Floor plan Three Bedroom Jambo House",
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
            "/assets/resorts/copper-creek/rooms/studio/1.jpg",
            "/assets/resorts/copper-creek/rooms/studio/2.jpg",
            "/assets/resorts/copper-creek/rooms/studio/3.jpg",
            "/assets/resorts/copper-creek/rooms/studio/4.jpg",
            "/assets/resorts/copper-creek/rooms/studio/5.jpg",
          ],
          description:
            "1 queen-size bed, 1 queen-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Ice bucket",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Paper plates and bowls, & plastic utensils",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "Toaster",
            "Wireless Internet access",
            "Microwave",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "High chair (upon request)",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
            "Small refrigerator",
          ],
        },

        {
          name: "1-Bedroom Villa",
          imgs: ["/assets/resorts/copper-creek/rooms/studio/1.jpg"],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
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
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 sleeper chair Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: ["/assets/resorts/copper-creek/rooms/bed3/1.jpg"],
          description:
            "1  king-size bed, 2 queen-size beds, 2 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Full bathroom with bubble jet tub",
            "Washer and dryer",
            "Blu-ray player",
            "Hair dryer",
            "Portable crib",
            "Coffee maker",
            "Kitchenette",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Full bathroom",
            "Flat screen television",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "Cabin",
          imgs: ["/assets/resorts/copper-creek/rooms/bed3/1.jpg"],
          description:
            "1  king-size bed, 2 queen-size beds, 2 double-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Stacked washer and dryer",
            "Dishwasher",
            "Private porch or balconys",
            "Master bathroom with bubble-jet tub",
            "Washer and dryer",
            "In-room safe",
            "Hair dryer",
            "In-Mirror TV",
            "Coffee maker",
            "Screened-in porch",
            "High chair (upon request)",
            "Wireless Internet access",
            "Vacuum cleaner",
            "Telephone with voicemail",
            "Iron & Ironing Board",
            "High chair",
            "Built-in hot tub on porch",
            "Flat screen television",
            "Second full bathroom",
            "Double-sided fireplace",
            "Microwave",
            "Toaster",
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

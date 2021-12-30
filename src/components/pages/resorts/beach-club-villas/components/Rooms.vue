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
          "/assets/resorts/beach-club-villas/floor/1.png",
          "/assets/resorts/beach-club-villas/floor/2.png",
          "/assets/resorts/beach-club-villas/floor/3.png",
          // "/assets/resorts/beach-club-villas/floor/4.png",
        ],
        description: [
          {
            name: "Beach Club Villas Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Beach Club Villas Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
        ],
      },
      tabs: [
        {
          name: "Deluxe Studio",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room2.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room3.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room4.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room5.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room6.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room7.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room8.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-deluxe-room9.webp",
          ],
          description:
            "Sleeps up to 5 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and porch or balcony",
          amenities: [
            "Toaster",
            "Internet - Free WiFi Service",
            "Microwave",
            "Telephone with voicemail",
            "High Chair",
            "Iron & Ironing Board",
            "Hair Dryer",
            "Mini-refrigerator",
            "Soaker Tub",
            "Flat-Panel TV",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },

        {
          name: "1 Bedroom Villa",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa1.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa2.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa3.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa4.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa5.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa6.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa7.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa8.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa9.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-1-bedroom-villa10.webp",
          ],
          description:
            "Sleeps up to 4 Adults Great for families, villas include a full kitchen and a split bathroom that features 2 sink areas.",
          amenities: [
            "Toaster",
            "Internet - Free WiFi Service",
            "Fully Equipped Kitchen with Refrigerator",
            "Microwave",
            "Telephone with voicemail",
            "High Chair",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Hair Dryer",
            "Flat-Panel TV",
            "Soaking Tub",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
          ],
        },
        {
          name: "2 Bedroom Villa",
          imgs: [
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa1.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa2.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa3.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa4.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa5.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa6.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa7.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa8.webp",
            "/assets/resorts/beach-club-villas/beach-club-villas-resort-2-bedroom-villa9.webp",
          ],
          description:
            "Sleeps up to 8 Adults Great for a large family, villas include a full kitchen, dining area, washer and dryer",
          amenities: [
            "Toaster",
            "Internet - Free WiFi Service",
            "Fully Equipped Kitchen with Refrigerator",
            "Microwave",
            "Telephone with voicemail",
            "High Chair",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Hair Dryer",
            "Flat-Panel TV",
            "Soaking Tub",
            "DVD Player",
            "Coffee Maker",
            "In-Room Safe",
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

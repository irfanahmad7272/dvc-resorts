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
      activePage: "Deluxe Studio - Lake View",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/bay-lake-tower/floor/1.png",
          "/assets/resorts/bay-lake-tower/floor/2.png",
          "/assets/resorts/bay-lake-tower/floor/3.png",
          "/assets/resorts/bay-lake-tower/floor/1.png",
        ],
        description: [
          {
            name: "Bay Lake Tower Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Bay Lake Tower Floor plan Three Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
        ],
      },
      tabs: [
        {
          name: "Deluxe Studio - Lake View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView9.webp",
          ],
          description:
            "Sleeps up to 4 Adults Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
          name: "Deluxe Studio - Standard View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView9.webp",
          ],
          description:
            "Sleeps up to 4 Adults Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
          name: "Deluxe Studio - Theme Park View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioThemeBlackView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioThemeBlackView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioThemeBlackView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView9.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioThemeBlackView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-DeluxeStudioLakeView4.webp",
          ],
          description:
            "Sleeps up to 4 Adults Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
          name: "1 Bedroom Villa - Standard View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaStandardView9.webp",
          ],
          description:
            "Sleeps up to 5 Adults Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },

        {
          name: "1 Bedroom Villa - Lake View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaLakeView8.webp",
          ],
          description:
            "Sleeps up to 5 Adults Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
        {
          name: "1 Bedroom Villa - Theme Park View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView8.webp",
          ],
          description:
            "Sleeps up to 5 Adults Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
        {
          name: "2 Bedroom Villa - Standard View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaStandardView9.webp",
          ],
          description:
            "Sleeps up to 9 Adults Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },

        {
          name: "2 Bedroom Villa - Theme Park View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-1BedroomVillaThemeParkView7.webp",
          ],
          description:
            "Sleeps up to 9 Adults Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },

        {
          name: "2 Bedroom Villa - Lake View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView1.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView2.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView3.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView4.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView5.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView6.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView7.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView8.webp",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-rooms-2BedroomVillaLakeView9.webp",
          ],
          description:
            "Sleeps up to 9 Adults Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
        {
          name: "3 Bedroom Grand Villa - Lake View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview2.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview4.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview1.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview6.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview5.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview3.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview8.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview7.jpg",
          ],
          description: "Sleeps up to 12 Adults",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
          ],
        },
        {
          name: "3 Bedroom Grand Villa - Theme Park View",
          imgs: [
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview1.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview2.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview3.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview4.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview5.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview6.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview7.jpg",
            "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview8.jpg",
          ],
          description: "Sleeps up to 12 Adults",
          amenities: [
            "Toaster",
            "Fully Equipped Kitchen with Refrigerator",
            "Internet - Free WiFi Service",
            "Microwave",

            "High Chair",
            "Telephone with voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "DVD Player",
            "Washer & Dryer",
            "Soaker Tub",
            "Flat-Panel TV",

            "Coffee Maker",
            "Whirlpool Tub",
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

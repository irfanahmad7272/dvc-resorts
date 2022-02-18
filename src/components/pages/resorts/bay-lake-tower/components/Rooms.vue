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
      activePage: "Deluxe Studio - Lake View",
      activeFloor: 0,
      floors: [
        {
          img: "/assets/resorts/bay-lake-tower/floor/1.jpg",
          name: "Deluxe Studio Villas",
          size: "Feature one full bathroom and accommodate up to four Guests, plus one child under age three in a crib, and include a kitchenette, queen-size bed, double-size sleeper sofa, flat-panel TV, DVD player and private balcony.",
        },
        {
          img: "/assets/resorts/bay-lake-tower/floor/2.jpg",
          name: "One-Bedroom Vacation Homes",
          size: "Feature two full bathrooms and accommodate up to five Guests, plus one child under age three in a crib. Each offers a fully equipped kitchen, king-size bed in the master bedroom, whirlpool tub in the master bathroom, queen-size sleeper sofa, sleeper chair, flat-panel TV, DVD player, washer, dryer and private balcony.",
        },
        {
          img: "/assets/resorts/bay-lake-tower/floor/3.jpg",
          name: "Two-Bedroom Vacation Homes",
          size: "Feature three full bathrooms. Each features the amenities of a One-Bedroom Vacation Home, plus an additional bedroom with flat-panel TV, DVD player, two queen-size beds and private bathroom.",
        },
        {
          img: "/assets/resorts/bay-lake-tower/floor/4.png",
          name: "Two-Bedroom Lock-Off Vacation Homes",
          size: "Feature three full bathrooms. Each features the amenities of a One-Bedroom Vacation Home, plus an additional bedroom with flat-panel TV, DVD player, queen-size bed, double-size sleeper sofa, and private bathroom.",
        },
      ],
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
            "Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
            "Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
            "Sleeps up to 4 Adults Spacious accommodations include a kitchenette with small fridge and microwave, and balcony",
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
            "Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
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
            "Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
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
            "Sleeps up to 5 Adults Great for families, villas include 2 full bathrooms, a full kitchen with an island, private balcony",
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
            "Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
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
            "Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
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
            "Sleeps up to 9 Adults Great for large families, villas include 3 full bathrooms and a full kitchen with an island",
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
};
</script>

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
      activePage: "Deluxe Studio - Standard View",
      activeFloor: 0,
      floors: {
        name: "Floor Plans",
        imgs: [
          "/assets/resorts/grand-floridian/floor/1.png",
          "/assets/resorts/grand-floridian/floor/2.png",
          "/assets/resorts/grand-floridian/floor/3.png",
          "/assets/resorts/grand-floridian/floor/4.png",
        ],
        description: [
          {
            name: "Grand Floridian Floor plan One Bedroom Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Grand Floridian Floor plan Studio Jambo House",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Grand Floridian Floor plan Studio Kadani Village",
            size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          },
          {
            name: "Grand Floridian Floor plan Three Bedroom Jambo House",
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
          name: "Deluxe Studio - Standard View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (3).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (4).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (5).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (1).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (2).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (6).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (7).jpg",
          ],
          description:
            "Sleeps up to 5 Adults Sleeps up to 5 Adults Kitchenette With Small Refrigerator Spacious accommodations include a kitchenette with small fridge and microwave, and porch or balcony",
          amenities: [
            "Microwave",
            "Plush Bath Robes",
            "Hair Dryer",
            "Free WiFi Service",
            "Soaker Tub",
            "Mirror TVs in all Bathrooms",
            "Kitchenette",
            "Blu-Ray Player",
            "Telephone with voicemail",
            "Coffee Maker",
            "Iron and ironing board",
            "In-room safe",
          ],
        },
        {
          name: "Deluxe Studio - Lake View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (1).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (2).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (3).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (4).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (5).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (6).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianDeluxeStudio (7).jpg",
          ],
          description:
            "Sleeps up to 5 Adults Sleeps up to 5 Adults Kitchenette With Small Refrigerator Spacious accommodations include a kitchenette with small fridge and microwave, and porch or balcony",
          amenities: [
            "Microwave",
            "Plush Bath Robes ",
            "Hair Dryer",
            "Internet - Free WiFi Service",
            "Soaker Tub",
            "Mirror TVs in all Bathrooms",
            "Kitchenette",
            "Blu-Ray Player",
            "Telephone with voicemail",
            "Coffee Maker",
            "Iron and ironing board",
            "In-room safe",
          ],
        },
        {
          name: "1 Bedroom Villa - Standard View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (1).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (2).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (3).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (4).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (5).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (6).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (7).jpg",
          ],
          description:
            "1 king-size bed, 1 queen-size sleeper sofa, 1 single pull-down bed (29 x 67) Sleeps Up to 5",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Washer and dryer",
            "Walk-in shower",
            "Private porch or balcony",
            "Microwave",
            "Blu-ray™ player",
            "Mirror TV in each bathroom",
            "Wireless Internet access",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Voicemail",
            "Portable crib",
            "Bathrobes",
            "Coffee maker",
            "Flat screen television",
            "Alarm clock",
          ],
        },
        {
          name: "1 Bedroom Villa - Lake View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake3.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake4.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake5.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake6.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake7.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 single pull-down bed (29 x 67) Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Washer and dryer",
            "Walk-in shower",
            "Private porch or balcony",
            "Microwave",
            "Blu-ray™ player",
            "Mirror TV in each bathroom",
            "Wireless Internet access",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Voicemail",
            "Portable crib",
            "Bathrobes",
            "Coffee maker",
            "Flat screen television",
            "Alarm clock",
          ],
        },
        {
          name: "2 Bedroom Villa - Standard View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (3).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (1).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (5).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (2).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (4).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (6).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaStandard (7).jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 single pull-down bed (29x67) Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Washer and dryer",
            "Walk-in shower",
            "Private porch or balcony",
            "Microwave",
            "Blu-ray™ player",
            "Mirror TV in each bathroom",
            "Wireless Internet access",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Voicemail",
            "Portable crib",
            "Bathrobes",
            "Coffee maker",
            "Flat screen television",
            "Alarm clock",
          ],
        },
        {
          name: "2 Bedroom Villa - Lake View",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake4.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake5.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake6.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake7.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianBedroomVillaLake3.jpg",
          ],
          description:
            "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa, 1 single pull-down bed (29x67)Sleeps Up to 9",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Washer and dryer",
            "Walk-in shower",
            "Private porch or balcony",
            "Microwave",
            "Blu-ray™ player",
            "Mirror TV in each bathroom",
            "Wireless Internet access",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Voicemail",
            "Portable crib",
            "Bathrobes",
            "Coffee maker",
            "Flat screen television",
            "Alarm clock",
          ],
        },
        {
          name: "3 Bedroom Grand Villa - Lake View",
          imgs: [
            "/assets/resorts/grand-floridian/villas-grand-floridian-gallery01.jpg",
            "/assets/resorts/grand-floridian/villas-grand-floridian-gallery02.jpg",
            "/assets/resorts/grand-floridian/villas-grand-floridian-gallery03.jpg",
            "/assets/resorts/grand-floridian/villas-grand-floridian-gallery05.jpg",
            "/assets/resorts/grand-floridian/villas-grand-floridian-gallery06a.jpg",
          ],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes, glasses and utensils",
            "Pots and pan",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "High chair",
            "Hair Dryer",
            "Laundry room with washer and dryer",
            "bathrooms – 1 with whirlpool tub and shower,1 with shower only, and 2 with combination tub/shower",
            "Media room with home theater system including flat panel TV and Blu-ray™ player",
            "Dining room with dining table and chairs",
            "Private porch or balcony",
            "Mirror TVs in all Bathrooms",
            "Wireless Internet access",
            "Iron and ironing board",
            "Coffee Maker",
            "In-room safe",
            "Voicemail",
            "Portable crib",
            "Bathrobes",
            "Coffee maker",
            "Flat screen television in living room and each bedroom, with Blu-ray™ player in living room",
            "Alarm clock",
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

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
      activePage: "Deluxe Studio - Standard View",
      activeFloor: 0,
      floors: [
        {
          img: "/assets/resorts/grand-floridian/floor/1.png",
          name: "Resort Studio",
          size: "2 queen-size beds, 1 single pull-down bed Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/grand-floridian/floor/2.png",
          name: "Deluxe Studio",
          size: "1 queen-size bed, 1 queen-size pull-down bed, 1 single pull-down bed Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/grand-floridian/floor/3.png",
          name: "1-Bedroom Villa",
          size: "1 king-size bed, 1 queen-size pull-down bed, 1 single pull-down bed Sleeps Up to 5",
        },
        {
          img: "/assets/resorts/grand-floridian/floor/4.png",
          name: "2-Bedroom Villa",
          size: "1 king-size bed, 2 queen-size beds, 1 queen-size pull down bed, 1 single pull-down bed Sleeps Up to 9",
        },
        {
          img: "/assets/resorts/grand-floridian/floor/5.png",
          name: "2-Bedroom Lock-Off Villa",
          size: "1 king-size bed, 1 queen-size bed, 2 queen-size pull down beds, 2 single pull-down beds Sleeps Up to 10",
        },
        {
          img: "/assets/resorts/grand-floridian/floor/6.png",
          name: "3-Bedroom Grand Villa",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
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
            "Sleeps up to 5 Adults Kitchenette With Small Refrigerator Spacious accommodations include a kitchenette with small fridge and microwave, and porch or balcony",
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
            "Sleeps up to 5 Adults Kitchenette With Small Refrigerator Spacious accommodations include a kitchenette with small fridge and microwave, and porch or balcony",
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
};
</script>

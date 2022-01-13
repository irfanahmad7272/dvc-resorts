<template>
  <div>
    <div class="mt-10 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto mb-8 md:mt-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="tab in tabs"
            @click="activePage = tab.name"
            :key="tab.name"
          >
            {{ tab.name }}
          </li>
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            @click="activePage = 'Floor Plans'"
            :class="[
              { 'bg-custom-blue4 text-white': activePage == 'Floor Plans' },
            ]"
          >
            Floor Plans
          </li>
        </ul>
      </div>
      <RoomsTab
        :tabs="tabs"
        :activePage="activePage"
        :floors="floors"
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
      activePage: "Studio",
      activeFloor: 0,
      floors: [
        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Studio Jambo House.9199fb6c.jpg",
          name: "Animal Kingdom Floorplan One Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Studio Jambo House.9199fb6c.jpg",
          name: "Animal Kingdom Floorplan Studio Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Three Bedroom Jambo House.jpg",
          name: "Animal Kingdom Floorplan Studio Kadani Village",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Floorplan Two Bedroom Jambo House.jpg",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Kadini Village Floorplan 1 Bedroom.jpg",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Kadini Village Floorplan 2 Bedroom Lock-Off.jpg",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Kadini Village Floorplan 2 Bedroom.jpg",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },

        {
          img: "/assets/resorts/animal-kingdom/floor/Animal Kingdom Kadini Village Floorplan 2 Bedroom.jpg",
          name: "Animal Kingdom Floorplan Three Bedroom Jambo House",
          size: "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
      tabs: [
        {
          name: "Studio",
          imgs: [
            "/assets/resorts/animal-kingdom/rooms/studio/Animal-Kingdom-Picture-Three-Bedroom-c.jpg",
            "/assets/resorts/animal-kingdom/rooms/studio/Animal-Kingdom-Picture-Three-Bedroom-b-(1).jpg",
            "/assets/resorts/animal-kingdom/rooms/studio/Animal-Kingdom-Picture-Studio-Kitchen.jpg",
            "/assets/resorts/animal-kingdom/rooms/studio/Animal-Kingdom-Picture-Studio.jpg",
            "/assets/resorts/animal-kingdom/rooms/studio/Animal-Kingdom-Picture-Three-Bedroom-a.jpg",
          ],
          description:
            "1 queen-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Kitchenette",
            "Voicemail ",
            "Small refrigerator",
            "Microwave",
            "Full bathroom",
            "Iron and ironing board",
            "Hair dryer",
            "In-room safe",
            "Wireless Internet",
            "Coffee maker",
            "Paper plates and bowls, & plastic utensils",
          ],
        },

        {
          name: "1-Bedroom Villa",
          imgs: [
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 1.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Studio 1.jpg",
          ],
          description:
            "1 king-size bed, 1 double-size sleeper sofa Sleeps Up to 4",
          amenities: [
            "Fully equipped kitchen",
            "Dishwasher",
            "Dishes",
            "Glasses",
            "Utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Toaster",
            "Microwave",
            "Washer and dryer",
            "Whirlpool tub",
            "Iron and ironing board",
            "Coffee Maker",
            "Hair dryer",
            "Voicemail",
            "Portable Crib",
            "Wireless Internet ",
          ],
        },

        {
          name: "2-Bedroom Villa",
          imgs: [
            "/assets/resorts/animal-kingdom/Animal Kingdom Two Bedroom 1.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Two Bedroom 12.jpg",
            "/assets/resorts/animal-kingdom/Animal Kingdom Two Bedroom 14.jpg",
          ],
          description:
            "1 King Bed and 2 Queen Beds and 1 Queen-Size Sleeper Sofa and 1 Twin-Size Sleeper Chair Sleeps up to 9 Adults",
          amenities: [
            "Dishwasher",
            "Dishes",
            "Glasses",
            "Utensils",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",
            "Washer and dryer",
            "Toaster",
            "Internet - Free WiFi Service",
            "Microwave",

            "Portable Crib",
            "Voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",
            "Washer & Dryer",
            "Wireless Internet",

            "Coffee Maker",
            "Whirlpool Tub",
            "In-Room Safe",
            "Fully Equipped Kitchen",
          ],
        },
        {
          name: "3-Bedroom Grand Villa",
          imgs: [
            "/assets/resorts/animal-kingdom/Animal Kingdom Two Bedroom 14.jpg",
          ],
          description:
            "1 king-size bed, 4 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
          amenities: [
            "Toaster",
            "Pots and pans",
            "Refrigerator",
            "Stove and oven",

            "Fully Equipped Kitchen",
            "Wireless Internet",
            "Microwave",

            "Voicemail",
            "Hair Dryer",
            "Iron & Ironing Board",

            "Dishes",
            "Glasses",
            "Utensils",
            "Washer & Dryer",
            "Portable Crib",

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
<style>
.slick-prev:before {
  color: #337ab7;
  font-size: 25px;
  margin-left: -5px;
}
.slick-next:before {
  color: #337ab7;
  font-size: 25px;
}
.slick-dots li button:before {
  font-size: 10px;
  color: #6ba3d4;
}
.slick-dots li.slick-active button::before {
  color: #337ab7;
  opacity: 1;
}
</style>

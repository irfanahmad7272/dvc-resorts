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
          img: "/assets/resorts/beach-club-villas/floor/1.jpg",
          name: "Deluxe Studio Villas, sleeps 5",
          size: "features a Queen bed, double sleeper sofa, pull out bed from the entertainment center, wet bar with under-counter refrigerator, microwave oven and coffeemaker, ceiling fan, color cable television, private balcony or porch.",
        },
        {
          img: "/assets/resorts/beach-club-villas/floor/2.jpg",
          name: "One Bedroom Villa",
          size: "Accommodates four adults plus one child under three in a crib. Master suite with king-sized bed and private bath with whirlpool tub, fully equipped kitchen, ceiling fans in living room and bedroom, stack-style washer and dryer, color cable television with DVD player in living room and color television in bedroom, queen-sized sofa sleeper in living room, private balcony or porch. * Fifth guest can be accommodated but must provide own bedding and linens.",
        },
        {
          img: "/assets/resorts/beach-club-villas/floor/3.jpg",
          name: "2 Bedroom Villa",
          size: "Master suite with king-sized bed and private bath with whirlpool tub, second bedroom with queen bed and double sleeper sofa.",
        },
        {
          img: "/assets/resorts/beach-club-villas/floor/4.png",
          name: "Beach Club Villas Floor plan Three Bedroom ",
          size: "1 king-size bed, 2 queen-size beds, 1 queen-size sleeper sofa Sleeps Up to 12",
        },
      ],
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
            "1 Queen Bed and 1 Double-Size Sleeper Sofa and 1 Single Pull Down Bed. (Sleeps up to 5 Adults)",
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
            "Views of Disney's Beach Club Resort, Woods, Pool or Courtyard Views of Disney's Beach Club Resort, Woods, Pool or Courtyard1 King Bed and 1 Double-Size Sleeper Sofa or 1 King Bed and 1 Queen-Size Sleeper Sofa. (Sleeps up to 4 Adults) ",
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
            "Views of Disney's Beach Club Resort,  Woods, Pool or Courtyard 1 King Bed and 2 Queen Beds and 1 Queen-Size Sleeper Sofa or 1 King Bed and 2 Queen Beds and 1 Double-Size Pull Down Bed. (Sleeps up to 8 Adults)",
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
};
</script>

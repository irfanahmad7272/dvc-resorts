<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Bay Lake Tower at Disney's Contemporary Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The crescent-shaped Bay Lake Tower blends modern architectural sensibilities with
                the trademark visual cues of its influential neighbor, Disney’s Contemporary Resort.
                <br />
                Defined by glass-wrapped columns and warm woven woods, Bay Lake Tower is
                conveniently located within walking distance of restaurants, tennis courts, a health
                club, and other recreational activities. <br />
                After a fun-filled day at Magic Kingdom, walking back to your room is a breeze and
                only takes a few minutes. <br />
                Enjoy views of the courtyard, pool, Bay Lake, and Magic Kingdom from the Sky Way
                Bridge, which connects Bay Lake Tower with Disney's Contemporary Resort. <br />
                The bridge links you to shops, restaurants, and the monorail station inside the
                Contemporary.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Bay lake tower Resort great!
              </h2>
            </div>
            <Cards :data="cards" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../../components/Cards";
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: {
    Cards,
    ResortsSlider,
  },
  data() {
    return {
      active: false,
      cards: [
        {
          discription:
            "Make a splash at the enchanting and exclusive Bay Cove Pool. Breeze down the 20-foot-tall waterslide surrounded by glass blocks. Relax in the whirlpool spa, and enjoy refreshments and light bites from the poolside bar.",
          name: "Pool with Waterslide",
          img: "/assets/resorts/bay-lake-tower/pool-slide.jpg",
        },
        {
          discription:
            "Take the complimentary Resort Monorail to Magical Kindom park and with just one transfer Epcot.",
          name: "Resort Monorail",
          img: "/assets/resorts/bay-lake-tower/monoroi.jpg",
        },
        {
          discription:
            "Discover sumptunous fare and sublime views at this award winning restaurant.",
          name: "California Grill",
          img: "/assets/resorts/bay-lake-tower/CALIFORNIA-GRILL.JPG",
        },
      ],
      images: [
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview1.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview1.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview2.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview3.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview4.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview5.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview6.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview7.jpg",
        "/assets/resorts/bay-lake-tower/bay-lake-tower-contemporary-overview8.jpg",
      ],
    };
  },
};
</script>

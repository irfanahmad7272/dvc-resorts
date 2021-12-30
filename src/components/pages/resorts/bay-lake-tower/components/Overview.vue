<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
              <div v-for="(img, i) in images" :key="i">
                <img
                  class="w-full h-64 md:h-96 pointer-events-none"
                  :src="img"
                  alt="slider-imgs"
                />
              </div>
            </VueSlickCarousel>
            <div class="text-center mt-14">
              <h2
                class="text-custom-blue4 text-4xl font-semibold uppercase mt-2"
              >
                Bay Lake Tower at Disney's Contemporary Resort
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The crescent-shaped Bay Lake Tower blends modern architectural
                sensibilities with the trademark visual cues of its influential
                neighbor, Disney’s Contemporary Resort. Defined by glass-wrapped
                columns and warm woven woods, Bay Lake Tower is conveniently
                located within walking distance of restaurants, tennis courts, a
                health club, and other recreational activities. After a
                fun-filled day at Magic Kingdom, walking back to your room is a
                breeze and only takes a few minutes. Enjoy views of the
                courtyard, pool, Bay Lake, and Magic Kingdom from the Sky Way
                Bridge, which connects Bay Lake Tower with Disney's Contemporary
                Resort. The bridge links you to shops, restaurants, and the
                monorail station inside the Contemporary.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Cards from "../../components/Cards";
export default {
  components: {
    VueSlickCarousel,
    Cards,
  },
  data() {
    return {
      active: false,
      cards: [
        {
          discription:
            "Enjoy spectacular views of Magic Kingdom and Seven Seas Lagoon. View nightly fireworks from your balcony,or watch the sunrise over Bay Lake every morning.",
          name: "Rooms with a view",
          img: "/assets/resorts/animal-kingdom/b1.png",
        },
        {
          discription:
            "Clean, stylish, and minimalistic details mark Bay Lake Tower and provide a calming space after a day of park hopping.",
          name: "Modern elegance",
          img: "/assets/resorts/animal-kingdom/b4.png",
        },
        {
          discription:
            "The Sky Way Bridge connects Bay Lake Tower with the nearby Contemporary Resort and is only steps away from the Magic Kingdom, getting you as close to the magic as possible.",
          name: "Steps away from attractions",
          img: "/assets/resorts/animal-kingdom/b5.png",
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

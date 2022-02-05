<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's Boulder Ridge Villas
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The Boulder Ridge Villas at Disney's Wilderness Lodge celebrate the rustic majesty
                of the Pacific Northwest and the grandeur of the National Parks. <br />
                Modeled after the grand National Park lodges from the turn of the century, the
                Wilderness Lodge applauds American craftsmanship while honoring the untamed
                wilderness. <br />
                Explore nature trails or relax on a rocking chair with a view of a nearby brook.
                <br />
                Intricate and towering totem poles adorn the resort's interior, as well as a roaring
                fireplace complete with comfy armchairs.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Boulder Ridge Resort great!
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
            "Meet Snow White and friends—and dine in a rustic setting, inspired by the Disney classic Snow White and the Seven Dwarfs!",
          name: "Storybook Dining at Artist Point with Snow White",
          img: "/assets/resorts/boulder-ridge/01.webp",
        },
        {
          discription: "Discover a whimsical heated pool surrounded by pine trees and boulders.",
          name: "Pool with Waterslide",
          img: "/assets/resorts/boulder-ridge/9.jpg",
        },
        {
          discription:
            "From sailboat rentals to bike trails and fishing, there's never a shortage of things to do at The Wilderness Lodge. It's a vacation all in itself! ",
          name: "Recreational activities enhance your stay",
          img: "/assets/resorts/boulder-ridge/5.png",
        },
      ],
      images: [
        "/assets/resorts/boulder-ridge/10.jpg",
        "/assets/resorts/boulder-ridge/9.jpg",
        "/assets/resorts/boulder-ridge/3.jpg",
        "/assets/resorts/boulder-ridge/5.png",
        "/assets/resorts/boulder-ridge/6.png",
        "/assets/resorts/boulder-ridge/8.png",
        // "/assets/resorts/boulder-ridge/9.png",
      ],
    };
  },
};
</script>

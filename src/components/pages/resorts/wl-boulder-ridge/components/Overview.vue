<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="text-center mt-14">
              <h2
                class="text-custom-blue4 text-4xl font-semibold uppercase mt-2"
              >
                Disney's Boulder Ridge Villas
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The Boulder Ridge Villas at Disney's Wilderness Lodge celebrate
                the rustic majesty of the Pacific Northwest and the grandeur of
                the National Parks. <br />
                Modeled after the grand National Park lodges from the turn of
                the century, the Wilderness Lodge applauds American
                craftsmanship while honoring the untamed wilderness. <br />
                Explore nature trails or relax on a rocking chair with a view of
                a nearby brook. <br />
                Intricate and towering totem poles adorn the resort's interior,
                as well as a roaring fireplace complete with comfy armchairs.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
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
            "Located in the Magic Kingdom resort area, Wilderness Lodge is set far back enough to feel that you are genuinely in the Pacific Northwest while being a short bus or boat ride to the Magic Kingdom. ",
          name: "An escape close to the magic",
          img: "/assets/resorts/boulder-ridge/3.png",
        },
        {
          discription:
            "Natural wonder awaits when you call Wilderness Lodge 'home.' ",
          name: "Rustic surroundings",
          img: "/assets/resorts/boulder-ridge/4.png",
        },
        {
          discription:
            "From sailboat rentals to bike trails and fishing, there's never a shortage of things to do at The Wilderness Lodge. It's a vacation all in itself! ",
          name: "Recreational activities enhance your stay",
          img: "/assets/resorts/boulder-ridge/5.png",
        },
      ],
      images: [
        "/assets/resorts/boulder-ridge/1.png",
        "/assets/resorts/boulder-ridge/2.png",
        "/assets/resorts/boulder-ridge/3.png",
        // "/assets/resorts/boulder-ridge/4.png",
        "/assets/resorts/boulder-ridge/5.png",
        "/assets/resorts/boulder-ridge/6.png",
        "/assets/resorts/boulder-ridge/7.png",
        "/assets/resorts/boulder-ridge/8.png",
        // "/assets/resorts/boulder-ridge/9.png",
      ],
    };
  },
};
</script>

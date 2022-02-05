<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="mt-2 text-4xl font-semibold uppercase text-custom-blue4">
                Disney's Copper Creek Villas & Cabins
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="font-medium text-custom-blue4">
                Escape to a rustic retreat where your family can relax and reconnect while enjoying
                all the amenities and benefits of a Disney Resort. <br />
                Structured as a "base camp" and modeled after the legendary National Park lodges of
                the 20th century, Copper Creek Villas & Cabins at Disney’s Wilderness Lodge is a
                fantastic place to call home. <br />
                Though you're immersed in natural surroundings, you're just around the river bend
                from Magic Kingdom. The Copper Creek Villas include 26 waterfront cabins with
                screened wrap-around porches and hot tubs. <br />
                Settle into your Disney Vacation Club villa and enjoy all of the amenities and
                recreational offerings available at this second DVC location at Disney’s Wilderness
                Lodge.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="mt-2 text-center font-body text-3xl font-semibold uppercase text-custom-orange1 underline"
              >
                What makes Disney's Copper Creek great!
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
          img: "/assets/resorts/copper-creek/cc.jpg",
        },
        {
          discription: "Natural wonder awaits when you call Wilderness Lodge 'home.' ",
          name: "Rustic surroundings",
          img: "/assets/resorts/copper-creek/B1A9602-1024x682.jpg",
        },
        {
          discription:
            "From sailboat rentals to bike trails and fishing, there's never a shortage of things to do at The Wilderness Lodge. It's a vacation all in itself! ",
          name: "Recreational activities enhance your stay",
          img: "/assets/resorts/copper-creek/7.png",
        },
      ],
      images: [
        "/assets/resorts/copper-creek/CopperCreek-7181.jpg",
        "/assets/resorts/copper-creek/4.png",
        "/assets/resorts/copper-creek/pool-copper-creek-villas-wilderness-lodge-disney-world-444.jpg",
        "/assets/resorts/copper-creek/8.png",
        "/assets/resorts/copper-creek/CooperCreekCabin-1.jpg",
        "/assets/resorts/copper-creek/246012a6-2f4e-4681-b148-6ec3608b1088_750x422.jpg",
        "/assets/resorts/copper-creek/IMG_0405.jpg",
      ],
    };
  },
};
</script>

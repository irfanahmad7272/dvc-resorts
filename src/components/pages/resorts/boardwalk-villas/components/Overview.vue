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
                Disney's BoardWalk Villas
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Go back to the ragtime era when you stay at the BoardWalk
                Villas—Disney’s Atlantic City-inspired resort. Just a stone’s
                throw from Epcot and Disney’s Hollywood Studios, the carnival
                atmosphere of the Coney Island-style boardwalk will transport
                you to a time and place worlds away. Enjoy the elegance and
                charm of the early 1900s while still being conveniently located
                to a full-entertainment district just outside your room,
                including restaurants, shops, and recreational venues, plus all
                the amenities of the nearby Yacht and Beach Clubs.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Boardwalk Villas great!
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
            "You'll get to the magic faster as Epcot is only a short walk away, and a ferry provides scenic rides to Disney's Hollywood Studios. ",
          name: "Quick access to theme parks",
          img: "/assets/resorts/boardwalk-villas/4.png",
        },
        {
          discription:
            "Inspired by Atlantic City and Coney Island as they were in the early 1900s, you'll be transported back in time with Victorian decor, a Coney Island-themed pool area, and much more. ",
          name: "Turn of the century charm",
          img: "/assets/resorts/boardwalk-villas/5.png",
        },
        {
          discription:
            "An authentic wooden boardwalk outside the resort provides plenty of shopping, dining, and entertainment opportunities. ",
          name: "Entertainment at your fingertips",
          img: "/assets/resorts/boardwalk-villas/6.png",
        },
      ],
      images: [
        "/assets/resorts/boardwalk-villas/1.png",
        "/assets/resorts/boardwalk-villas/2.png",
        // "/assets/resorts/boardwalk-villas/3.png",
        "/assets/resorts/boardwalk-villas/4.png",
        "/assets/resorts/boardwalk-villas/5.png",
        "/assets/resorts/boardwalk-villas/6.png",
        "/assets/resorts/boardwalk-villas/7.png",
        // "/assets/resorts/boardwalk-villas/8.png",
        "/assets/resorts/boardwalk-villas/9.png",
      ],
    };
  },
};
</script>

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
                Disney's Riveria
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The grandeur of historic European villages and fairy-tale
                castles have inspired Disney's greatest stories. That
                inspiration has been taken across the pond and transformed into
                Disney's 15th Disney Vacation Club resort. Grand archways, a
                stunning façade, porticos, and terraces come together to create
                this unique and striking resort that draws upon European and
                Medittearnan influences. This new resort includes various
                updates and amenities that add modern elements to classic
                surroundings. Artist touches are seen throughout the resort,
                including an art gallery in the main lobby. Beautiful gardens
                and a peaceful waterfront make the resort shine from the inside
                out.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Riveria Resort great!
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
            "As part of Disney's Skyliner system, you can travel via gondolas to nearby attractions and get a birds-eye view along the way.",
          name: "Soar to Epcot and Hollywood Studios",
          img: "/assets/resorts/old-key-west/3.png",
        },
        {
          discription:
            "Lush gardens, Mediterranean-style pools, and decor fashioned after European villages will make you believe you've traveled to a different country",
          name: "European elegance",
          img: "/assets/resorts/old-key-west/4.png",
        },
        {
          discription:
            "Stay in shape at the state-of-the-art fitness center, which includes Technogym® equipment, treadmills, and more. Take advantage of the jogging trails, chess lawn, and bocce ball court as well!",
          name: "Fitness and activity centers",
          img: "/assets/resorts/old-key-west/5.png",
        },
      ],
      images: ["/assets/resorts/riveria/1.png"],
    };
  },
};
</script>

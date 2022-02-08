<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's riviera
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                The grandeur of historic European villages and fairy-tale castles have inspired
                Disney's greatest stories. That inspiration has been taken across the pond and
                transformed into Disney's 15th Disney Vacation Club resort. <br />
                Grand archways, a stunning façade, porticos, and terraces come together to create
                this unique and striking resort that draws upon European and Medittearnan
                influences. <br />
                This new resort includes various updates and amenities that add modern elements to
                classic surroundings. <br />
                Artist touches are seen throughout the resort, including an art gallery in the main
                lobby. Beautiful gardens and a peaceful waterfront make the resort shine from the
                inside out.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's riviera Resort great!
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
            "At Disney's Riviera Resort, you're just a short stroll away from the new gondola system.",
          name: "Disney Skyliner Transportation",
          img: "/assets/resorts/riviera/Disney_Skyliner.jpg",
        },
        {
          discription:
            " Delight all the senses at this rooftop dining experience inspired by Europe's cliffside restaurants.",
          name: "Topolino’s Terrace – Flavors of the Riviera",
          img: "/assets/resorts/riviera/topolina.jpg",
        },
        {
          discription:
            "Disney’s Riviera Resort is designed to capture the magic of Europe that Walt Disney fell in love with once upon a time.",
          name: "Style, Artistry and Disney Touches",
          img: "/assets/resorts/riviera/style.jpg",
        },
      ],
      images: [
        "/assets/resorts/riviera/1.jpg",
        "/assets/resorts/riviera/2.webp",
        "/assets/resorts/riviera/3.webp",
        "/assets/resorts/riviera/4.png",
      ],
    };
  },
};
</script>

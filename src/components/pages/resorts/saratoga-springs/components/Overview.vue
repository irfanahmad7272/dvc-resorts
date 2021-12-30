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
                Disney's Saratoga Springs Resort & Spa
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Disney's Saratoga Springs is the perfect getaway choice for
                horse racing enthusiasts. Fashioned after the New York town
                famous for horse racing, this resort blends Victorian style and
                New England charm. Savor the world-class dining of The Turf Club
                Bar and Grill, or express your inner artist at The Artist's
                Palette, where you can enjoy a lighter fare as you create a
                masterpiece on a tabletop easel. Relax in the ambiance of a New
                York spa-getaway, surrounded by sun-soaked golf course greens
                and the pristine Village Lake, while being only a short boat
                ride away from Disney's Springs.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Saratoga springs Resort great!
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
            " Stay close to all the action and excitement at Disney's shopping and entertainment complex, which is just a short boat ride away. ",
          name: "Quick access to Disney Springs",
          img: "/assets/resorts/saratoga-springs/2.png",
        },
        {
          discription:
            "Racing enthusiasts will love the nods to horse racing scattered throughout the resort, including a 'winners circle' statue, equine weather vanes, and more. ",
          name: "Enter the winner's circle",
          img: "/assets/resorts/saratoga-springs/3.png",
        },
        {
          discription:
            "pamper yourself at Senses Spa, or sunbathe around one of the resort's five pools. ",
          name: "Soak and sun",
          img: "/assets/resorts/saratoga-springs/4.png",
        },
      ],
      images: [
        "/assets/resorts/saratoga-springs/1.png",
        // "/assets/resorts/saratoga-springs/2.png",
        "/assets/resorts/saratoga-springs/3.png",
        "/assets/resorts/saratoga-springs/4.png",
        "/assets/resorts/saratoga-springs/5.png",
        "/assets/resorts/saratoga-springs/6.png",
        "/assets/resorts/saratoga-springs/7.png",
        "/assets/resorts/saratoga-springs/8.png",
        // "/assets/resorts/saratoga-springs/9.png",
      ],
    };
  },
};
</script>

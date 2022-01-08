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
                Grand Floridian
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                With luxurious accommodations, five-star dining, and plenty of
                amenities, the Villas at Disney’s Grand Floridian Resort and Spa
                are the perfect way to enjoy a family vacation fit for royalty.
                Styled with old-world charm and antique finishes, the Grand
                Floridian reminds guests of the days when the Victorian
                well-to-do flocked to Florida's sunny beaches to escape chilly
                winters up north. Everything about your stay is a pleasurable
                experience. Enjoy the sounds of a pianist or jazz band upon
                entering the main lobby, take a ride on the antique glass
                elevator, or shop 'til you drop at designer clothing and
                accessories stores. A white-sand beach and marina provide the
                perfect place to view nightly fireworks or the Electrical Water
                Pageant.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Grand floridian Resort great!
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
            "Located on the shores of the Seven Seas Lagoon, choose your adventure to get to Magic Kingdom, whether you walk, take a short monorail ride, or board a ferry boat",
          name: "Walk, boat, or ride to Magic Kingdom",
          img: "/assets/resorts/animal-kingdom/b1.png",
        },
        {
          discription:
            'the essence of classic Victorian styling is in every detail thorughout the resort. Step back in time to the "golden age of travel" and create new memories together. ',
          name: '"Grand" accommodations',
          img: "/assets/resorts/animal-kingdom/b4.png",
        },
        {
          discription:
            "Relax with a massage or facial, sunbathe at two pools, and shop at a variety of designer stores. ",
          name: "Pamper yourself",
          img: "/assets/resorts/animal-kingdom/b5.png",
        },
      ],
      images: [
        "/assets/resorts/grand-floridian/grandfloridian.jpg",
        "/assets/resorts/grand-floridian/GrandFloridianRestaurentVictoria1.webp",
        "/assets/resorts/grand-floridian/grandfloridian3.webp",
        "/assets/resorts/grand-floridian/grandfloridian4.jpg",
        "/assets/resorts/grand-floridian/grandfloridian5.webp",
      ],
    };
  },
};
</script>

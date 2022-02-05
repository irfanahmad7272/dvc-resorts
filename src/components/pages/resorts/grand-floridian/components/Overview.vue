<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="mt-2 text-4xl font-semibold uppercase text-custom-blue4">
                Grand Floridian
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="font-medium text-custom-blue4">
                With luxurious accommodations, five-star dining, and plenty of amenities, the Villas
                at Disney’s Grand Floridian Resort and Spa are the perfect way to enjoy a family
                vacation fit for royalty.
                <br />
                Styled with old-world charm and antique finishes, the Grand Floridian reminds guests
                of the days when the Victorian well-to-do flocked to Florida's sunny beaches to
                escape chilly winters up north. Everything about your stay is a pleasurable
                experience. <br />
                Enjoy the sounds of a pianist or jazz band upon entering the main lobby, take a ride
                on the antique glass elevator, or shop 'til you drop at designer clothing and
                accessories stores.
                <br />
                A white-sand beach and marina provide the perfect place to view nightly fireworks or
                the Electrical Water Pageant.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="mt-2 text-center font-body text-3xl font-semibold uppercase text-custom-orange1 underline"
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
            "Renew your mind, body and spirit at this full-service spa, salon and health club",
          name: "The Grand Floridian Spa",
          img: "/assets/resorts/grand-floridian/ygt67y3rt761u3423.webp",
        },
        {
          discription:
            "Behold a royal transformation as children become princesses or knights at our newest location.",
          name: "Bibbidi Bobbidi Boutique – Disneys Grand Floridian Resort & Spa",
          img: "/assets/resorts/grand-floridian/wdw-aug2019-bbb-hero-grandflo-16x9.jpg",
        },
        {
          discription:
            "Stay fit at the Grand Floridian Resort and Spa health club—a high-tech exercise facility featuring state-of-the-art training equipment.",
          name: "Health Club",
          img: "/assets/resorts/grand-floridian/disney-s-grand-floridian.jpg",
        },
      ],
      images: [
        "/assets/resorts/grand-floridian/grandfloridian.jpg",
        "/assets/resorts/grand-floridian/grand-floridian-reopening-3.jpg",
        "/assets/resorts/grand-floridian/GrandFloridianRestaurentVictoria1.webp",
        "/assets/resorts/grand-floridian/grandfloridian3.webp",
        "/assets/resorts/grand-floridian/grandfloridian4.jpg",
        "/assets/resorts/grand-floridian/grandfloridian5.webp",
      ],
    };
  },
};
</script>

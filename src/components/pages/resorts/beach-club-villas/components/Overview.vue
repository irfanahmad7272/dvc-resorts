<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's Beach Club Villas
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Relax with the charm of Disney's Beach Club Villas, modeled after the romance and
                elegance of New England beach cottages that dot the northeast. <br />
                Amenities abound at the Beach Club and its sister resort, the Yacht Club, including
                a wide selection of dining locations, pools, and a white-sand beach. Shops,
                entertainment, restaurants are a short walk away at Disney's BoardWalk Inn. <br />
                The resort is also within walking distance of Epcot.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Beach club villas Resort great!
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
            "Discover a life-size shipwreck, pools, lagoons and more at Stormalong Bay—a 3-acre water wonderland.",
          name: "Outdoor Water Recreation Area",
          img: "/assets/resorts/beach-club-villas/Beach-Club-Main-Pool-Slide-Pool.jpg",
        },
        {
          discription:
            "Once you’ve settled in, let Disney Genie service summon the attractions, entertainment and dining experiences you love the most. Plus, as a Disney Resort hotel guest get early access to purchase individual Lightning Lane entry for up to two different attractions each day. ",
          name: "Easier Trip Planing - Like Magic!",
          img: "/assets/resorts/beach-club-villas/genie.jpg",
        },
        {
          discription:
            "This new gondola system offers a bird's-eye view as it whisks you and your family away to Epcot and Hollywood Studios. ",
          name: "Disney Skyliner Transportation",
          img: "/assets/resorts/beach-club-villas/Disney_Skyliner,_October_2019.jpg",
        },
      ],
      images: [
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview2.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview3.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview4.jpg",
        "/assets/resorts/beach-club-villas/beach-club-villas-resort-overview5.jpg",
      ],
    };
  },
};
</script>

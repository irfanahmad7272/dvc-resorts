<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's Polynesian Villas & Bungalows
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Discover a South Pacific paradise at Disney's Polynesian Villas & Bungalows. <br />
                Enjoy the Tiki torches and the white-sand beaches of this getaway, inspired by the
                mysterious island of Bora Bora.
                <br />
                With spacious rooms and all the amenities of home, you can unwind after a day of
                adventure at the Magic Kingdom—just a short boat or monorail ride away. <br />
                Relax in a plunge pool on your private deck while you watch fireworks over
                Cinderella Castle as the night descends.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Polynesian Resort great!
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
            "Disney's Polynesian Village Resort is an easy ride to Magic Kingdom park, and just one transfer from Epcot.",
          name: "Resort Monorail",
          img: "/assets/resorts/polynesian/149528836_393307705261444_5559847024614481857_n-1-scaled-1.jpg",
        },
        {
          discription:
            "Taste the culinary magic of the islands at Disney’s Polynesian Village Resort.",
          name: "Savor the Succulent Tastes of the Islands",
          img: "/assets/resorts/polynesian/sebastians-bistro-restaurant-caribbean-beach-resort-disney-world-085.jpg",
        },
        {
          discription:
            "Enjoy fishing, boating and more on this historic lagoon just outside Magic Kingdom park.",
          name: "Seven Seas Lagoon",
          img: "/assets/resorts/polynesian/seven-seas-lagoon-dragon-16x9.jpg",
        },
      ],
      images: [
        "/assets/resorts/polynesian/polynesian.jpg",
        "/assets/resorts/polynesian/polynesian2.jpg",
        "/assets/resorts/polynesian/polynesian3.jpg",
        "/assets/resorts/polynesian/polynesian4.jpg",
        "/assets/resorts/polynesian/polynesian5.jpg",
      ],
    };
  },
};
</script>

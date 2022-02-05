<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                BEST DVC Hilton Head Island Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Take a trip back in time when you stay at Disney’s Hilton Head Resort. Fashioned
                after a hunting and fishing lodge from the 1940s, Disney's Hilton Head Resort offers
                white sand beaches contrasted by giant oak trees surrounding Shelter Cove Harbor.
                <br />
                Enjoy spacious vacation homes in the seclusion of this 15-acre island nestled in
                South Carolina’s southernmost tip. <br />
                Only 5 hours from Walt Disney World, this quiet getaway is the perfect spot for a
                taste of classic southern charm. Explore the town of Hilton Head with a variety of
                activities just outside the resort.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Hilton head Resort great!
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
            "Zip down the wraparound Water Tower Slide at the Big Dipper 72,000-gallon heated pool and spa.",
          name: "Big Dipper Pool with Waterslide",
          img: "/assets/resorts/hilton-head/2.jpg",
        },
        {
          discription:
            "Relax on wide sandy beaches or rent a bicycle and pedal on paths that meander through this beautiful unspoiled landscape.",
          name: "Atlantic Beach",
          img: "/assets/resorts/hilton-head/atlantic-beach.webp",
        },
        {
          discription:
            "Choose from over 30 public golf courses in the local area, rent a bike or fishing pole, sing songs by the campfire, or sunbathe at the beach.",
          name: "Recreation abounds",
          img: "/assets/resorts/hilton-head/3.png",
        },
      ],
      images: [
        "/assets/resorts/hilton-head/1.webp",
        "/assets/resorts/hilton-head/2.jpg",
        "/assets/resorts/hilton-head/3.jpg",
        "/assets/resorts/hilton-head/4.jpg",
        "/assets/resorts/hilton-head/5.jpg",
      ],
    };
  },
};
</script>

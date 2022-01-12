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
                BEST DVC Hilton Head Island Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Take a trip back in time when you stay at Disney’s Hilton Head
                Resort. <br />
                Fashioned after a hunting and fishing lodge from the 1940s,
                Disney's Hilton Head Resort offers white sand beaches contrasted
                by giant oak trees surrounding Shelter Cove Harbor. <br />
                Enjoy spacious vacation homes in the seclusion of this 15-acre
                island nestled in South Carolina’s southernmost tip. Only 5
                hours from Walt Disney World, this quiet getaway is the perfect
                spot for a taste of classic southern charm. Explore the town of
                Hilton Head with a variety of activities just outside the
                resort.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
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
            "Situated on 12 miles of pristine beachfront property, Disney's Hilton Head Resort gives you exclusive access to the best beach in South Carolina.",
          name: "Private, beachfront oasis",
          img: "/assets/resorts/hilton-head/1.png",
        },
        {
          discription:
            "The service and attention to detail you expect from Disney, combined with southern charm, create a resort that epitomizes family-friendliness. ",
          name: "Southern hospitality",
          img: "/assets/resorts/hilton-head/2.png",
        },
        {
          discription:
            "Choose from over 30 public golf courses in the local area, rent a bike or fishing pole, sing songs by the campfire, or sunbathe at the beach. Plus, enjoy board games, arts and crafts, video games, and more at the Community Hall and Disney's Beach House.",
          name: "Recreation abounds",
          img: "/assets/resorts/hilton-head/3.png",
        },
      ],
      images: [
        "/assets/resorts/hilton-head/1.png",
        // "/assets/resorts/hilton-head/2.png",
        "/assets/resorts/hilton-head/3.png",
      ],
    };
  },
};
</script>

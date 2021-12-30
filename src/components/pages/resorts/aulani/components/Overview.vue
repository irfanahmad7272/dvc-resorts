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
                Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Experience the magic of Hawaii at Disney’s Aulani Resort and
                Spa. Located on the white-sand beaches of Oahu, the Villas of
                Aulani overlook the Pacific Ocean, a breathtaking lagoon, and a
                tropical cove that defines the term "paradise on Earth."
                "Aulani" means "messenger of a chief," and it's here that you'll
                explore everything the Hawaiian islands have to offer. Set back
                from the crowds of Waikiki but close enough to enjoy its
                attractions, Aulani is nestled between mountain ranges and
                calming ocean waves. In addition to all the world-class
                amenities you expect from a Disney Resort, there are
                island-themed activities for all to enjoy. Matched only by the
                spectacular beauty of the islands, the atmosphere and
                experiences of Aulani will put the Disney spark of magic into
                your Hawaiian getaway.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Aulani Resort great!
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
            "Beachfront paradise: Situated on the leeward coast of O'ahu,the white-sand beaches of Ko Olina create the perfect backdrop for your Hawaiian escape.",
          name: "Safari escape",
          img: "/assets/resorts/animal-kingdom/b1.png",
        },
        {
          discription:
            "Cultural infusion: Disney Imagineers partnered with local historians and artisans to create a resort that celebrates ancient Hawaiian heritage.",
          name: "African lodging",
          img: "/assets/resorts/animal-kingdom/b4.png",
        },
        {
          discription:
            "Aquatic adventures await: Water lovers will rejoice at the bounty of water-related activities at the resort, including the Waikolohe Valley swimming area, which includes several pools and a lazy river. There is also a snorkeling lagoon where you can swim with tropical fish.",
          name: "Wildlife observation",
          img: "/assets/resorts/animal-kingdom/b5.png",
        },
      ],
      images: [
        "/assets/resorts/aulani/1.png",
        "/assets/resorts/aulani/2.png",
        "/assets/resorts/aulani/3.png",
        "/assets/resorts/aulani/4.png",
        "/assets/resorts/aulani/5.png",
        "/assets/resorts/aulani/6.png",
        "/assets/resorts/aulani/7.png",
        "/assets/resorts/aulani/8.png",
      ],
    };
  },
};
</script>

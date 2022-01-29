<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Experience the magic of Hawaii at Disney’s Aulani Resort and Spa. Located on the
                white-sand beaches of Oahu, the Villas of Aulani overlook the Pacific Ocean, a
                breathtaking lagoon, and a tropical cove that defines the term "paradise on Earth."
                <br />
                "Aulani" means "messenger of a chief," and it's here that you'll explore everything
                the Hawaiian islands have to offer. <br />
                Set back from the crowds of Waikiki but close enough to enjoy its attractions,
                Aulani is nestled between mountain ranges and calming ocean waves. <br />
                In addition to all the world-class amenities you expect from a Disney Resort, there
                are island-themed activities for all to enjoy. <br />
                Matched only by the spectacular beauty of the islands, the atmosphere and
                experiences of Aulani will put the Disney spark of magic into your Hawaiian getaway.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
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
            "Spectacular pool areas and a beautiful beach invite you to swim, splash, play and relax.",
          name: "Aquatic Adventures",
          img: "/assets/resorts/aulani/aulani-a-disney-resort.jpg",
        },
        {
          discription:
            "Kids can experience Hawaiian culture, art and music with a dash of Disney magic at this supervised activities club for Guests ages 3 to 12. Aunty's Beach House is a 5,200-square-foot children's club that’s designed to entertain and delight.",
          name: "Aunty's Beach House",
          img: "/assets/resorts/aulani/aunt's-beach-house.jpg",
        },
        {
          discription:
            "Embark on a culinary and cultural journey celebrating the legends, people and natural wonders of Hawai‘i. Highlights of this Lū‘au include: family activities, live music, an island-inspired feast and more!",
          name: "KA WA‘A — A Lū‘au at Aulani, A Disney Resort & Spa",
          img: "/assets/resorts/aulani/traditional-hawaiian.jpg",
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

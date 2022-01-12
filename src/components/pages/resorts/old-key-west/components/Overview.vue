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
                Disney's Old Key West Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Embrace the ambiance and romance of the Florida Keys—in Central
                Florida! Old Key West was Disney's first Vacation Club resort,
                and it remains one of the most popular places to call "home"
                today. Serene waterways, iconic palm trees, and inviting golf
                fairways create a vista reminiscent of Hemingway’s home in Key
                West. Old Key West is a tropical oasis in the heart of the Walt
                Disney World property, complete with relaxing pools and casual
                dining. It's the definite choice for those who prefer a more
                laid-back environment to laze their days away.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Old key west Resort great!
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
            "A scenic and relaxing boat ride will have you to all the excitement and entertainment available at Disney Springs in no time! ",
          name: "Transportation to Disney Springs",
          img: "/assets/resorts/old-key-west/3.png",
        },
        {
          discription:
            "beachy hues, palm trees, and patios overlooking Disney's Lake Buena Vista Golf Course provide the backdrop for a vacation that invites you to slow down and relax—Florida style.",
          name: "Old-Florida charm",
          img: "/assets/resorts/old-key-west/3.png",
        },
        {
          discription:
            "Four pools featuring waterslides, a lighthouse, and jumping dolphins are just the beginning of what water enthusiasts have to look forward to at Old Key West. Throw in fishing excursions and jogging trails overlooking scenic canals, and you're in for a treat. ",
          name: "Water-lovers delight",
          img: "/assets/resorts/old-key-west/5.png",
        },
      ],
      images: [
        "/assets/resorts/old-key-west/1.png",
        "/assets/resorts/old-key-west/2.png",
        "/assets/resorts/old-key-west/3.png",
        "/assets/resorts/old-key-west/4.png",
        "/assets/resorts/old-key-west/5.png",
        "/assets/resorts/old-key-west/6.png",
        // "/assets/resorts/old-key-west/7.png",
        // "/assets/resorts/old-key-west/8.png",
        "/assets/resorts/old-key-west/9.png",
      ],
    };
  },
};
</script>

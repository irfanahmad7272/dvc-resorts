<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's Old Key West Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Embrace the ambiance and romance of the Florida Keys—in Central Florida! Old Key
                West was Disney's first Vacation Club resort, and it remains one of the most popular
                places to call "home" today. Serene waterways, iconic palm trees, and inviting golf
                fairways create a vista reminiscent of Hemingway’s home in Key West.
                <br />
                Old Key West is a tropical oasis in the heart of the Walt Disney World property,
                complete with relaxing pools and casual dining.
                <br />
                It's the definite choice for those who prefer a more laid-back environment to laze
                their days away.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
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
            "Sweep down a sandcastle waterslide, and discover a dry sauna at the base of a lighthouse.",
          name: "Pool with Waterslide",
          img: "/assets/resorts/old-key-west/12.jpg",
        },
        {
          discription:
            "Work out on state-of-the-art equipment or relax in the sauna at the “Recreation, Exercise, Swimming and Tennis” complex next to the main pool.",
          name: "Fitness Center at R.E.S.T. Beach",
          img: "/assets/resorts/old-key-west/f72221304ca8cfe1f2c0fd8d67b7d95a.jpg",
        },
        {
          discription:
            "Savor home-style American cuisine with a Caribbean twist at this casual restaurant.",
          name: "Olivia’s Café",
          img: "/assets/resorts/old-key-west/2020-WDW-Disneys-Old-Key-West-Resort-Olivias-Cafe-Menu-1.jpg",
        },
      ],
      images: [
        "/assets/resorts/old-key-west/02.jpg",
        "/assets/resorts/old-key-west/1.webp",
        "/assets/resorts/old-key-west/03.webp",
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

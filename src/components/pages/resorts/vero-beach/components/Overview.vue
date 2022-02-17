<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="text-custom-blue4 mt-2 text-4xl font-semibold uppercase">
                Disney's Vero Beach Resort
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                For those who prefer a more secluded location, Disney’s Vero Beach Resort offers the
                perfect getaway. <br />
                Escape the hustle and bustle of the Orlando theme parks at this Atlantic Coast
                paradise, located 2 hours southeast of Walt Disney World on the white sands of Vero
                Beach. <br />
                Whether you stay in a Villa or a standalone cottage, the pristine white sandy beach
                lies on the other side of your door.
                <br />
                Fill your days with plenty of recreational activities— both on and offshore, and
                enjoy the surf and turf menus at the world-renowned local restaurants.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body mt-2 text-center text-3xl font-semibold uppercase underline"
              >
                What makes Disney's Vero beach Resort great!
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
            "Enjoy a variety of games and nature activities, and a chance to make new friends!",
          name: "Activity Programs",
          img: "/assets/resorts/vero-beach/activity-programs-for-kids-teens-00.webp",
        },
        {
          discription:
            "Dive into fun at the Mickey-shaped pool and take a ride on the Pirate's Plunge pool slide.",
          name: "Pool",
          img: "/assets/resorts/vero-beach/pool.jpg",
        },
        {
          discription:
            "Challenge your friends and family to a round on our 9-hole miniature-golf course.",
          name: "Miniature Golf",
          img: "/assets/resorts/vero-beach/port-holes-miniature-golf-00.webp",
        },
      ],
      images: [
        "/assets/resorts/vero-beach/1.webp",
        "/assets/resorts/vero-beach/2.png",
        "/assets/resorts/vero-beach/3.webp",
        "/assets/resorts/vero-beach/5.webp",
        "/assets/resorts/vero-beach/4.jpg",
      ],
    };
  },
};
</script>

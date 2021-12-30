<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto m-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="(tab, index) in tabs"
            @click="changeView($event, tab.name)"
            :key="index"
          >
            <a :href="'#' + tab.name"> {{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="w-full text-center col-span-12 md:col-span-9">
        <div v-for="(tab, index) in tabs" :key="index">
          <div v-if="activePage === tab.name">
            <div>
              <h1 class="text-3xl font-semibold text-custom-blue4">
                {{ tab.name }}
              </h1>
            </div>
            <div class="py-10 px-4 md:px-0">
              <ResortsSlider :images="tab.imgs" />
            </div>
            <div class="text-2xl text-custom-blue4 mt-5 mx-auto">
              {{ tab.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: {
    ResortsSlider,
  },
  data() {
    return {
      activePage: "Tide Me Over",
      tabs: [
        {
          name: "Tide Me Over",
          imgs: ["/assets/resorts/hilton-head/dining/tide/1.jpg"],
          description:
            "A quick pit stop and snack bar featuring burgers, sandwiches, salads, and South Carolina favorites. Nestled near the Board Creek Mercantile, stop by Tide Me Over to refuel between activities. Order ahead for an even faster pick-up!",
        },
        {
          name: "Signals Seaside Grill",
          imgs: ["/assets/resorts/hilton-head/dining/signal/1.jpg"],
          description:
            "Purchase a refillable mug and get free refills during your entire stay at this quick-service eatery located inside Disney's Beach House. Offerings include salads, sandwiches, and sweet treats. ",
        },
      ],
    };
  },
  methods: {
    changeView(e, tab) {
      e.preventDefault();
      this.activePage = tab;
    },
  },
};
</script>

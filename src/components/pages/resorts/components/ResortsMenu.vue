<template>
  <div>
    <section class="bg-custom-light2">
      <div class="mx-auto pb-5">
        <div class="mt-10 w-full relative text-center">
          <router-link :to="resort.url" :key="i" v-for="(resort, i) in resorts">
            <button
              class="w-36 md:w-40 xl:w-52 2xl:w-64 h-9 m-0.5 border border-custom-blue2 text-custom-blue5 rounded text-[20px]"
              :class="
                currentUrl == resort.url
                  ? 'bg-custom-blue2 !text-white hover:bg-custom-blue3'
                  : 'hover:bg-custom-lightcream'
              "
            >
              {{ resort.name }}
            </button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentUrl: window.location.pathname,
      resorts: [
        { name: "ANIMAL KINGDOM", url: "/animal-kingdom" },
        { name: "AULANI", url: "/aulani" },
        { name: "BAY LAKE TOWER", url: "/bay-lake-tower" },
        { name: "BEACH CLUB VILLAS", url: "/beach-club-villas" },
        { name: "BOARDWALK VILLAS", url: "/boardwalk-villas" },
        { name: "BOULDER RIDGE", url: "/boulder-ridge" },
        { name: "COPPER CREEK", url: "/copper-creek" },
        { name: "GRAND CALIFORNIAN", url: "/grand-californian" },
        { name: "GRAND FLORIDIAN", url: "/grand-floridian" },
        { name: "HILTON HEAD", url: "/hilton-head" },
        { name: "OLD KEY WEST", url: "/old-key-west" },
        { name: "POLYNESIAN", url: "/polynesian" },
        { name: "SARATOGA SPRINGS", url: "/saratoga-springs" },
        { name: "RIVERA", url: "/rivera" },
        { name: "VERO BEACH", url: "/vero-beach" },
        { name: "RCI RESORTS", url: "/rci-resorts" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        HISTORICAL SALES CHART
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="w-10/12 grid grid-cols-2 sm:grid-cols-4 gap-1 mx-auto">
              <!-- :class="
                  selected_resorts.includes(resort)
                    ? 'bg-custom-blue2 !text-white hover:bg-custom-blue3'
                    : ''
                " -->
              <button
                v-for="(resort, i) in resorts"
                :key="i"
                class="w-full h-9 border border-custom-blue2 hover:bg-custom-lightcream text-custom-blue5 rounded text-2xl"
                :class="
                  active_resort == resort
                    ? 'bg-custom-blue2 !text-white hover:bg-custom-blue3'
                    : ''
                "
              >
                {{ resort }}
              </button>
            </div>
          </section>
          <!-- main content end -->
        </div>
        <div class="right-sidebar w-1/6 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../layout/header/Header";
export default {
  components: { Header },
  data() {
    return {
      active_resort: "animal_kingdom",
      resorts: [
        "ANIMAL KINGDOM",
        "AULANI",
        "BAY LAKE TOWER",
        "BEACH CLUB VILLAS",
        "BOARDWALK VILLAS",
        "BOULDER RIDGE",
        "COPPER CREEK",
        "GRAND CALIFORNIAN",
        "GRAND FLORIDIAN",
        "HILTON HEAD",
        "OLD KEY WEST",
        "POLYNESIAN",
        "SARATOGA SPRINGS",
        "RIVERA",
        "VERO BEACH",
        "INTERVAL RESORTS",
      ],
    };
  },
};
</script>

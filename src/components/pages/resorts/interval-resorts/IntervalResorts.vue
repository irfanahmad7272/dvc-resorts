<template>
  <div>
    <Header />
    <div class="main-page pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title -->

      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <div>
            <ResortsMenu />
            <section class="uppercase">
              <ul class="w-full text-center space-x-1">
                <li>
                  <button
                    v-for="(item, index) in pages"
                    class="bg-custom-lightcream text-custom-blue4 hover:bg-custom-blue3 hover:text-white rounded cursor-pointer w-32 h-10 m-1 uppercase"
                    :class="[
                      activePage == item.component
                        ? '!bg-custom-blue4 !text-white'
                        : 'text-custom-blue4',
                    ]"
                    :key="index"
                    @click="activePage = item.component"
                  >
                    {{ item.name }}
                  </button>
                </li>
              </ul>
            </section>
            <div v-if="activePage === 'overview'" class="px-16">
              <p class="py-4 text-custom-blue6">
                RCI, Resort Condominiums International is a timeshare brokerage
                company. They do not own resorts. They have over 4,000 resorts
                for their members to exchange their timeshare from one resort to
                another. There is a $95.00 fee for this service paid to Disney
                Vacation Club Member Services when you make a reservation.
              </p>
              <img
                src="https://dvcsales.com/wp-content/themes/dvcsales/images/rci-resorts/RCI-map-large.jpg"
                class="w-full"
              />
            </div>
            <div v-if="activePage === 'Weekly'" class="px-16 pt-6">
              <img
                class="w-full h-94"
                src="https://dvcsales.com/wp-content/themes/dvcsales/images/rci-resorts/RCI-Weekly-Point-Chart.jpg"
              />
            </div>
            <div v-if="activePage === 'Nightly'" class="px-16 pt-6">
              <img
                class="w-full h-94"
                src="https://dvcsales.com/wp-content/themes/dvcsales/images/rci-resorts/RCI-Registry-Point-Chart.jpg"
              />
            </div>
            <div v-if="activePage === 'Registry Collection'" class="px-16 pt-6">
              <img
                class="w-full h-94"
                src="https://dvcsales.com/wp-content/themes/dvcsales/images/rci-resorts/RCI-Nightly-Point-Chart.jpg"
              />
            </div>
          </div>
          <!-- main content end -->
        </div>
        <div class="right-sidebar w-1/6 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../layout/header/Header.vue";
import ResortsMenu from "../components/ResortsMenu.vue";
export default {
  components: { Header, ResortsMenu },
  data() {
    return {
      activePage: "overview",
      resorts: [
        { name: "ANIMAL KINGDOM", url: "/animal-kingdom", active: false },
        { name: " AULANI", url: "/aulani", active: false },
        { name: "BAY LAKE TOWER", url: "/bay-lake-tower", active: false },
        {
          name: " BEACH CLUB VILLAS",
          url: "/beach-club-villas",
          active: false,
        },
        { name: "BOARDWALK VILLAS", url: "/boardwalk-villas", active: false },
        { name: "BOULDER RIDGE", url: "/boulder-ridge", active: false },
        { name: "COPPER CREEK", url: "/copper-creek", active: false },
        {
          name: "GRAND CALIFORNIAN",
          url: "/grand-californian",
          active: false,
        },
        { name: "GRAND FLORIDIAN", url: "/grand-floridian", active: false },
        { name: "HILTON HEAD", url: "/hilton-head", active: false },
        { name: "OLD KEY WEST", url: "/old-key-west", active: false },
        { name: "POLYNESIAN", url: "/polynesian", active: false },
        { name: "SARATOGA SPRINGS", url: "/saratoga-springs", active: false },
        { name: " RIVERA", url: "/rivera", active: false },
        { name: "VERO BEACH", url: "/vero-beach", active: false },
        { name: "RCI RESORTS", url: "/rci-resorts", active: true },
      ],
      pages: [
        { component: "overview", name: "overview" },
        { component: "Weekly", name: "Weekly" },
        { component: "Nightly", name: "Nightly" },
        { component: "Registry Collection", name: "Registry Collection" },
        { component: "Resort Directory", name: "Resort Directory" },
      ],
    };
  },
  watch: {
    activePage(newVal) {
      if (newVal === "Resort Directory") {
        this.$router.push("https://www.rci.com/dvc/");
      }
    },
  },
};
</script>

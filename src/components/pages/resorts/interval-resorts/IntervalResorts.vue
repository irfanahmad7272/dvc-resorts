<template>
  <div>
    <Header />
    <div class="main-page bg-custom-bg1 text-custom-blue4 pb-12 text-xl">
      <!-- page title -->

      <div class="flex justify-center">
        <div class="left-sidebar-menu hidden w-1/6 lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <div>
            <ResortsMenu />
            <section class="uppercase">
              <ul class="w-full space-x-1 text-center">
                <li>
                  <button
                    v-for="(item, index) in pages"
                    class="m-1 h-10 w-32 cursor-pointer rounded uppercase"
                    :class="[
                      activePage == item.component
                        ? 'bg-custom-blue4 text-white'
                        : 'text-custom-blue4 bg-custom-lightcream hover:bg-custom-blue2 hover:text-white',
                    ]"
                    :key="index"
                    @click="activePage = item.component"
                  >
                    {{ item.name }}
                  </button>
                </li>
              </ul>
            </section>
            <div v-if="activePage === 'overview'" class="mt-10 px-16">
              <img src="/assets/resorts/rci/interval.png" class="w-full" />
              <div class="text-custom-blue6 space-y-4 py-4 text-center text-2xl">
                <p class="text-3xl">Explore the World with Interval International</p>
                <p>
                  As part of the World Collection, Interval International® provides Disney Vacation
                  Club Members access to thousands of properties featuring a wide range of vacation
                  accommodations.
                </p>
                <p>
                  A world of destinations awaits—from the magnificent castles of Europe to the palm
                  tree-lined beaches of Mexico, to the bright lights of exciting Las Vegas.
                </p>
                <p>
                  Members interested in exchanging Disney Vacation Club Points with Interval can
                  book online or call Member Services to book or to deposit Points for a future
                  reservation.
                </p>
              </div>
              <Cards :data="cards" />
            </div>
          </div>
          <!-- main content end -->
        </div>
        <div class="right-sidebar hidden w-1/6 lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../layout/header/Header.vue";
import ResortsMenu from "../components/ResortsMenu.vue";
import Cards from "../components/Cards";

export default {
  components: { Header, ResortsMenu, Cards },
  data() {
    return {
      activePage: "overview",
      pages: [{ component: "overview", name: "overview" }],
      cards: [
        {
          discription:
            "View information about booking to help you secure the reservation you want.",
          name: "Know Before You Book",
          img: "/assets/resorts/rci/01.jpg",
        },
        {
          discription: "See additional details about exchanges with Interval International.",
          name: "Interval International Exchanges",
          img: "/assets/resorts/rci/02.jpg",
        },
        {
          discription: "Protect your Disney Vacation Club travels and buy travel insurance today.",
          name: "Purchase Travel Insurance",
          img: "/assets/resorts/rci/03.webp",
        },
      ],
    };
  },
};
</script>

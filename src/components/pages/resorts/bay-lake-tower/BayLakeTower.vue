<template>
  <div>
    <resorts-layout>
      <div>
        <section class="uppercase">
          <ul class="w-full text-center space-x-1">
            <li>
              <button
                v-for="(item, index) in pages"
                class="bg-custom-lightcream text-custom-blue4 hover:bg-custom-blue3 hover:text-white rounded cursor-pointer min-w-12% px-5 h-10 m-1 uppercase text-lg"
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
        <section class="mt-1">
          <component :is="activePage"></component>
        </section>
      </div>
    </resorts-layout>
  </div>
</template>
<script>
import ResortsLayout from "../components/ResortsLayout";
import Overview from "./components/Overview";
import Rooms from "./components/Rooms";
import Dining from "./components/Dining";
import PointsChart from "../components/PointsChart";
import Map from "./components/Map";
import InventoryForSale from "./components/InventoryForSale";
export default {
  components: {
    ResortsLayout,
    Overview,
    Dining,
    Rooms,
    PointsChart,
    Map,
    InventoryForSale,
  },
  data() {
    return {
      activePage: "Overview",
      pages: [
        { component: "Overview", name: "overview" },
        { component: "Rooms", name: "rooms" },
        { component: "Dining", name: "dining" },
        { component: "PointsChart", name: "point chart" },
        { component: "Map", name: "map" },
        { component: "InventoryForSale", name: "inventory for sale" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="bg-custom-lightyellow inline-block h-screen fixed z-50">
      <ul class="menu-left">
        <li
          v-for="(menu, index) in sellingMenu"
          :key="index"
          class="static"
          :class="
            menu.active ? 'bg-custom-lightblue text-white opened-menu-item' : ''
          "
          @mouseenter="menu.active = true"
          @mouseleave="menu.active = false"
        >
          <a class="h-16 p-3 block" :href="menu.url"
            ><i
              class="text-white bg-custom-lightblue rounded-full text-xl px-2 py-1 mr-4 border border-transparent-hover:border-white"
              :class="menu.icon"
            ></i>
            {{ menu.title }}
          </a>
          <div
            v-if="menu.submenu.length > 0"
            class="menu-left-secondary w-56 absolute top-0 h-screen z-10 overflow-hidden"
          >
            <ul class="h-full">
              <li
                v-for="(submenuItem, i) in menu.submenu"
                :key="i"
                :class="
                  submenuItem.active ? 'bg-custom-midblue text-white' : ''
                "
                @mouseenter="submenuItem.active = true"
                @mouseleave="submenuItem.active = false"
              >
                <a
                  class="h-16 px-3 table-cell align-middle text-white hover:bg-custom-darkblue w-96"
                  :href="submenuItem.url"
                >
                  {{ submenuItem.title }}
                </a>
                <component :is="submenuItem.comp"></component>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AnnualDues from "./components/analytical-data/AnnualDues";
import DeedExpiration from "./components/analytical-data/DeedExpration";
import DisneyRetailPrices from "./components/analytical-data/DisneyRetailPrices";
import Faqs from "./components/how-selling-works/Faqs";
import FeesAssociatedWithSales from "./components/how-selling-works/FeesAssociatedWithSales";
import HowLongItTakesToSell from "./components/how-selling-works/HowLongItTakesToSell";
import HowSellingWorks from "./components/how-selling-works/HowSellingWorks";
import ProductUnderstanding from "./components/how-selling-works/ProductUnderstanding";
import UnderstandingFirpaTax from "./components/how-selling-works/UnderstandingFirptaTax";
import DisneyBuyBack from "./components/my-membership-worth/DisneyBuyBack";
import RecentResale from "./components/my-membership-worth/RecentResale";
import ResaleValueCalculator from "./components/my-membership-worth/ResaleValueCalculator";
import ViewInventoryForSale from "./components/my-membership-worth/ViewInventoryForSale";
import AboutUs from "./components/why-dvc-sales/AboutUs";
import CompareBrokers from "./components/why-dvc-sales/CompareBrokers";
import DvcSalesDifference from "./components/why-dvc-sales/DvcSalesDifference";
import Testimonials from "./components/why-dvc-sales/Testimonials";
import WhyWaitlist from "./components/why-dvc-sales/WhyWaitlist";
export default {
  components: {
    AnnualDues,
    DeedExpiration,
    DisneyRetailPrices,
    Faqs,
    FeesAssociatedWithSales,
    HowLongItTakesToSell,
    HowSellingWorks,
    ProductUnderstanding,
    UnderstandingFirpaTax,
    DisneyBuyBack,
    RecentResale,
    ResaleValueCalculator,
    ViewInventoryForSale,
    AboutUs,
    CompareBrokers,
    DvcSalesDifference,
    Testimonials,
    WhyWaitlist,
  },
  data() {
    return {
      sellingMenu: [
        {
          title: "HOW THE SELLING WORKS",
          url: "/",
          icon: "fas fa-question-circle",
          active: false,
          submenu: [
            {
              title: "FAQ'S for Sellers",
              url: "/",
              comp: "Faqs",
              active: false,
            },
            {
              title: "How the Selling Process Works",
              url: "/",
              comp: "HowSellingWorks",
              active: false,
            },
            {
              title: "Fees Associated with Selling",
              url: "/",
              comp: "FeesAssociatedWithSales",
              active: false,
            },
            {
              title: "Product Understanding Checklist",
              url: "/",
              comp: "ProductUnderstanding",
              active: false,
            },
            {
              title: "How long does it takes to sell",
              url: "/",
              comp: "HowLongItTakesToSell",
              active: false,
            },
            {
              title: "Understanding the FIRPA tax",
              url: "/",
              comp: "UnderstandingFirpaTax",
              active: false,
            },
          ],
        },
        {
          title: "WHAT IS MY MEMBERSHIP WORTH",
          url: "/",
          icon: "fas fa-calendar-alt",
          active: false,
          submenu: [
            {
              title: "Resale Value Calculator",
              url: "/",
              comp: "ResaleValueCalculator",
              active: false,
            },
            {
              title: "View our current Inventory for Sale",
              url: "/",
              comp: "ViewInventoryForSale",
              active: false,
            },
            {
              title: "Disney Buy Back (+)",
              url: "/",
              comp: "DisneyBuyBack",
              active: false,
            },
            {
              title: "Recent Resale",
              url: "/",
              comp: "RecentResale",
              active: false,
            },
          ],
        },
        {
          title: "ANALYTICAL DATA",
          url: "/",
          icon: "fas fa-landmark",
          active: false,
          submenu: [
            {
              title: "Deed Expiration",
              url: "/",
              comp: "DeedExpiration",
              active: false,
            },
            {
              title: "Annual Dues",
              url: "/",
              comp: "AnnualDues",
              active: false,
            },
            {
              title: "Disney Retail Prices",
              url: "/",
              comp: "DisneyRetailPrices",
              active: false,
            },
          ],
        },
        {
          title: "WHY USE DVC SALES",
          url: "/",
          icon: "fas fa-thumbs-up",
          active: false,
          submenu: [
            {
              title: "The DVC Sales Difference",
              url: "/",
              comp: "DvcSalesDifference",
              active: false,
            },
            {
              title: "About Us",
              url: "/",
              comp: "AboutUs",
              active: false,
            },
            {
              title: "Testimonials",
              url: "/",
              comp: "Testimonials",
              active: false,
            },
            {
              title: "Why we have a Waitlist",
              url: "/",
              comp: "WhyWaitlist",
              active: false,
            },
            {
              title: "Compare Brokers",
              url: "/",
              comp: "CompareBrokers",
              active: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style></style>

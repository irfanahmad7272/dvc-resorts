<template>
  <div>
    <div class="bg-custom-lightyellow inline-block h-screen fixed z-50">
      <ul class="menu-left">
        <li
          v-for="(menu, index) in buyingMenu"
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
import Faqs from "./membership/Faqs";
import ResortOverview from "./membership/ResortOverview";
import VacationPointCalculator from "./membership/VacationPointCalculator";
import RentingDvcPoints from "./membership/RentingDvcPoints";
import DeedExpiration from "./analytical-data/DeedExpiration";
import AnnualDues from "./analytical-data/AnnualDues";
import ComparePrice from "./analytical-data/ComparePrice";
import DisneyRetailPrices from "./analytical-data/DisneyRetailPrices";
import RecentResale from "./analytical-data/RecentResale";
import Financing from "./sales-process/Financing";
import HowBuyingWorks from "./sales-process/HowBuyingWorks";
import ProductChecklist from "./sales-process/ProductChecklist";
import AboutUs from "./why-dvc-sales/AboutUs";
import CreateRequest from "./why-dvc-sales/CreateRequest";
import Testimonials from "./why-dvc-sales/Testimonials";
import WhyWeHelp from "./why-dvc-sales/WhyWeHelp";
export default {
  components: {
    Faqs,
    ResortOverview,
    VacationPointCalculator,
    RentingDvcPoints,
    DeedExpiration,
    AnnualDues,
    ComparePrice,
    DisneyRetailPrices,
    RecentResale,
    Financing,
    HowBuyingWorks,
    ProductChecklist,
    AboutUs,
    CreateRequest,
    Testimonials,
    WhyWeHelp,
  },
  data() {
    return {
      buyingMenu: [
        {
          title: "HOW THE MEMBERSHIP WORKS",
          url: "/",
          icon: "fas fa-question-circle",
          active: false,
          submenu: [
            {
              title: "FAQ'S for Buyers",
              url: "/",
              comp: "Faqs",
              active: false,
            },
            {
              title: "Resort Overview",
              url: "/",
              comp: "resortOverview",
              active: false,
            },
            {
              title: "Vacation Point Calculator",
              url: "/",
              comp: "VacationPointCalculator",
              active: false,
            },
            {
              title: "Renting DVC Points",
              url: "/",
              comp: "RentingDvcPoints",
              active: false,
            },
          ],
        },
        {
          title: "ANALYTICAL DATA",
          url: "/",
          icon: "fas fa-calendar-alt",
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
            {
              title: "Recent Resale",
              url: "/",
              comp: "RecentResale",
              active: false,
            },
            {
              title: "Compare Price",
              url: "/",
              comp: "ComparePrice",
              active: false,
            },
          ],
        },
        {
          title: "ABOUT THE SALES PROCESS",
          url: "/",
          icon: "fas fa-landmark",
          active: false,
          submenu: [
            {
              title: "How the Buying Process Works",
              url: "/",
              comp: "HowBuyingWorks",
              active: false,
            },
            {
              title: "Financing",
              url: "/",
              comp: "Financing",
              active: false,
            },
            {
              title: "Product Understanding Checklist",
              url: "/",
              comp: "ProductChecklist",
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
              title: "Why we have help thousand of families?",
              url: "/",
              comp: "WhyWeHelp",
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
              title: "Create a Special Request",
              url: "/",
              comp: "CreateRequest",
              active: false,
            },
          ],
        },
        {
          title: "BLOG PAGE",
          url: "/",
          icon: "fas fa-comment-alt",
          active: false,
          submenu: [],
        },
      ],
    };
  },
};
</script>

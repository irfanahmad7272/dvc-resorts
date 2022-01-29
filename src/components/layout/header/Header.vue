<template>
  <div class="sticky top-0 z-50">
    <div class="z-40 grid w-full grid-cols-12 bg-custom-blue3 px-4 text-white md:px-12">
      <div class="col-span-4 my-auto sm:col-span-5">
        <div class="grid grid-cols-12 md:gap-x-4">
          <div class="col-span-12 my-auto lg:col-span-2 2xl:hidden">
            <button
              @click="showMenu = !showMenu"
              class="my-2 w-24 rounded border border-white bg-transparent py-0.5 hover:bg-custom-blue2 sm:my-auto lg:w-full"
            >
              <i v-if="showMenu" class="fas fa-times"></i>
              <span v-else>Menu</span>
            </button>
          </div>
          <div class="col-span-10 hidden lg:block 2xl:col-span-12">
            We helped over 10,000 families buy and sell Disney Vacation Club Memberships. Since 1993
          </div>
        </div>
      </div>
      <div class="col-span-4 my-auto justify-self-center sm:col-span-2">
        <img class="w-28 md:w-48" src="/assets/DVC-Sales-White.png" alt="dvc-sales-logo" />
      </div>
      <div class="col-span-4 my-auto text-right sm:col-span-5">
        <ul
          class="space-x-2 text-xl md:space-x-4 md:text-2xl xl:space-x-12 xl:text-3xl 2xl:space-x-36"
        >
          <li class="hidden md:inline"><a class="py-3" href="#">LISTING</a></li>
          <li class="hidden md:inline"><a class="py-3" href="#">TESTIMONIALS</a></li>
          <li class="inline">
            <a
              href="#"
              class="rounded-md border border-white bg-custom-green1 p-1.5 text-2xl hover:bg-custom-darkgreen"
            >
              LOGIN <i class="fas fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- sidebar start -->
    <div
      class="header-sidebar absolute z-30 max-h-screen w-56 overflow-y-auto bg-custom-lightcream px-2 pt-3 pb-4 shadow transition-all duration-700 ease-in-out"
      :class="showMenu ? 'left-0' : '-left-96 2xl:left-0'"
    >
      <ul class="mb-8 italic text-custom-blue4">
        <li v-for="(menu, i) in sideMenu" :key="i">
          <p
            v-if="menu.link.length <= 0"
            class="my-1 px-2 text-2xl font-bold text-custom-orange2 underline"
          >
            {{ menu.name }}
          </p>
          <router-link
            v-else
            class="block px-3 py-0.5 text-xl hover:bg-custom-blue3 hover:text-white"
            :to="menu.link"
            >{{ menu.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <!-- sidebar end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      sideMenu: [
        { name: "POPULAR PAGES", link: "" },
        { name: "Home Page", link: "/animal-kingdom" },
        { name: "Why Use DVC Sales", link: "/animal-kingdom" },
        { name: "About Us", link: "/animal-kingdom" },
        { name: "How The Process Work", link: "/animal-kingdom" },
        { name: "Disney Retail Prices", link: "/animal-kingdom" },
        { name: "Deed Expiration", link: "/animal-kingdom" },
        { name: "Annual Dues", link: "/animal-kingdom" },
        { name: "Help And Support", link: "/animal-kingdom" },
        { name: "Blog Pages", link: "/animal-kingdom" },
        { name: "FOR BUYERS", link: "" },
        { name: "Vacation Point Calculator", link: "/animal-kingdom" },
        { name: "Renting DVC Points", link: "/animal-kingdom" },
        { name: "Compare Prices", link: "/animal-kingdom" },
        { name: "Financing", link: "/animal-kingdom" },
        { name: "Product Checklist", link: "/animal-kingdom" },
        { name: "Create A Special Request", link: "/animal-kingdom" },
        { name: "FOR SELLERS", link: "" },
        { name: "Fees Associated With Selling", link: "/animal-kingdom" },
        { name: "How Long To Sell ?", link: "/animal-kingdom" },
        { name: "Understanding FIRPTA Tax", link: "/animal-kingdom" },
        { name: "Resale Value Calculator", link: "/animal-kingdom" },
        { name: "Disney Buy Back+", link: "/animal-kingdom" },
        { name: "The DVC Sales Difference", link: "/animal-kingdom" },
        { name: "Why We Have A Waitlist?", link: "/animal-kingdom" },
        { name: "Compare Brokers", link: "/animal-kingdom" },
      ],
    };
  },
};
</script>
<style>
/* width */
.header-sidebar::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.header-sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.header-sidebar::-webkit-scrollbar-thumb {
  background: #1f4e79;
  border-radius: 10px;
}

/* Handle on hover */
.header-sidebar::-webkit-scrollbar-thumb:hover {
  background: #337ab7;
}
</style>

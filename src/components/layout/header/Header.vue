<template>
  <div>
    <header class="grid grid-cols-12 bg-custom-darkblue text-white px-4 py-1">
      <div class="col-span-5 my-auto">
        <ul class="space-x-4 text-xl">
          <li class="inline">
            <a @click="buyingMenu = !buyingMenu" class="p-3" href="#"
              >BUYING <i class="fas fa-angle-down"></i
            ></a>
          </li>
          <li class="inline">
            <span class="border-l border-custom-dimblue"></span>
            <a @click="sellingMenu = !sellingMenu" class="p-3" href="#"
              >SELLING <i class="fas fa-angle-down"></i
            ></a>
          </li>
          <li class="inline">
            <span class="border-l border-custom-dimblue"></span>
            <a class="p-3" href="#">HOME</a>
          </li>
          <li class="inline"><i class="fas fa-heart"></i></li>
        </ul>
      </div>
      <div class="col-span-2 justify-self-center">
        <img class="w-40" src="assets/DVC-Sales-White-radius.png" alt="logo" />
      </div>
      <div class="col-span-5 my-auto">
        <ul class="space-x-4 text-xl float-right">
          <li class="inline">
            <a class="p-3" href="#">LISTINGS</a>
          </li>
          <li class="inline">
            <span class="border-l border-custom-dimblue"></span>
            <a class="p-3" href="#">TESTIMONIAL </a>
          </li>
          <li class="inline">
            <span class="border-l border-custom-dimblue"></span>
            <a class="p-3 text-xs" href="#">CREATE ACCOUNT </a>
            <a class="p-3 text-xs" href="#">LOGIN </a>
          </li>
        </ul>
      </div>
    </header>
    <BuyingMenu v-if="buyingMenu" />
    <SellingMenu v-if="sellingMenu" />
  </div>
</template>
<script>
import BuyingMenu from "./components/buying-menu/BuyingMenu";
import SellingMenu from "./components/selling-menu/SellingMenu";
export default {
  components: { BuyingMenu, SellingMenu },
  data() {
    return {
      buyingMenu: false,
      sellingMenu: false,
    };
  },
};
</script>

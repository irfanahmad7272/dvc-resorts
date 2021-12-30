<template>
  <div>
    <div
      class="w-full flex md:flex-row flex-col mt-7 items-stretch md:space-x-3 space-x-0 md:space-y-0 space-y-3"
    >
      <template v-for="(card, index) in data">
        <div
          class="md:w-1/3 w-full p-5 bg-custom-lightcream shadow rounded-lg"
          :key="index"
        >
          <div>
            <img :src="card.img" class="h-32 w-full" />
          </div>
          <div class="p-4 text-custom-blue4 font-medium">
            <h2 class="py-2 text-xl underline uppercase">
              {{ card.name }}
            </h2>
            {{ card.discription }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style></style>

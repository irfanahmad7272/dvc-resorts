<template>
  <div>
    <div
      class="mt-7 flex w-full flex-col items-stretch space-x-0 space-y-3 md:flex-row md:space-x-3 md:space-y-0"
    >
      <template v-for="(card, index) in data">
        <div class="bg-custom-lightcream w-full rounded-lg p-2 shadow md:w-1/3 md:p-5" :key="index">
          <div>
            <img :src="card.img" class="w-full md:h-36 2xl:h-40" />
          </div>
          <div class="text-custom-blue4 p-4 font-medium">
            <h2 class="py-2 text-2xl uppercase underline">
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

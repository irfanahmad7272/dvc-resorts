<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto m-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="(tab, index) in tabs"
            @click="changeView($event, tab.name)"
            :key="index"
          >
            <a :href="'#' + tab.name"> {{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="w-full text-center col-span-12 md:col-span-9">
        <div v-for="(tab, index) in tabs" :key="index">
          <div v-if="activePage === tab.name">
            <div>
              <h1 class="text-3xl font-semibold text-custom-blue4">
                {{ tab.name }}
              </h1>
            </div>
            <div class="py-10 px-4 md:px-0">
              <ResortsSlider :images="tab.imgs" />
            </div>
            <div class="text-2xl text-custom-blue4 mt-5 mx-auto">
              {{ tab.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: {
    ResortsSlider,
  },
  data() {
    return {
      activePage: "Storytellers Cafe",
      tabs: [
        {
          name: "Storytellers Cafe",
          imgs: [
            "/assets/resorts/grand-californian/dinning/cafe/1.png",
            "/assets/resorts/grand-californian/dinning/cafe/2.png",
          ],
          description:
            "An innovative menu for breakfast and dinner is at the heart of Storytellers Cafe. Start your day with shared mini pastries, including croissants, muffins, danishes, and entrees like Mickey waffles and breakfast burritos. Signature cocktails, mocktails, and hot beverages are also available. At dinner, enjoy savory entrees like Garlic Soy Glazed Chicken Wings and the American Wagyu Burger. End the meal with Bread Pudding and fresh strawberries. ",
        },
        {
          name: "Napa Rose",
          imgs: [
            "/assets/resorts/grand-californian/dinning/nopos/1.png",
            "/assets/resorts/grand-californian/dinning/nopos/2.png",
          ],
          description:
            "This fine dining establishment is the perfect place to celebrate special occasions and everyday victories. Warm, Craftsman-inspired decor nods to the beauty of the Golden State at this premier dining destination. Entrees include dishes that pay homage to California's culinary masterpieces, local farmers, and famous winemakers. The restaurant offers a prix fixe Vintner Menu and a la carte selections and is known for its impressive wine list",
        },
        {
          name: "Craftsman Grill",
          imgs: ["/assets/resorts/grand-californian/dinning/grill/1.png"],
          description:
            "Authentic craftsman ambiance provides the backdrop for breakfast, dinner, and refreshing drinks. From breakfast burritos and smoked salmon bagels to artisanal pizzas and handcrafted sandwiches, the Craftsman grill has it all. Plus, grab-and-go meals and snacks are also available. ",
        },
        {
          name: "Hearthstone Lounge",
          imgs: ["/assets/resorts/grand-californian/dinning/lounge/1.png"],
          description:
            "This lounge features small plates like avocado toast with burrata and gourmet pizzas. Designed after the Arts and Crafts architectural period, this lounge allows you to relax and enjoy the hotel's beautiful interior. ",
        },
        {
          name: "Napa Rose Lounge ",
          imgs: ["/assets/resorts/grand-californian/dinning/rose/1.png"],
          description:
            "The Napa Rose Lounge is part of the Napa Rose restaurants and offers early evening appetizers, late-night snacks, and exquisite nightcaps. Indoor and outdoor dining is available while taking a bite into California-inspired seasonal cuisine, including cheese plates, seafood, and meats. ",
        },
      ],
    };
  },
  methods: {
    changeView(e, tab) {
      e.preventDefault();
      this.activePage = tab;
    },
  },
};
</script>

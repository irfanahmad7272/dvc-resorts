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
      <DiningTab :tabs="tabs" :activePage="activePage" />
    </div>
  </div>
</template>

<script>
import DiningTab from "../../components/DiningTab";
export default {
  components: { DiningTab },
  data() {
    return {
      activePage: "Jiko - The Cooking Place",
      tabs: [
        {
          name: "Jiko - The Cooking Place",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/jiko/1.png",
            "/assets/resorts/animal-kingdom/dining/jiko/2.png",
            "/assets/resorts/animal-kingdom/dining/jiko/3.png",
            "/assets/resorts/animal-kingdom/dining/jiko/4.png",
          ],
          description:
            "You’ll feel like you’re in the heart of Africa as you enjoy South African wines and the warm, colorful atmosphere. Blending traditional African, Indian, and Mediterranean flavors, dishes change seasonally and vary from oven-fired flatbreads to oak-grilled filet mignon.",
        },
        {
          name: "Boma - Flavors of Africa",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/boma/1.png",
            // "/assets/resorts/animal-kingdom/dining/boma/2.png",
            "/assets/resorts/animal-kingdom/dining/boma/3.png",
            "/assets/resorts/animal-kingdom/dining/boma/4.png",
          ],
          description:
            "You’ll feel like you’re in the heart of Africa as you enjoy South African wines and the warm, colorful atmosphere. Blending traditional African, Indian, and Mediterranean flavors, dishes change seasonally and vary from oven-fired flatbreads to oak-grilled filet mignon.",
        },
        {
          name: "The Mara",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/mara/1.png",
            "/assets/resorts/animal-kingdom/dining/mara/2.png",
            "/assets/resorts/animal-kingdom/dining/mara/3.png",
            "/assets/resorts/animal-kingdom/dining/mara/4.png",
          ],
          description:
            "This quick-service eatery is named after a river that flows through Tanzania and Kenya. You'll find classic entrees and grab-and-go favorites here.",
        },
        {
          name: "Cape Town Lounge and Wine Bar",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/cape/1.png",
            "/assets/resorts/animal-kingdom/dining/cape/2.png",
            "/assets/resorts/animal-kingdom/dining/cape/3.png",
            // "/assets/resorts/animal-kingdom/dining/cape/4.png",
          ],
          description:
            "Adjacent to Jiko, this lounge offers South African wines, appetizers, and a full bar. You may also order from the full menu and dine at the bar. ",
        },
        {
          name: "Victoria Falls Lounge",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/victoria/1.png",
            "/assets/resorts/animal-kingdom/dining/victoria/2.png",
            "/assets/resorts/animal-kingdom/dining/victoria/3.png",
            "/assets/resorts/animal-kingdom/dining/victoria/4.png",
          ],
          description:
            "A host of South African beers and wines are featured at this intimate bar overlooking Boma restaurant. Take your drink and enjoy the flickering ambiance of the outdoor fire pit.",
        },
        {
          name: "Sanaa",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/sanaa/1.png",
            "/assets/resorts/animal-kingdom/dining/sanaa/2.png",
            "/assets/resorts/animal-kingdom/dining/sanaa/3.png",
            "/assets/resorts/animal-kingdom/dining/sanaa/4.png",
          ],
          description:
            "Located at Kidani Village, experience the art of African cooking with Indian influences at this family-friendly restaurant. View African animals as they roam around the Sunset Savanna and the nearby observation overlook.",
        },
        {
          name: "Maji Pool Bar",
          imgs: [
            "/assets/resorts/animal-kingdom/dining/maji/1.png",
            "/assets/resorts/animal-kingdom/dining/maji/2.png",
            "/assets/resorts/animal-kingdom/dining/maji/3.png",
            "/assets/resorts/animal-kingdom/dining/maji/4.png",
          ],
          description:
            "The Swahili word meaning “water” this watering hole offers cocktails, wine, and draft beer along with sandwiches, salads, and snacks.",
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

<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream mx-auto m-20">
          <li
            class="py-2 px-4 border border-custom-blue4 cursor-pointer"
            :class="[{ 'bg-custom-blue4 text-white': activePage == tab.name }]"
            v-for="(tab, index) in tabs"
            @click="activePage = tab.name"
            :key="index"
          >
            {{ tab.name }}
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
      activePage: "Topolino's Terrace – Flavors of the Riviera",
      tabs: [
        {
          name: "Topolino's Terrace – Flavors of the Riviera",
          imgs: [
            "/assets/resorts/polynesian/dining/ohana/1.png",
            "/assets/resorts/polynesian/dining/ohana/2.png",
          ],
          description:
            "Modeled after cliffside restaurants dotting the Riviera, Topolino's Terrace provides a stunning backdrop for European and Meditteranean-inspired dishes at this rooftop eatery. Time your dinner so that you can view nighttime fireworks from nearby Epcot or Disney's Hollywood Studios. At breakfast, Disney characters will greet you as you enjoy a prix-fixe menu",
        },
        {
          name: "Le Petit Café",
          imgs: [
            "/assets/resorts/polynesian/dining/aloha/1.png",
            "/assets/resorts/polynesian/dining/aloha/2.png",
            "/assets/resorts/polynesian/dining/aloha/3.png",
          ],
          description:
            "This small cafe transforms from a coffee and pastry shop in the morning into a wine and appetizer bar at night—all inspired by the sophistication and elegance of Paris. From lattes, freshly brewed coffee, and pastries to sparkling wine and appetizers, take your bites and dine alfresco! ",
        },
        {
          name: "Bar Riva",
          imgs: [
            "/assets/resorts/polynesian/dining/kona/1.png",
            "/assets/resorts/polynesian/dining/kona/2.png",
            "/assets/resorts/polynesian/dining/kona/3.png",
            "/assets/resorts/polynesian/dining/kona/4.png",
          ],
          description:
            "Spend a relaxing afternoon sampling sandwiches, salads, cocktails, and more at this poolside lounge. Take a cue from Riviera natives and enjoy long-lunches with Mediterranean and European-infused dishes. Sip on a frozen drink, spritzer, or rosé and munch on delectable hand-crafted sandwiches. ",
        },
        {
          name: "Primo Piatto",
          imgs: [
            "/assets/resorts/polynesian/dining/tambu/1.png",
            "/assets/resorts/polynesian/dining/tambu/2.png",
            "/assets/resorts/polynesian/dining/tambu/3.png",
            "/assets/resorts/polynesian/dining/tambu/4.png",
          ],
          description:
            "Enjoy gourmet breakfast, lunch, or dinner in a quick-service setting that offers specialties like blueberry-lemon pancakes, Margherita pizza, plus hot and cold sandwiches. ",
        },
      ],
    };
  },
};
</script>

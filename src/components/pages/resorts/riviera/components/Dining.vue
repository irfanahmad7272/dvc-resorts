<template>
  <div>
    <div class="mt-12 grid grid-cols-12 md:gap-x-10">
      <div class="col-span-12 md:col-span-3">
        <ul class="bg-custom-lightcream m-20 mx-auto">
          <li
            class="border-custom-blue4 cursor-pointer border py-2 px-4"
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
      activePage: "Topolino's Terrace",
      tabs: [
        {
          name: "Topolino's Terrace",
          imgs: [
            "/assets/resorts/riviera/topolina.jpg",
            "/assets/resorts/riviera/01.jpg",
            "/assets/resorts/riviera/topolina2.jpg",
            "/assets/resorts/riviera/topolina3.jpg",
            "/assets/resorts/riviera/topolina4.jpg",
          ],
          description:
            "Modeled after cliffside restaurants dotting the Riviera, Topolino's Terrace provides a stunning backdrop for European and Meditteranean-inspired dishes at this rooftop eatery. Time your dinner so that you can view nighttime fireworks from nearby Epcot or Disney's Hollywood Studios. At breakfast, Disney characters will greet you as you enjoy a prix-fixe menu",
        },
        {
          name: "Le Petit Café",
          imgs: [
            "/assets/resorts/riviera/le-patit-cafe.jpg",
            "/assets/resorts/riviera/le-patit-cafe2.jpg",
            "/assets/resorts/riviera/le-patit-cafe3.jpg",
          ],
          description:
            "This small cafe transforms from a coffee and pastry shop in the morning into a wine and appetizer bar at night—all inspired by the sophistication and elegance of Paris. From lattes, freshly brewed coffee, and pastries to sparkling wine and appetizers, take your bites and dine alfresco! ",
        },
        {
          name: "Bar Riva",
          imgs: [
            "/assets/resorts/riviera/bar-riva.jpg",
            "/assets/resorts/riviera/bar-riva2.jpg",
            "/assets/resorts/riviera/bar-riva3.jpg",
            "/assets/resorts/riviera/bar-riva4.jpg",
          ],
          description:
            "Spend a relaxing afternoon sampling sandwiches, salads, cocktails, and more at this poolside lounge. Take a cue from Riviera natives and enjoy long-lunches with Mediterranean and European-infused dishes. Sip on a frozen drink, spritzer, or rosé and munch on delectable hand-crafted sandwiches. ",
        },
        {
          name: "Primo Piatto",
          imgs: [
            "/assets/resorts/riviera/primo-piatto.jpg",
            "/assets/resorts/riviera/primo-piatto2.jpg",
            "/assets/resorts/riviera/primo-piatto3.jpg",
          ],
          description:
            "Enjoy gourmet breakfast, lunch, or dinner in a quick-service setting that offers specialties like blueberry-lemon pancakes, Margherita pizza, plus hot and cold sandwiches. ",
        },
      ],
    };
  },
};
</script>

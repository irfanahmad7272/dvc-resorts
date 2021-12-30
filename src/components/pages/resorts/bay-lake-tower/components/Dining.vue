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
              <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
                <div v-for="(img, i) in tab.imgs" :key="i">
                  <img
                    class="w-full h-64 md:h-96 pointer-events-none"
                    :src="img"
                    alt="slider-imgs"
                  />
                </div>
              </VueSlickCarousel>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      activePage: "California Grill",
      tabs: [
        {
          name: "California Grill",
          imgs: [
            "/assets/resorts/bay-lake-tower/restorant-california-grill-bison-pepperoni-pizza-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-black-grouper-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-chocolate-cake-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-gallery.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-gallery10.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-gallery11.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-hearts-of-romaine-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-kazan-rolls-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-pizza-oven-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-pork-tenderloin-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-california-grill-short-rib-dumplings-16x9.jpg",
          ],
          description:
            "Sublime Vistas and Spectacular Cuisine Experience the flavors of the Pacific Coast at this award-winning restaurant. Via private elevator, ascend to the 15th floor of Disney’s Contemporary Resort, where you’ll discover exquisite panoramic views of the shimmering lagoon, Floridian woodland and Cinderella Castle. Inside, enjoy the vibrant sights and sounds of the lively onstage kitchen, where chefs combine global flavors in deliciously inventive new ways. Gourmet Dining Californian cuisine celebrates fresh, seasonal ingredients and the international, melting-pot culture of the Golden State. Changing seasonally, the menu may include such specialties as handmade Sonoma Goat Cheese Ravioli and Oak-fired Filet of Beef. Delight in mouthwatering sushi, as well as flavorful brick oven-fired pizza. Then, polish off a perfect meal with decadent desserts like Warm Valrhona Chocolate Cake. To complement their entrées, Guests 21 years of age and up can select from over 300 hand-picked wines—most of which are from California. Over 50 are available by the glass, and sommeliers are on hand to offer pairing suggestions.",
        },
        {
          name: "Chef Mickey's",
          imgs: [
            "/assets/resorts/bay-lake-tower/restorant-mickey-pancakes-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-Banana-Bread-Fork-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-Contempo_MickeyMinnieSmoothie-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-LoadedPotatoCheeseCasserole-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-WDW_ContemporaryResort_ChefMickeys_MickeysPlatedEntrees_16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-WDW_ContemporaryResort_ChefMickeys_SalmonAndSalads_16x9.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-chef-mickeys-gallery06.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-chef-mickeys-gallery07.jpg",
            "/assets/resorts/bay-lake-tower/restorant-2-chef-mickeys-thumb-01.jpg",
          ],
          description:
            "Chef Mickey’s Family Feast — Character Dining Experience Character Dining and an enhanced all-you-care-to-eat, family-style meal in a bright, happy space. As the monorail whizzes by, soak up the expansive views of Bay Lake and behold the stunning 90-foot-high mural by Disney Legend Mary Blair that overlooks the festive eatery. Each table will receive a special, autographed card keepsake from Mickey and his friends. Throughout the dining experience, Mickey Mouse and some favorite pals will make surprise appearances in each of the dining rooms. See them move throughout the restaurant, waving hello as rollicking music fills the air.",
        },
        {
          name: "The Wave... of American Flavors",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-3-wave-restaurant-of-american-flavors-gallery01.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-3-wave-restaurant-of-american-flavors-gallery02.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-3-wave-restaurant-of-american-flavors-gallery03.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-3-wave-restaurant-of-american-flavors-gallery04.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-3-wave-restaurant-of-american-flavors-gallery06.jpg",
          ],
          description:
            "A Dash of Something More Surround yourself in casual elegance at this feel-good eatery. Dine on new American cuisine inspired by a passion for locally and regionally sourced ingredients, accompanied by new world wines and tasty craft beers. Start your day with a classic a la carte American breakfast such as eggs Benedict or dive into our signature sweet potato pancakes served with pecan-honey butter and a side of sausage or bacon. At lunch, opt for robust sandwiches, our signature burgers or an assortment of fresh salads. Dinner offers such distinctive dishes as grilled beef tenderloin and seared potato gnocchi. Then cap off your meal with crème brûlée and a divine dessert selection. Advance reservations are highly recommended. Learn when advance reservations can be made. Please note that menu items are subject to change without notice.",
        },
        {
          name: "Contempo Café",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-4-contempo-bounty-platter-16x9.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-4-contempo-cafe-gallery00.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-4-contempo-cafe-gallery03.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-4-contempo-cafe-gallery04.jpg",
          ],
          description:
            "Feast Among Iconic Touches Soak up your surroundings as you ponder your next meal. Situated on the Grand Canyon Concourse, this eatery boasts a prime view of monorails buzzing by—and the 90-foot mural by Mary Blair, the legendary artist behind it's a small world. You’ll also find a diverse menu of fare, including flatbreads, salads, sandwiches and a tempting array of cupcakes infused with Disney magic.",
        },
        {
          name: "Contemporary Grounds",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-5-JOF-Contemporary-wide-16x9.webp",
          ],
          description:
            "Featuring gourmet coffees, iced tea, hot chocolate, smoothies and assorted artisan baked goods, this is the perfect place to energize before you venture to the parks! Joffrey's Coffee™, the Official Specialty Coffee of Walt Disney World Resort.",
        },
        {
          name: "Cove Bar",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-6-cove-bar-01-16x9.webp",
          ],
          description:
            "Find specialty cocktails, beer, wine, wraps and salads at this private poolside bar for Guests of Bay Lake Tower and Disney Vacation Club members.",
        },
        {
          name: "Outer Rim",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-7-outer-rim-00.webp",
          ],
          description:
            "Admire stunning views of Bay Lake with specialty cocktails before—or after—dinner. Try a Piña CoLAVA, Watermelon Margarita, Blue “Glow-tini” or more! A full bar menu is also available.",
        },
        {
          name: "The Sand Bar",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-8-sand-bar-00.webp",
          ],
          description:
            "Picnic poolside with burgers, hot dogs and more. Tropical cocktails, draft beer, sangria and wine make it even more fun! Or cool off with a full bar menu and some AC inside the enclosed bar. Dessert items are also available.",
        },
        {
          name: "The Wave Lounge",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-9-wave-lounge-00.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-9-wave-lounge-gallery02.jpg",
            "/assets/resorts/bay-lake-tower/restaurant-9-wave-lounge-gallery03.jpg",
          ],
          description:
            "Immerse yourself in a “swell” time at this stylish bar inside The Wave… of American Flavors restaurant. Serving organic beer, New World wines and trendy cocktails, this elegant oasis promises a chic retreat for adults looking to unwind.",
        },
        {
          name: "Disney Resorts Private Dining",
          imgs: [
            "/assets/resorts/bay-lake-tower/restaurant-10-room-service-00.webp",
          ],
          description:
            "Convenience, Comfort and Quality Whether you’re hungry for a late dinner or you just want some breakfast when you wake, private dining is the ticket. With Disney Resorts Private Dining, you can choose from a variety of American favorites—along with some specialty items particular to your Disney Resort hotel!",
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

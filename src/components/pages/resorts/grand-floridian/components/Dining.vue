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
      activePage: "Narcoossee's",
      tabs: [
        {
          name: "Narcoossee's",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (1).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (2).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (3).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (4).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (5).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (6).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (7).jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentNarcoossee (8).jpg",
          ],
          description:
            "Relish supreme seafood and steak at this waterfront fine dining location. End your meal by viewing the fireworks and Electrical Water Pageant from the restaurant's large veranda",
        },
        {
          name: "Gasparilla Island Grill",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla3.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla4.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla5.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentgasparilla6.jpg",
          ],
          description:
            "Dining located in Disney's Grand Floridian Resort & Spa Relax and refuel in this casual dining restaurant. Start your day with Mickey Waffles or a breakfast platter. Enjoy a variety of entrees available for lunch and dinner. Selections include an artisan burger, pepperoni pizza or a hot italian sandwich. Beer and wine are available.",
        },
        {
          name: "Beaches Pool Bar & Grill",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentBeaches1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentBeaches2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentBeaches3.jpg",
          ],
          description:
            "Dining located in Disney's Grand Floridian Resort & Spa Enjoy a drink in style at this gleaming white gazebo bar by the sandy beach and zero-entry pool. Sip on a selection of wines, draft beers and specialty cocktails—like the Sunshine Margarita. Snacks and poolside service are available.",
        },
        {
          name: "1900 Park Fare",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park3.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park4.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park5.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park6.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurent1900Park7.jpg",
          ],
          description:
            "This is the place to see your favorite Disney characters for breakfast and dinner at the Grand Floridian. You may see Mary Poppins, Alice, Winnie the Pooh, and other friends at the Supercalifragilistic Breakfast or dine with the Tremains and Charmings at Cinderella’s Happily Ever After Dinner. Plus, stop by for a tea party fit for a mad hatter in the afternoon. ",
        },
        {
          name: "Grand Floridian Cafe",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe3.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe4.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe5.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentcafe6.jpg",
          ],
          description:
            "Enjoy casual dining for breakfast, lunch, and dinner at this moderately priced eatery. Soak in beautiful views of the rose gardens and pools as you dine on reinvented American classics like Eggs Benedict or the Thermidor’ Burger for brunch. The dinner menu adds lively entrees like Sirloin Steak and Mizo-Glazed Salmon. ",
        },
        {
          name: "Enchanted Rose",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentEnchanted1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentEnchanted2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentEnchanted3.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentEnchanted4.jpg",
          ],
          description:
            "Deepest Pride and Greatest Pleasure Step into a realm of elegance and wonder and lounge in 4 sophisticated spaces themed after the Disney live-action film. Visit this signature lounge for an evening of enchantment, where you can order exquisite appetizers like White Sturgeon Caviar, Truffle Fries and more. The bar itself glows from the light of a magnificent golden chandelier inspired by Belle’s flowing ball gown. Delightful details from the beloved fairytale are infused throughout the lounge. The formal library showcases classical baroque designs and French furnishings while the whimsical garden room represents the forest surrounding Beast’s castle. For those who prefer to sit under the stars, the outdoor patio evokes the beauty and romance of Beast’s garden terrace.",
        },
        {
          name: "Courtyard Pool Bar",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentCourtyard1.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentCourtyard2.jpg",
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentCourtyard3.jpg",
          ],
          description:
            "Enjoy a refreshing dip then a refreshing sip by the largest pool at the Resort. A ping-pong table and 2 TVs provide added entertainment. Specialty cocktails, beer, wine, sangria, a Buffalo chicken wrap, all-beef gourmet hot dogs or pretzels with hummus are available through poolside service.",
        },
        {
          name: "Cítricos",
          imgs: [
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricos1.jpg",
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricos2.jpg",
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricos3.jpg",
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricos4.jpg",
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricos5.jpg",
          ],
          description:
            "Wholesome ingredients blend for Mediterranean-infused flavors with a Floridian twist at this Signature Dining location. The decor was recently updated to reflect the whimsy and wonder of Mary Poppins Returns, featuring motifs from the film’s animated sequences. The menu represents the freshest ingredient selections available. Their award-winning international wine list is filled with Old World wines and is a sight to see! ",
        },
        {
          name: "Cítricos Lounge",
          imgs: [
            // "/assets/resorts/grand-floridian/GrandFloridianRestaurentCítricosLounge1.jpg",
          ],
          description:
            "Unwind within the Mediterranean ambiance at this cozy bar where you can enjoy international wines, cocktails, artisanal beers and seasonal tapas.",
        },
        {
          name: "Garden View Tea Room",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentGarden1.webp",
          ],
          description:
            "Peak into life for the Victorian age's high-society at this elegant and enchanting tea room. Morning and afternoon tea is served while you sip and enjoy beautiful views of the various gardens and pools around the resort.",
        },
        {
          name: "Victoria & Albert's",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentVictoria1.webp",
          ],
          description:
            "Contemporary Dining, Timeless Elegance Savor a superior fine dining experience at one of the most preeminent restaurants in Walt Disney World Resort. Victoria & Albert’s features modern American cuisine crafted with exquisite ingredients from around the world, including truffles from Italy, Russian Osetra caviar, beef from Japan, poulet rouge from North Carolina and local Florida shrimp. Nestled in Disney’s Grand Floridian Resort & Spa, this restaurant is one of the Southeast’s most prestigious and has won AAA’s illustrious Five Diamond Award, the Forbes Travel Guide Five-Star Award, glowing Zagat reviews and a host of other accolades. Enjoy your meal in the Dining Room, the Chef’s Table in the kitchen or the more private Queen Victoria Room—whichever your prefer, prepare for an extraordinary culinary adventure that hearkens back to a genteel era, when dining was a sophisticated ritual accentuated by service from seasoned maître d’hôtels and chefs in classic white toques. Because each season yields signature flavors and fresh ingredients, Chef Scott Hunnel and his team source global markets daily for the finest fish, meats and produce available to create our Chef’s Degustation Menu. From Spanish Octopus with Iberico ham and sherry vinaigrette to a whimsical poached egg with Florida corn and crayfish, every dish shines as Chef Hunnel melds tradition with innovation—all for the pleasure of our Guests.",
        },
        {
          name: "Victoria & Albert's Chef's Table Dinner",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentVictoriaAlbert1.webp",
          ],
          description:
            "Dine Like Royalty Savor the finest dining at Walt Disney World Resort as our chef de cuisine crafts an exquisite degustation menu for a select few Guests. Gather at the exclusive table located in the heart of Victoria & Albert's kitchen—interacting with our staff as they prepare an extraordinary culinary experience just for you. Inspired by the season, each unique menu features ingredients culled fresh daily from the world market. Throughout the approximately 3-hour service, the chef offers up superb morsels and tasting samples, tailoring the mouth-watering feast to your party's dietary preferences. And when you choose the optional wine pairing, our sommelier selects the ideal vintage to enjoy with each portion of your meal.",
        },
        {
          name: "Victoria & Albert's Dinner Queen Victoria Room",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentVictoriaAlbertRoom1.webp",
          ],
          description:
            "Private Dining at Its Finest Amid a setting of refined elegance, come dine in the grand tradition of a bygone era. Recalling the lavish Old World ambience of London and Paris, Queen Victoria’s Room inside Victoria & Albert’s at Disney’s Grand Floridian Resort & Spa offers a secluded retreat. Behind frosted-glass doors, this richly appointed space accommodates no more than 8 Guests at a time. Featuring a glowing fireplace and splendid artwork showcasing European royalty, the venue is ideal for special occasions or romantic dinners. With the melodious strains of live harp music providing a soothing backdrop, and our expert wait staff attending to your every request—you’re assured of an unforgettable culinary experience from beginning to end. About Victoria & Albert’s Winner of the prestigious AAA Five Diamond Award every year since 2000 and the Forbes Travel Guide Five-Star Award for 2018 - 2019, Victoria & Albert's is the premiere restaurant at Walt Disney World Resort. We feature fine contemporary American cuisine and splendid wine pairings offered with personalized butler service.",
        },
        {
          name: "Disney Resorts Private Dining",
          imgs: [
            "/assets/resorts/grand-floridian/GrandFloridianRestaurentPrivateDining1.webp",
          ],
          description:
            "Convenience, Comfort and Quality Whether you’re hungry for a late dinner or you just want some breakfast when you wake, private dining is the ticket. With Disney Resorts Private Dining, you can choose from a variety of American favorites—along with some specialty items particular to your Disney Resort hotel! Our own style of room service is offered to Disney Resort hotel Guests at the following locations:",
        },
      ],
    };
  },
};
</script>

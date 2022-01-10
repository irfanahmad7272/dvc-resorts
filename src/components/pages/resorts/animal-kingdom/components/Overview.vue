<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="text-center mt-14">
              <h2
                class="text-custom-blue4 text-4xl font-semibold uppercase mt-2"
              >
                DISNEY'S ANIMAL KINGDOM
              </h2>
            </div>
            <div class="mt-2 overflow-auto md:text-2xl">
              <p class="text-custom-blue4 font-medium">
                Disney’s Animal Kingdom Villas is a lodge-style resort featuring
                spacious accommodations in a setting that make you feel like
                you're right in the heart of Africa. <br />
                Over 30 species of African wildlife roam free amidst four lush,
                tropical savannas, which you may view at observation stations
                throughout the resort and from select guest room balconies.
                <br />
                The resort is set in the middle of an expansive wildlife
                preserve. It features authentic African-inspired architecture
                and landscape design that allows for expansive views of the
                savanna and its many animal inhabitants. <br />
                Thatched ceilings, large beams, a woven ceiling, hand-carved
                golden-tone furnishings, genuine African artifacts, and a vast
                mud fireplace greet you in the main lobby. Inside the guest
                rooms, you'll discover more African architecture with
                hand-carved columns, ornate floral hanging fixtures, golden-tone
                furnishings, and floor lamps that resemble swaying trees.
                Experience the untamed spirit of Africa with panoramic views
                from Arusha Rock, an elevated rock platform just outside the
                main lobby. <br />
                Discover thousands of indigenous African shrubs, grasses, and
                trees—including the most recognized canopy tree in Africa, the
                Copper Pod. There are two places DVC members can call home at
                Disney’s Animal Kingdom Villas. <br />
                Jambo House is part of the resort's central building and has
                been recognized for its environmentally responsible practices by
                the Florida Green Lodging Program. <br />
                The Kidani Village Villas are separated from Jambo House and
                extend out and take the shape of a water buffalo’s horns or a
                piece of native African jewelry. <br />
                There’s no shortage of exciting family activities at Disney’s
                Animal Kingdom Villas, from safaris to water slides to wildlife
                games. <br />
                Amenities include two pool areas (complete with waterslides and
                hot tubs), a playground that overlooks a flamingo habitat, and
                wildlife viewing through observation stations located throughout
                the property.
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="text-custom-orange1 font-body text-3xl text-center font-semibold uppercase mt-2 underline"
              >
                What makes Disney's Animal Kingdom Resort great!
              </h2>
            </div>
            <Cards :data="cards" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../../components/Cards";
import ResortsSlider from "../../components/ResortsSlider";
export default {
  components: {
    Cards,
    ResortsSlider,
  },
  data() {
    return {
      active: false,
      cards: [
        {
          discription:
            "Located in the Animal Kingdom Park area, you'll be away from it all while remaining only a short bus ride to attractions on and off Walt Disney World property.",
          name: "SAFARI ESCAPE",
          img: "/assets/resorts/animal-kingdom/Animal-Kingdom-Lobby3.jpg",
        },
        {
          discription:
            "Guests are transported to an African village, where you'll find authentic African decor and details through out the resort.",
          name: "AFRICAN LODGING",
          img: "/assets/resorts/animal-kingdom/Animal-Kingdom-Lobby4.jpg",
        },
        {
          discription:
            "A 21-acre African wildlife preserve surrounds the resort, which allows you to wake up and view giraffes, elephants, and zebras while sipping coffee from your private balcony.",
          name: "WILDLIFE OBSERVATION",
          img: "/assets/resorts/animal-kingdom/b5.png",
        },
      ],
      images: [
        "/assets/resorts/animal-kingdom/animal-kingdom.jpg",
        "/assets/resorts/animal-kingdom/animal-kingdom2.jpg",
        "/assets/resorts/animal-kingdom/animal-kingdom3.webp",
        "/assets/resorts/animal-kingdom/animal-kingdom4.webp",
        "/assets/resorts/animal-kingdom/animal-kingdom5.jpg",
        "/assets/resorts/animal-kingdom/animal-kingdom6.jpg",
      ],
    };
  },
};
</script>

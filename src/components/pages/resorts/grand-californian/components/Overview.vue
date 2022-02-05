<template>
  <div>
    <div class="items-center gap-x-2">
      <div class="mt-5">
        <div class="mx-4">
          <div class="py-5">
            <ResortsSlider :images="images" />
            <div class="mt-14 text-center">
              <h2 class="mt-2 text-4xl font-semibold uppercase text-custom-blue4">
                Disney's Grand Californian
              </h2>
            </div>
            <div class="my-3 overflow-auto md:text-2xl">
              <p class="font-medium text-custom-blue4">
                The only DVC resort located at Disneyland, the Villas at Disney’s Grand Californian
                Hotel & Spa offer close access to all the magic of Disneyland. <br />
                The excitement and thrills of Disney's California Adventure Park are minutes away.
                Enjoy world-class amenities, recreation, and dining at this one-of-a-kind resort!
              </p>
            </div>
            <div class="mt-7">
              <h2
                class="mt-2 text-center font-body text-3xl font-semibold uppercase text-custom-orange1 underline"
              >
                WHAT MAKES THIS DISNEY VACATION CLUB RESORT
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
            "Journey to the heart of Disney’s Grand Californian Hotel & Spa for an array of luxuriating body treatments, massages and salon services—all utilizing premium products.",
          name: "Tenaya Stone Spa",
          img: "/assets/resorts/grand-californian/1180w-600h_081321_tenaya-stone-spa-grand-californian.jpg",
        },
        {
          discription:
            " With Craftsman-style theming and a rustic ambiance, the Grand Californian celebrates the beauty and wonder of the entire state. ",
          name: "Grand adventure",
          img: "/assets/resorts/grand-californian/2.png",
        },
        {
          discription:
            "Join some favorite Disney Princesses at the luxurious Napa Rose for an unforgettable, one-of-a-kind adventure featuring enchanting activity time, a delicious three-course breakfast and personal visits with Disney Princesses!",
          name: "Disney Princess Breakfast Adventures",
          img: "/assets/resorts/grand-californian/mkjnsdfjdgdr32-624x351.webp",
        },
      ],
      images: [
        "/assets/resorts/grand-californian/disney-s-grand-californian.jpg",
        "/assets/resorts/grand-californian/1200x0.jpg",
        "/assets/resorts/grand-californian/1.png",
        "/assets/resorts/grand-californian/2.png",
      ],
    };
  },
};
</script>

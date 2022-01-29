<template>
  <div>
    <Header />
    <div class="main-page bg-custom-bg1 text-custom-blue4 pt-5 pb-12 text-xl">
      <!-- page title start-->
      <div class="text-center">
        <h1
          class="md:text-pTitle text-custom-primary font-body my-5 text-2xl font-normal uppercase"
        >
          Walt Disney World’s 50th Anniversary is here!
        </h1>
        <p class="text-2xl">
          <span>Posted on January 10, 2022 by</span> |
          <span
            ><img class="-mt-0.5 inline w-6" src="assets/usericon.png" alt="usericon" /> Lori
            webb</span
          >
          | <span @click="scroll" class="cursor-pointer">Leave a Comment</span>
        </p>
        <span class="bg-custom-blue2 my-1 inline-block rounded px-2 py-0.5 capitalize text-white"
          >Vacation Planning</span
        >
        <span class="bg-custom-blue2 m-1.5 inline-block rounded px-2 py-0.5 capitalize text-white"
          >Vacation Planning</span
        >
        <div class="space-x-3 space-y-1.5">
          <i
            class="fab fa-facebook-f hover:bg-custom-blue4 bg-custom-blue2 cursor-pointer rounded-full px-2.5 py-1.5 text-white"
          ></i
          ><i
            class="fab fa-twitter cursor-pointer rounded-full bg-blue-400 px-1.5 py-1.5 text-white hover:bg-blue-500"
          ></i
          ><i
            class="fab fa-linkedin-in hover:bg-custom-blue5 bg-custom-blue3 cursor-pointer rounded-full px-2 py-1.5 text-white"
          ></i>
        </div>
      </div>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu hidden w-1/6 lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="mt-6">
              <img
                class="w-full rounded md:h-80 2xl:h-96"
                src="assets/magical-celebration.jpg"
                alt="magical-celebration-img"
              />
              <p class="mt-3 text-2xl">
                Walt Disney World's 50th-anniversary celebration began on October 1st and will be
                Disney’s largest celebration yet! The festivities will last 18 months, making it the
                longest anniversary celebration in Disney history. The park icons (including Mickey
                and Minnie) are dressed up and ready with EARidescent touches. There's so much in
                store for the celebration. Here's a rundown of all the fun you'll experience when
                you visit during the 50th anniversary.
              </p>
            </div>
            <div class="mt-5 space-y-2">
              <div v-for="(blog, i) in blogs" :key="i">
                <h1 v-if="blog.heading.length > 0" class="text-custom-orange2 text-3xl uppercase">
                  {{ blog.heading }}
                </h1>
                <p v-if="blog.text.length > 0" class="text-2xl">{{ blog.text }}</p>
              </div>
            </div>
          </section>
          <section>
            <div
              class="bg-custom-lightcream border-custom-blue4 mx-auto mt-10 w-11/12 rounded border-2 p-3 text-xl shadow"
            >
              <img
                class="float-left h-32 w-32 rounded-full"
                src="assets/Lori-Picture.jpg"
                alt="user-image"
              />
              <p>Written by</p>
              <p class="text-custom-orange2 relative left-4 text-3xl">Lori Webb</p>
              <p class="relative left-2 text-gray-500">Business Owner</p>
              <p>
                As a former Disney Vacation Club cast member, Lori has assisted thousands of
                families over the years as they joined the Vacation Club. As co-owner of DVC Sales,
                Lori continues to spend her time helping both buyers and sellers of DVC memberships.
                "Living in Orlando has given our family the opportunity to visit the parks often.
                Now that our sons are older, we find that owning at our membership at Vero Beach is
                the perfect fit for our family and a great escape less than 2 hours from home!"
              </p>
            </div>
            <div class="mx-auto mt-10 w-10/12 text-2xl" id="comment">
              <p
                class="bg-custom-blue2 hover:bg-custom-blue4 w-full rounded py-1 text-center text-2xl text-white"
              >
                Leave A Comment
              </p>
              <p class="mt-10 mb-3 text-3xl">Got Something On Your Mind?</p>
              <p>Your email address will not be published. Required fields are marked *</p>
              <form>
                <div class="mt-10 grid grid-cols-12 gap-4">
                  <div class="col-span-12">
                    <p>Comment</p>
                    <textarea
                      class="bg-custom-lightcream border-custom-blue2 w-full border p-2"
                      rows="4"
                      required
                    >
                    </textarea>
                  </div>
                  <div class="col-span-6 mx-auto">
                    <p>Name *</p>
                    <input
                      class="bg-custom-lightcream border-custom-blue2 w-36 border px-2 md:w-52"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-span-6 mx-auto">
                    <p>Email *</p>
                    <input
                      class="bg-custom-lightcream border-custom-blue2 w-36 border px-2 md:w-52"
                      type="email"
                      required
                    />
                  </div>
                  <div class="col-span-12 text-center">
                    <button
                      type="submit"
                      class="bg-custom-blue2 hover:bg-custom-blue4 rounded px-4 py-0.5 text-white"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <!-- main content end -->
        </div>
        <div class="right-sidebar hidden w-1/6 lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../layout/header/Header";
export default {
  components: { Header },
  data() {
    return {
      blogs: [
        {
          heading: "HARMONIOUS",
          text: "This brand new spectacular is one of the largest shows ever produced by Disney  Parks. It will be visible around the World Showcase Lagoon at Epcot and intertwinesDisney music with giant floating screens, fountains, lasers, lighting, and fireworksfocusing on Disney stories that bring people together. Featured films in the showinclude The Lion King, Brave, Moana, Coco, Aladdin, and much more.",
        },
        {
          heading: "HARMONIOUS",
          text: "This brand new spectacular is one of the largest shows ever produced by Disney  Parks. It will be visible around the World Showcase Lagoon at Epcot and intertwinesDisney music with giant floating screens, fountains, lasers, lighting, and fireworksfocusing on Disney stories that bring people together. Featured films in the showinclude The Lion King, Brave, Moana, Coco, Aladdin, and much more.",
        },
        {
          heading: "HARMONIOUS",
          text: "",
        },
        {
          heading: "",
          text: "This brand new spectacular is one of the largest shows ever produced by Disney  Parks. It will be visible around the World Showcase Lagoon at Epcot and intertwinesDisney music with giant floating screens, fountains, lasers, lighting, and fireworksfocusing on Disney stories that bring people together. Featured films in the showinclude The Lion King, Brave, Moana, Coco, Aladdin, and much more.",
        },
        {
          heading: "",
          text: "This brand new spectacular is one of the largest shows ever produced by Disney  Parks. It will be visible around the World Showcase Lagoon at Epcot and intertwinesDisney music with giant floating screens, fountains, lasers, lighting, and fireworksfocusing on Disney stories that bring people together. Featured films in the showinclude The Lion King, Brave, Moana, Coco, Aladdin, and much more.",
        },
      ],
    };
  },
  methods: {
    scroll() {
      const element = document.getElementById("comment");
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

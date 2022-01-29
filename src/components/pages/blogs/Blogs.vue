<template>
  <div>
    <Header />
    <div class="main-page bg-custom-bg1 pt-5 pb-12 text-xl text-custom-blue4">
      <!-- page title start-->
      <h1
        class="my-5 text-center font-body text-2xl font-normal uppercase text-custom-primary md:text-pTitle"
      >
        DVC BLOG
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu hidden w-1/6 lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <!-- search and filters start -->
            <div class="grid grid-cols-12 gap-2 text-2xl md:gap-x-10">
              <div class="relative col-span-6 w-full bg-custom-lightcream md:col-span-4">
                <button
                  class="w-full border px-4 text-left shadow"
                  :class="showTopics ? 'border-custom-blue4' : ''"
                  @click="showTopics = !showTopics"
                >
                  Topics
                </button>
                <i
                  class="fas fa-caret-down pointer-events-none absolute right-5 top-0.5 float-right"
                ></i>
                <!-- dropdown start -->
                <ul
                  v-if="showTopics"
                  class="absolute left-full z-10 h-64 w-56 -translate-x-2/4 transform overflow-auto rounded border border-custom-blue1 bg-custom-lightcream px-4 pb-4 pt-1 shadow-xl sm:left-2/4 sm:w-full"
                >
                  <li>
                    <i
                      class="fas fa-times block cursor-pointer text-right"
                      @click="showTopics = false"
                    ></i>
                  </li>
                  <li class="w-full" v-for="(resort, i) in resorts" :key="i">
                    <label class="block"
                      ><input type="checkbox" class="float-left mr-3 h-5 w-5" />
                      <span class="relative -top-1 text-left">{{ resort }}</span></label
                    >
                  </li>
                </ul>
                <!-- dropdown end -->
              </div>
              <div class="col-span-6 w-full md:col-span-4">
                <input
                  class="h-full w-full bg-custom-lightcream px-4 shadow"
                  placeholder="Search"
                  type="text"
                />
              </div>
              <div class="col-span-12 mt-2 space-x-3 md:col-span-4 md:mt-0">
                <button class="w-28 rounded border border-custom-blue1 bg-custom-blue3 text-white">
                  Latest
                </button>
                <button
                  class="w-28 rounded border border-custom-blue1 hover:bg-custom-blue3 hover:text-white"
                >
                  Most Popular
                </button>
              </div>
            </div>
            <!-- search and filters end -->
          </section>
          <section class="md:pr-10">
            <div
              class="mt-5 grid w-full grid-cols-12 gap-x-1 rounded border bg-custom-lightcream p-3 shadow-md transition-all duration-500 hover:scale-105 hover:bg-white md:gap-x-10"
              v-for="(blog, i) in blogs"
              :key="i"
            >
              <div class="col-span-12 my-auto md:col-span-4">
                <router-link :to="blog.url">
                  <img class="h-44 w-full rounded 2xl:h-48" :src="blog.img_url" alt="blog-img" />
                </router-link>
              </div>
              <div class="relative col-span-12 text-2xl md:col-span-8">
                <p class="my-2 text-gray-400 md:my-0">
                  <span>{{ blog.date }}</span> |
                  <span
                    ><img
                      class="-mt-0.5 ml-3 inline w-6"
                      src="assets/usericon.png"
                      alt="usericon"
                    />
                    {{ blog.name }}</span
                  >
                </p>
                <div class="my-2 space-x-3 text-xl">
                  <span
                    v-for="(tag, i) in blog.tags"
                    :key="i"
                    class="rounded bg-custom-blue4 px-2 py-0.5 capitalize text-white"
                    >{{ tag }}</span
                  >
                </div>
                <router-link :to="blog.url" class="my-2 block text-3xl">
                  {{ blog.heading }}
                </router-link>
                <p class="text-xl md:pr-10" v-if="blog.discreption.length > 0">
                  {{ getDiscreptionLength(blog.discreption) }}
                  <router-link
                    v-if="blog.discreption.length > 131"
                    class="text-custom-blue1 hover:text-custom-blue3"
                    :to="blog.url"
                    >Read More</router-link
                  >
                </p>
                <span class="absolute right-0 bottom-0 space-x-2"
                  ><i class="fab fa-facebook-square cursor-pointer hover:text-custom-blue2"></i
                  ><i
                    class="fab fa-twitter-square cursor-pointer text-blue-400 hover:text-blue-500"
                  ></i
                  ><i
                    class="fab fa-linkedin cursor-pointer text-custom-blue2 hover:text-custom-blue3"
                  ></i
                ></span>
              </div>
            </div>
          </section>
          <!-- main content end -->
        </div>
        <div class="right-sidebar hidden w-1/6 lg:block">
          <div
            class="mx-3 mt-14 rounded-b-xl border border-custom-blue1 bg-blue-50 px-1 py-4 shadow"
          >
            <p class="border-b border-custom-blue3 px-2 pb-3 text-2xl font-bold">
              Most Popular Disney Vacation Club Blogs
            </p>
            <div
              class="border-b border-gray-300 px-2 py-4 hover:bg-white"
              v-for="(item, i) in 5"
              :key="i"
            >
              <!-- <p class="text-gray-500">Friday , Jan 31, 2020 | Lori Webb</p> -->
              <p class="cursor-pointer hover:text-custom-blue2">
                What about the Disney Perks? Part III: Perk Alternatives
              </p>
            </div>
          </div>
        </div>
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
          img_url: "assets/magical-celebration.jpg",
          date: "Monday, Jan 10, 2022",
          name: "Lori Webb",
          tags: ["vacation planing", "disney attractions"],
          heading: "Walt Disney World’s 50th Anniversary is here!",
          discreption:
            "Walt Disney World’s 50th-anniversary celebration began on October 1st and will be Disney’s largest celebration yet! The festivities.",
          url: "/animal-kingdom",
        },
        {
          img_url: "assets/106777_1642500666.jpg",
          date: "Monday, Jan 10, 2022",
          name: "Lori Webb",
          tags: ["vacation planing"],
          heading: "Walt Disney World’s 50th Anniversary is here!",
          discreption: "",
          url: "/animal-kingdom",
        },
        {
          img_url: "assets/760306_1642604982.jpg",
          date: "Monday, Jan 10, 2022",
          name: "Lori Webb",
          tags: ["vacation planing", "disney attractions"],
          heading: "Walt Disney World’s 50th Anniversary is here!",
          discreption:
            "Walt Disney World’s 50th-anniversary celebration began on October 1st and will be Disney’s largest celebration yet! The festivities.",
          url: "/animal-kingdom",
        },
        {
          img_url: "assets/36556_1642582057.png",
          date: "Monday, Jan 10, 2022",
          name: "Lori Webb",
          tags: ["disney attractions"],
          heading: "Walt Disney World’s 50th Anniversary is here!",
          discreption: "",
          url: "/animal-kingdom",
        },
      ],
      showTopics: false,
      resorts: [
        "ANIMAL KINGDOM",
        "AULANI",
        "BAY LAKE TOWER",
        "BEACH CLUB VILLAS",
        "BOARDWALK VILLAS",
        "BOULDER RIDGE",
        "COPPER CREEK",
        "GRAND CALIFORNIAN",
        "GRAND FLORIDIAN",
        "HILTON HEAD",
        "OLD KEY WEST",
        "POLYNESIAN",
        "SARATOGA SPRINGS",
        "RIVERA",
        "VERO BEACH",
        "INTERVAL RESORTS",
      ],
    };
  },
  methods: {
    getDiscreptionLength(text) {
      if (text.length < 131) {
        return text;
      } else {
        return text.substring(0, 131) + "... ";
      }
    },
  },
};
</script>

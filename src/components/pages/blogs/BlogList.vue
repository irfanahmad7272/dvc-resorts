<template>
  <div>
    <section class="text-custom-blue4 mx-96 mt-5">
      <!-- tabs menu start -->
      <div>
        <p class="text-2xl md:text-3xl 2xl:text-4xl">Blogs List</p>
        <ul class="border-custom-lightcream mt-8 inline-block cursor-pointer border-l-2 border-r-2">
          <!-- <li class=" inline-block border-t-2 px-7 py-2">
            Approved Blogs <span class="text-custom-blue2">(50)</span>
          </li> -->
          <li
            v-for="(menu, i) in blog_list_menu"
            :key="i"
            class="inline-block border-t-2 border-transparent px-2 py-2 xl:px-7"
            :class="
              menu.name === active_tab
                ? 'bg-custom-darkcream border-custom-lightblue'
                : 'bg-custom-lightcream'
            "
            @click="active_tab = menu.name"
          >
            {{ menu.name }} <span class="text-custom-blue2">({{ menu.count }})</span>
          </li>
        </ul>
      </div>
      <!-- tabs menu end -->
      <div v-if="active_tab === 'All Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in all_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in all_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Waiting Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in waiting_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in waiting_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Approved Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in approved_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in approved_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Declined Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in declined_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in declined_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Draft'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in draft_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in draft"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Deleted Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in deleted_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in deleted_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
      <div v-if="active_tab === 'Live Blogs'">
        <ul class="mt-8 inline-block space-x-2">
          <!-- <li class="bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 text-white">
            Admin
          </li> -->
          <li
            v-for="(item, i) in live_blogs_writers"
            :key="i"
            class="bg-custom-lightcream hover:bg-custom-blue1 inline-block cursor-pointer rounded px-5 py-0.5 hover:text-white"
          >
            {{ item }}
          </li>
        </ul>
        <div class="mt-5 space-x-2 border-b border-gray-300 pb-3 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <div>
          <!-- table start -->
          <table class="mt-5 w-full">
            <thead>
              <tr class="text-left">
                <th class="px-2">
                  Sr <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Author <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Blog Title
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th>
                  Image <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Topic <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Blog Counter
                  <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
                <th class="text-center">
                  Action <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                v-for="(blog, i) in live_blogs"
                :key="i"
              >
                <td class="px-2">{{ blog.sr }}</td>
                <td>
                  <p>{{ blog.name }}</p>
                  <span>Frontend Credit:</span>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                      <option>Lori Webb</option>
                      <option>Mark Webb</option>
                    </select></span
                  >
                </td>
                <td>
                  <span v-if="blog.title.length <= 22">{{ blog.title }}</span>
                  <span v-else>{{ blog.title.substring(0, 22) + "... " }}</span>
                </td>
                <td>
                  <img v-if="blog.img.length > 1" class="w-20" :src="blog.img" alt="writer img" />
                  <p v-else>No Image Selected</p>
                </td>
                <td class="text-center">
                  <span class="bg-custom-blue2 rounded px-3 py-0.5 text-white">{{
                    blog.topic
                  }}</span>
                </td>
                <td class="text-center">{{ blog.blog_counter }}</td>
                <td class="space-x-2 text-center">
                  <button class="bg-custom-blue2 rounded px-2 text-white">View</button
                  ><button class="bg-custom-green1 rounded px-2 text-white">
                    <i class="fas fa-cog"></i>
                  </button>
                  <span>
                    <select class="mx-2 bg-transparent">
                      <option>Approved</option>
                      <option>Live blog</option>
                    </select></span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->
          <div class="my-8">
            <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
            <span class="float-right space-x-3 rounded border border-gray-300 px-3">
              <button class="w-14">Previous</button>
              <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
                >1</span
              >
              <button class="w-14">Next</button>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active_tab: "Approved Blogs",
      all_blogs_writers: [
        "Admin",
        "Mark Webb",
        "Lori Webb",
        "Mark Webb",
        "Lori Webb",
        "Mark Webb",
        "Lori Webb",
      ],
      all_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 5,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 6,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 7,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 8,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 9,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      waiting_blogs_writers: ["Lori Webb"],
      waiting_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      approved_blogs_writers: ["Admin", "Mark Webb", "Lori Webb", "Mark Webb", "Lori Webb"],
      approved_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 5,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 6,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 7,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 8,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 9,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      declined_blogs_writers: ["Admin", "test 1", "test 2"],
      declined_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      draft_blogs_writers: ["Admin", "Mark Webb", "Lori Webb"],
      draft: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 5,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 6,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 7,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 8,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 9,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      deleted_blogs_writers: ["Admin", "Mark Webb 1", "Lori Webb", "Mark Webb 2", "Lori Webb"],
      deleted_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],
      live_blogs_writers: ["Admin"],
      live_blogs: [
        {
          sr: 1,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 2,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 3,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 4,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 5,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 6,
          name: "Admin",
          title: "Check out what's new id is",
          img: "/assets/36556_1642582057.png",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 7,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/106777_1642500666.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 8,
          name: "Admin",
          title: "Check out whats new",
          img: "/assets/760306_1642604982.jpg",
          topic: "2",
          blog_counter: "10",
        },
        {
          sr: 9,
          name: "Admin",
          title: "Check out whats new",
          img: "",
          topic: "2",
          blog_counter: "10",
        },
      ],

      blog_list_menu: [
        { name: "All Blogs", count: 50 },
        { name: "Waiting Blogs", count: 40 },
        { name: "Approved Blogs", count: 50 },
        { name: "Declined Blogs", count: 20 },
        { name: "Draft", count: 10 },
        { name: "Deleted Blogs", count: 39 },
        { name: "Live Blogs", count: 34 },
      ],
    };
  },
};
</script>

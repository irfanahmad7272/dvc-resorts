<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        ANNUAL DUES
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="text-center text-2xl">
              <button
                class="mx-2 px-4 py-0.5 rounded bg-custom-blue3 text-white"
              >
                2021
              </button>
              <router-link to="/retailprice">
                <button
                  class="mx-2 px-4 py-0.5 rounded bg-custom-darkcream border border-custom-blue5 hover:bg-custom-lightcream"
                >
                  Historical Dues
                </button>
              </router-link>
            </div>
          </section>
          <section>
            <!-- table start -->
            <div
              class="h-80 md:w-10/12 md:h-35rem mt-5 overflow-auto border border-custom-blue4 mx-auto"
            >
              <table class="w-full text-xl md:text-2xl">
                <thead class="bg-custom-blue3 text-white h-10">
                  <tr class="text-left">
                    <th class="px-3 font-normal">Resorts</th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2020 ? 'hidden' : ''"
                    >
                      2020
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2021 ? 'hidden' : ''"
                    >
                      2021
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2022 ? 'hidden' : ''"
                    >
                      2022
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2023 ? 'hidden' : ''"
                    >
                      2023
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2024 ? 'hidden' : ''"
                    >
                      2024
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.dues_2025 ? 'hidden' : ''"
                    >
                      2025
                    </th>

                    <th
                      :class="!visible.expiration_year ? 'hidden' : ''"
                      class="text-center font-normal"
                    >
                      EXPIRATION YEAR
                    </th>
                    <th
                      :class="!visible.year_left ? 'hidden' : ''"
                      class="text-center font-normal"
                    >
                      YEAR'S LEFT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                  >
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.dues_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.dues_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.dues_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.dues_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.dues_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.dues_2025 ? 'hidden' : ''">6.30</td>
                    <td
                      class="text-center"
                      :class="!visible.expiration_year ? 'hidden' : ''"
                    >
                      2057
                    </td>
                    <td
                      class="text-center"
                      :class="!visible.year_left ? 'hidden' : ''"
                    >
                      35
                    </td>
                  </tr>
                  <tr
                    class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                  >
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.dues_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.dues_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.dues_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.dues_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.dues_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.dues_2025 ? 'hidden' : ''">6.30</td>
                    <td
                      class="text-center"
                      :class="!visible.expiration_year ? 'hidden' : ''"
                    >
                      2057
                    </td>
                    <td
                      class="text-center"
                      :class="!visible.year_left ? 'hidden' : ''"
                    >
                      35
                    </td>
                  </tr>
                  <tr
                    class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                  >
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.dues_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.dues_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.dues_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.dues_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.dues_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.dues_2025 ? 'hidden' : ''">6.30</td>
                    <td
                      class="text-center"
                      :class="!visible.expiration_year ? 'hidden' : ''"
                    >
                      2057
                    </td>
                    <td
                      class="text-center"
                      :class="!visible.year_left ? 'hidden' : ''"
                    >
                      35
                    </td>
                  </tr>
                  <tr
                    class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                  >
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.dues_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.dues_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.dues_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.dues_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.dues_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.dues_2025 ? 'hidden' : ''">6.30</td>
                    <td
                      class="text-center"
                      :class="!visible.expiration_year ? 'hidden' : ''"
                    >
                      2057
                    </td>
                    <td
                      class="text-center"
                      :class="!visible.year_left ? 'hidden' : ''"
                    >
                      35
                    </td>
                  </tr>
                  <tr
                    class="even:bg-custom-lightcream hover:bg-custom-lightergreen"
                  >
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.dues_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.dues_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.dues_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.dues_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.dues_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.dues_2025 ? 'hidden' : ''">6.30</td>
                    <td
                      class="text-center"
                      :class="!visible.expiration_year ? 'hidden' : ''"
                    >
                      2057
                    </td>
                    <td
                      class="text-center"
                      :class="!visible.year_left ? 'hidden' : ''"
                    >
                      35
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- table end -->
            <div class="text-center">
              <p class="my-4">Show/Hide Columns</p>
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2020"
                />2020</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2021"
                />2021</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2022"
                />2022</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2023"
                />2023</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2024"
                />2024</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.dues_2025"
                />2025</label
              >

              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.expiration_year"
                />EXP. YEAR</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.year_left"
                />YEAR'S LEFT</label
              >
            </div>
          </section>
          <!-- main content end -->
        </div>
        <div class="right-sidebar w-1/6 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../layout/header/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      visible: {
        dues_2020: false,
        dues_2021: false,
        dues_2022: false,
        dues_2023: false,
        dues_2024: false,
        dues_2025: false,
        expiration_year: true,
        year_left: true,
      },
    };
  },
};
</script>

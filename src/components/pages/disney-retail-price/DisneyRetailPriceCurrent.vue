<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        SELL BACK TO DISNEY, SELL TO ANOTHER BROKER, OR SELL WITH DVC SALES?
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
              <router-link to="/disney-historical-retailprice">
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
                <thead
                  class="bg-custom-blue3 text-white h-10 uppercase text-sm md:text-2xl"
                >
                  <tr class="text-left">
                    <th class="px-3 font-normal">Resort Name</th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2020 ? 'hidden' : ''"
                    >
                      Retail 2020
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2021 ? 'hidden' : ''"
                    >
                      Retail 2021
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2022 ? 'hidden' : ''"
                    >
                      Retail 2022
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2023 ? 'hidden' : ''"
                    >
                      Retail 2023
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2024 ? 'hidden' : ''"
                    >
                      Retail 2024
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.retail_2025 ? 'hidden' : ''"
                    >
                      Retail 2025
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.expiraion_year ? 'hidden' : ''"
                    >
                      Expiration Year
                    </th>
                    <th
                      class="font-normal"
                      :class="!visible.years_left ? 'hidden' : ''"
                    >
                      Years Left
                    </th>
                    <th
                      :class="!visible.annual_dues ? 'hidden' : ''"
                      class="text-center font-normal"
                    >
                      Annual Dues
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even:bg-custom-lightcream">
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.retail_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.retail_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.retail_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.retail_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.retail_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.retail_2025 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.expiraion_year ? 'hidden' : ''">
                      6.30
                    </td>
                    <td :class="!visible.years_left ? 'hidden' : ''">6.85</td>
                    <td
                      class="text-center"
                      :class="!visible.annual_dues ? 'hidden' : ''"
                    >
                      2057
                    </td>
                  </tr>
                  <tr class="even:bg-custom-lightcream">
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.retail_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.retail_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.retail_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.retail_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.retail_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.retail_2025 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.expiraion_year ? 'hidden' : ''">
                      6.30
                    </td>
                    <td :class="!visible.years_left ? 'hidden' : ''">6.85</td>
                    <td
                      class="text-center"
                      :class="!visible.annual_dues ? 'hidden' : ''"
                    >
                      2057
                    </td>
                  </tr>
                  <tr class="even:bg-custom-lightcream">
                    <td class="px-3">ANIMAL KINGDOM</td>
                    <td :class="!visible.retail_2020 ? 'hidden' : ''">6.30</td>
                    <td :class="!visible.retail_2021 ? 'hidden' : ''">6.42</td>
                    <td :class="!visible.retail_2022 ? 'hidden' : ''">6.50</td>
                    <td :class="!visible.retail_2023 ? 'hidden' : ''">6.20</td>
                    <td :class="!visible.retail_2024 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.retail_2025 ? 'hidden' : ''">6.35</td>
                    <td :class="!visible.expiraion_year ? 'hidden' : ''">
                      6.30
                    </td>
                    <td :class="!visible.years_left ? 'hidden' : ''">6.85</td>
                    <td
                      class="text-center"
                      :class="!visible.annual_dues ? 'hidden' : ''"
                    >
                      2057
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
                  v-model="visible.retail_2020"
                />Retail 2020</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.retail_2021"
                />Retail 2021</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.retail_2022"
                />Retail 2022</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.retail_2023"
                />Retail 2023</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.retail_2024"
                />Retail 2024</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.retail_2025"
                />Retail 2025</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.expiraion_year"
                />EXP . YEAR</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.years_left"
                />YEAR'S LEFT</label
              >
              <label class="text-2xl"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="visible.annual_dues"
                />ANNUAL DUES</label
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
import Header from "../../layout/header/Header";
export default {
  components: { Header },
  data() {
    return {
      visible: {
        retail_2020: false,
        retail_2021: false,
        retail_2022: false,
        retail_2023: false,
        retail_2024: true,
        retail_2025: false,
        expiraion_year: false,
        years_left: true,
        annual_dues: false,
      },
    };
  },
};
</script>

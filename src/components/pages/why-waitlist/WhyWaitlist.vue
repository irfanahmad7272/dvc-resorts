<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        VIEW BUYERS WAIT LIST FOR YOUR RESORT
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="text-2xl">
              <p>
                We are grateful to say as of January of this year we have over
                1,000 visitors to our site each day that identify themselves as
                buyers. This number is growing every month.
              </p>
              <p>
                We currently have
                <span class="text-custom-orange2">155</span> families that have
                looked on our Listing Page and not been able to find the perfect
                membership for their family. To help them we have created a
                unique Special Request tool.
              </p>
              <p>
                How this works. If you created a new listing today. For each
                person (if any) that is on the waitlist for exactly what you
                have just listed we simultaneous send each person an email with
                a link to your page on our website.
              </p>
              <p>
                This does not guarantee one of those people will be the family
                to purchase your membership, or your membership will even sell
                that day. We sell 80% of our inventory within two weeks. We
                still have hundreds of visitors each day whos needs are not as
                specific.
              </p>
              <p>
                There are several factors in completing this sale. Things like
                how many points available this year and next year, the number of
                points on the contract and of course your price. The seller is
                always in complete control of what price you place on your
                contract. At any time you can adjust your price up or down or
                even remove the listing if you change your mind about selling.
                We are here to guide you as needed.
              </p>
              <p>
                We have a tool on our site to give you an idea of the value of
                your membership. We have over 25 years of selling DVC membership
                directly for Disney. We are a DVC only resale company. We want
                to find the right family for your contract. Complete the form at
                the bottom of the page to start the process of listing your
                membership for sale.
              </p>
            </div>
          </section>
          <section>
            <div class="mx-auto py-4 text-2xl">
              <p class="text-custom-orange2 mb-4">
                Enter your resort Name, Number of Points and your Use Year and
                you can see how many people we have waiting for a membership
                like yours.
              </p>
              <div class="w-full relative text-center">
                <button
                  v-for="(resort, i) in resorts"
                  :key="i"
                  class="w-36 md:w-40 xl:w-48 2xl:w-64 h-9 m-0.5 border border-custom-blue2 hover:bg-custom-lightcream text-custom-blue5 rounded text-xl"
                  :class="
                    selected_resorts.includes(resort)
                      ? 'bg-custom-blue2 !text-white hover:bg-custom-blue3'
                      : ''
                  "
                  @click="selectResort(resort)"
                >
                  {{ resort }}
                </button>
              </div>
              <p class="text-center my-8">
                THE NUMBERS OF BUYERS THAT HAVE CREATED A SPECIAL REQUEST FOR
                THIS NUMBER OF POINTS
              </p>
              <div class="mt-16">
                <vue-slider :tooltip="'always'"></vue-slider>
                <div class="my-5">
                  <highcharts :options="chartOptions"></highcharts>
                </div>
                <div class="text-center">
                  <button
                    class="bg-custom-blue2 text-white py-2 px-4 rounded hover:bg-custom-blue3"
                  >
                    LIST MY MEMBERSHIP
                  </button>
                </div>
              </div>
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
      selected_resorts: [],
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
  computed: {
    chartOptions() {
      return {
        chart: {
          backgroundColor: "#f7f2e0",
          type: "column",
        },
        tooltip: { enabled: false },
        title: {
          text: "ANIMAL KINGDOM",
        },
        xAxis: {
          categories: [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 450],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: null,
          },
        },
        legend: { enabled: false },

        plotOptions: {
          series: {
            dataLabels: { enabled: true, outside: true },
          },
          column: {
            borderWidth: 0,
            color: "#23527c",
          },
        },
        series: [
          {
            data: [
              42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
              51.1,
            ],
          },
        ],
      };
    },
  },
  methods: {
    selectResort(resort) {
      if (!this.selected_resorts.includes(resort)) {
        this.selected_resorts.push(resort);
        console.log(this.selected_resorts);
      } else if (this.selected_resorts.includes(resort)) {
        let itemIndex = this.selected_resorts.indexOf(resort);
        this.selected_resorts.splice(itemIndex, 1);
        console.log(this.selected_resorts);
      }
    },
  },
};
</script>

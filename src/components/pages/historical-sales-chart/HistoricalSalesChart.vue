<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        HISTORICAL SALES CHART
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="w-10/12 grid grid-cols-2 sm:grid-cols-4 gap-1 mx-auto">
              <button
                v-for="(resort, i) in resorts"
                :key="i"
                class="w-full h-9 border border-custom-blue2 hover:bg-custom-lightcream text-custom-blue5 rounded text-xl"
                :class="
                  resort === active_resort
                    ? 'bg-custom-blue2 !text-white hover:bg-custom-blue3'
                    : ''
                "
                @click="active_resort = resort"
              >
                {{ resort }}
              </button>
            </div>
          </section>
          <section>
            <!-- chart start -->
            <div class="mt-10 w-11/12 mx-auto relative grid grid-cols-12 gap-x-4 md:gap-x-10">
              <div class="col-span-12 sm:col-span-9">
                <highcharts :options="chartOptions"></highcharts>
                <div class="flex flex-wrap justify-center">
                  <span class="inline-block bg-custom-blue4 w-10 h-6 rounded"></span>
                  <span class="px-3">Pending ROFR Decesion</span>
                  <span class="inline-block bg-red-700 w-10 h-6 rounded"></span>
                  <span class="px-3">Disney Bought</span>
                  <span class="inline-block bg-green-600 w-10 h-6 rounded"></span>
                  <span class="px-3">30-90 Days</span>
                  <span class="inline-block bg-green-400 w-10 h-6 rounded"></span>
                  <span class="px-3">91+ Days</span>
                  <div class="ml-6">
                    <i
                      class="fas fa-caret-left text-5xl -mt-2 cursor-pointer text-custom-blue2 hover:text-custom-blue4"
                    ></i
                    ><span class="relative -top-2 px-2">6 Months</span
                    ><i
                      class="fas fa-caret-right text-5xl -mt-2 cursor-pointer text-custom-blue2 hover:text-custom-blue4"
                    ></i>
                  </div>
                </div>
                <!-- slider start -->
                <div class="mt-20">
                  <vue-slider v-model="value_2" :tooltip="'always'"></vue-slider>
                </div>
                <!-- slider end -->
              </div>
              <div class="col-span-12 sm:col-span-3">
                <div
                  class="border border-custom-blue2 w-full text-center md:text-2xl py-2 space-y-3 bg-custom-lightyellow shadow rounded"
                  v-if="chart_table_visible"
                >
                  <p class="text-2xl md:text-3xl mb-5">Not Buying</p>
                  <span>AK474 </span> <span> 110 Point</span>
                  <p>$140 PER POINTS</p>
                  <p>25% Retail Price</p>
                  <p>Available Points</p>
                  <div class="grid grid-cols-3">
                    <div>
                      <p>2021</p>
                      <p>110</p>
                    </div>
                    <div>
                      <p>2022</p>
                      <p>110</p>
                    </div>
                    <div>
                      <p>2023</p>
                      <p>110</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- chart end -->
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
      value_2: [20, 50],
      active_resort: "ANIMAL KINGDOM",
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
      chart_table_visible: false,
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "bubble",
          zoomType: "xy",
          backgroundColor: "#f7f2e0",
        },
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        title: {
          text: null,
        },
        yAxis: {
          title: {
            text: "Price Per Points",
          },
          labels: {
            formatter: function () {
              return "$" + this.axis.defaultLabelFormatter.call(this);
            },
          },
        },
        xAxis: {
          opposite: true,
        },
        plotOptions: {
          bubble: {
            maxSize: "15%",
          },
          series: {
            point: {
              events: {
                mouseOut: null,
                mouseOver: function () {
                  console.log(this.options);
                },
              },
            },
            pointWidth: 1,
            dataLabels: {
              enabled: true,
              useHTML: true,
              padding: 10,
              formatter: function () {
                return `
                <div>
                    ${this.point.x}
                </div>
              `;
              },
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        series: [
          {
            data: [
              {
                x: 150,
                y: 50,
                color: "red",
                name: "hello",
              },
              {
                x: 120,
                y: 20,
                color: "green",
                name: "hello",
              },
              {
                x: 190,
                y: 40,
                color: "blue",
                name: "hello",
              },
              {
                x: 100,
                y: 80,
                color: "orange",
                name: "hello",
              },
            ],
          },
        ],
      };
    },
  },
  created() {
    this.chartOptions.plotOptions.series.point.events.mouseOver = (event) => {
      console.log(event.target.options);
      this.chart_table_visible = true;
    };
    this.chartOptions.plotOptions.series.point.events.mouseOut = () => {
      // console.log(event.target.options);
      this.chart_table_visible = false;
    };
  },
};
</script>

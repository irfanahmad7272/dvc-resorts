<template>
  <div>
    <Header />
    <div class="main-page bg-custom-bg1 pt-5 pb-12 text-xl text-custom-blue4">
      <!-- page title start-->
      <h1
        class="my-5 text-center font-body text-2xl font-normal uppercase text-custom-primary md:text-pTitle"
      >
        HISTORICAL SALES CHART
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu hidden w-1/6 lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="mx-auto grid w-10/12 grid-cols-2 gap-1 sm:grid-cols-4">
              <button
                v-for="(resort, i) in resorts"
                :key="i"
                class="h-9 w-full rounded border border-custom-blue2 text-xl text-custom-blue5 hover:bg-custom-lightcream"
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
            <div class="relative mx-auto mt-10 grid w-11/12 grid-cols-12 gap-x-4 md:gap-x-10">
              <div class="col-span-12 sm:col-span-9">
                <highcharts :options="chartOptions"></highcharts>
                <div class="flex flex-wrap justify-center">
                  <span class="inline-block h-6 w-10 rounded bg-custom-blue4"></span>
                  <span class="px-3">Pending ROFR Decesion</span>
                  <span class="inline-block h-6 w-10 rounded bg-red-700"></span>
                  <span class="px-3">Disney Bought</span>
                  <span class="inline-block h-6 w-10 rounded bg-green-600"></span>
                  <span class="px-3">30-90 Days</span>
                  <span class="inline-block h-6 w-10 rounded bg-green-400"></span>
                  <span class="px-3">91+ Days</span>
                  <div class="ml-6">
                    <i
                      class="fas fa-caret-left -mt-2 cursor-pointer text-5xl text-custom-blue2 hover:text-custom-blue4"
                    ></i
                    ><span class="relative -top-2 px-2">6 Months</span
                    ><i
                      class="fas fa-caret-right -mt-2 cursor-pointer text-5xl text-custom-blue2 hover:text-custom-blue4"
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
                  class="w-full space-y-3 rounded border border-custom-blue2 bg-custom-lightyellow py-2 text-center shadow md:text-2xl"
                  v-if="chart_table_visible"
                >
                  <p class="mb-5 text-2xl md:text-3xl">Not Buying</p>
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
          column: {
            borderWidth: 0,
            color: "#23527c",
          },
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
              outside: true,
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

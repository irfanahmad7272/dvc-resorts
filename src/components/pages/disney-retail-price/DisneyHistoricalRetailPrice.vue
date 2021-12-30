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
              <router-link to="/disney-retailprice-current">
                <button
                  class="mx-2 px-4 py-0.5 rounded bg-custom-darkcream border border-custom-blue5 hover:bg-custom-lightcream"
                >
                  2021
                </button>
              </router-link>
              <button
                class="mx-2 px-4 py-0.5 rounded bg-custom-blue3 text-white"
              >
                Historical Dues
              </button>
            </div>
          </section>
          <section>
            <div class="mt-5 text-center">
              <button
                v-for="item in resorts"
                @click="selectResort(item)"
                :key="item.id"
                class="mx-2 my-2 w-32 h-10 border border-custom-blue2 rounded-md"
                :class="
                  selectedResorts.findIndex((x) => x.id == item.id) !== -1
                    ? 'bg-custom-blue2 text-white'
                    : 'text-custom-blue4 bg-custom-lightcream'
                "
              >
                {{ item.name }}
              </button>
              <button
                @click="selectedResorts = []"
                class="mx-2 my-2 w-32 h-10 border border-custom-blue2 rounded-md bg-custom-lightcream text-custom-blue2"
              >
                Reset
              </button>
            </div>
          </section>
          <section>
            <!-- chart start -->
            <div class="mt-10 w-11/12 mx-auto">
              <highcharts :options="chartOptions"></highcharts>
            </div>
            <!-- chart end -->
            <!-- slider start -->
            <div class="mt-16 annual-dues-historical-slider">
              <vue-slider v-model="value_2" :tooltip="'always'"></vue-slider>
            </div>
            <!-- slider end -->
          </section>
          <section>
            <div
              class="mt-14 w-11/12 mx-auto overflow-auto md:overflow-x-hidden"
            >
              <table class="w-full text-xl md:text-2xl">
                <thead>
                  <tr class="bg-white text-center">
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                  </tr>
                  <tr class="text-center border-2">
                    <td class="bg-white">Year</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">OK</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">VB</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">HH</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">BW</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">BR</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">BC</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">SS</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">AK</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">BL</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">GC</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">AU</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">GF</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">PY</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">CC</td>
                    <td class="even:bg-blue-200 odd:bg-blue-300">RR</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center border-2 even:bg-custom-lightcream">
                    <td class="bg-white">2020</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                  </tr>
                  <tr class="text-center border-2 even:bg-custom-lightcream">
                    <td class="bg-white">2019</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2"></td>
                  </tr>
                  <tr class="text-center border-2 even:bg-custom-lightcream">
                    <td class="bg-white">2019</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2">$165</td>
                    <td class="border-2"></td>
                    <td class="border-2"></td>
                  </tr>
                </tbody>
              </table>
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
      value_2: [20, 50],
      resorts: [
        {
          id: 1,
          name: "Old Key West",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 2,
          name: "Vero Beach",
          data: [
            [1991, 9.51],
            [1992, 10.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 13.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 31.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 13.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 3,
          name: "Hilton Head Island",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 4,
          name: "Boardwalk",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 5,
          name: "Boulder Ridge",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 6,
          name: "Beach Club",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 7,
          name: "Saratoga Springs",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 8,
          name: "Animal Kingdom",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 9,
          name: "Bay Lake Towers",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 10,
          name: "Grand CA",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 11,
          name: "Aulani",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 12,
          name: "Grand FL",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 13,
          name: "Polynesian",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 3.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 14,
          name: "Cooper Creek",
          data: [
            [1991, 2.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 2.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 8.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 10.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 2.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
        {
          id: 15,
          name: "Riviera",
          data: [
            [1991, 1.51],
            [1992, 2.56],
            [1993, 2.63],
            [1994, 3.7],
            [1995, 2.84],
            [1996, 2.99],
            [1997, 3.14],
            [1998, 3.17],
            [1999, 3.16],
            [2000, 5.16],
            [2001, 3.13],
            [2002, 3.22],
            [2003, 3.49],
            [2004, 3.68],
            [2005, 3.86],
            [2006, 4.24],
            [2007, 4.4],
            [2008, 4.56],
            [2009, 4.73],
            [2010, 4.87],
            [2011, 4.98],
            [2012, 5.2],
            [2013, 5.34],
            [2014, 5.54],
            [2015, 5.84],
            [2016, 6.01],
            [2017, 6.41],
            [2018, 6.72],
            [2019, 7.22],
            [2020, 7.22],
            [2021, 7.22],
          ],
        },
      ],
      selectedResorts: [],
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          backgroundColor: "#f7f2e0",
          borderColor: "#203864",
          borderWidth: 2,
          type: "line",
        },
        title: {
          text: "HISTORICAL DUES PER POINT",
        },

        yAxis: {
          opposite: true,
          title: false,
          labels: {
            format: "${value:.2f}",
          },
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2012 to 2021",
          },
        },
        tooltip: {
          crosshairs: true,
          valuePrefix: "$",
        },
        legend: {},

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },
        series: this.selectedResorts,
      };
    },
  },
  methods: {
    selectResort(resort) {
      let index = this.selectedResorts.findIndex((x) => x.id == resort.id);
      if (index === -1) {
        this.selectedResorts.push(resort);
      } else {
        this.selectedResorts.splice(index, 1);
      }
      console.log(this.selectedResorts);
    },
  },
};
</script>

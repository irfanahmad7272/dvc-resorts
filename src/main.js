import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
// import exportingInit from 'highcharts/modules/exporting'
import highchartsMore from "highcharts/highcharts-more";
import seriesLable from "highcharts/modules/series-label"
// exportingInit(Highcharts)
seriesLable(Highcharts)
highchartsMore(Highcharts)
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
Vue.use(HighchartsVue)
Vue.component('VueSlider', VueSlider)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

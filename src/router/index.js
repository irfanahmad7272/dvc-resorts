import Vue from 'vue'
import VueRouter from 'vue-router'
import SellingMenuComparison from '../components/pages/selling-menu-comparison/SellingMenuComparison'
import AnnualDuesCurrent from '../components/pages/annual-dues/AnnualDuesCurrent'
import AnnualDuesHistoricalRetailPrice from '../components/pages/annual-dues/AnnualDuesHistoricalRetailPrice'
import DisneyRetailPriceCurrent from '../components/pages/disney-retail-price/DisneyRetailPriceCurrent'
import DisneyHistoricalRetailPrice from '../components/pages/disney-retail-price/DisneyHistoricalRetailPrice'
import ComparePrices from '../components/pages/compare-prices/ComparePrices'
import CompareBrokers from '../components/pages/compare-brokers/CompareBrokers'
// resorts start
import AnimalKingdom from '../components/pages/resorts/animal-kingdom/AnimalKingdom'
import Aulani from '../components/pages/resorts/aulani/Aulani'
import BayLakeTower from '../components/pages/resorts/bay-lake-tower/BayLakeTower'
import BeachClubVillas from '../components/pages/resorts/beach-club-villas/BeachClubVillas'
import BoardwalkVillas from '../components/pages/resorts/boardwalk-villas/BoardwalkVillas'
import BoulderRidge from '../components/pages/resorts/wl-boulder-ridge/BoulderRidge'
import CopperCreek from '../components/pages/resorts/wl-copper-creek/CopperCreek'
import GrandCalifornian from '../components/pages/resorts/grand-californian/GrandCalifornian'
import GrandFloridian from '../components/pages/resorts/grand-floridian/GrandFloridian'
import HiltonHead from '../components/pages/resorts/hilton-head/HiltonHead'
import OldKeyWest from '../components/pages/resorts/old-key-west/OldKeyWest'
import Polynesian from '../components/pages/resorts/polynesian/Polynesian'
import SaratogaSprings from '../components/pages/resorts/saratoga-springs/SaratogaSprings'
import Riviera from '../components/pages/resorts/riviera/Riviera'
import VeroBeach from '../components/pages/resorts/vero-beach/VeroBeach'
import IntervalResorts from '../components/pages/resorts/interval-resorts/IntervalResorts'
// resorts end
import Firpta from '../components/pages/firpta/Firpta'
import WhyWaitlist from '../components/pages/why-waitlist/WhyWaitlist'
import SalesDifference from '../components/pages/dvc-sales-difference/SalesDifference'
import HistoricalSalesChart from '../components/pages/historical-sales-chart/HistoricalSalesChart'
import Financing from '../components/pages/available-financing/Financing'
import Blogs from '../components/pages/blogs/Blogs'
import BlogDetail from '../components/pages/blogs/BlogDetail'
import BlogList from '../components/pages/blogs/BlogList'
import WriterInformation from '../components/pages/blogs/WriterInformation'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Selling Menu Comparison',
    component: SellingMenuComparison,
  },
  {
    path: '/annual-dues-current',
    name: 'Annual Dues Current',
    component: AnnualDuesCurrent,
  },
  {
    path: '/retailprice',
    name: 'Retail Price',
    component: AnnualDuesHistoricalRetailPrice,
  },
  {
    path: '/disney-retailprice-current',
    name: 'Retail Price current',
    component: DisneyRetailPriceCurrent,
  },
  {
    path: '/disney-historical-retailprice',
    name: 'Historical Retail Price',
    component: DisneyHistoricalRetailPrice,
  },
  {
    path: '/compare-prices',
    name: 'Compare Prices',
    component: ComparePrices,
  },
  // resorts start
  {
    path: '/animal-kingdom',
    name: 'AnimalKingdom',
    component: AnimalKingdom,
  },
  {
    path: '/aulani',
    name: 'Aulani',
    component: Aulani,
  },
  {
    path: '/bay-lake-tower',
    name: 'Bay Lake Tower',
    component: BayLakeTower,
  },
  {
    path: '/beach-club-villas',
    name: 'Beach Club Villas',
    component: BeachClubVillas,
  },
  {
    path: '/boardwalk-villas',
    name: 'Boardwalk Villas',
    component: BoardwalkVillas,
  },
{
    path: '/boulder-ridge',
    name: 'Boulder Ridge',
    component: BoulderRidge,
  },
  {
    path: '/copper-creek',
    name: 'Copper Creek',
    component:CopperCreek,
  },
  {
    path: '/grand-californian',
    name: 'Grand Californian',
    component: GrandCalifornian,
  },
  {
    path: '/grand-floridian',
    name: 'Grand Floridian',
    component: GrandFloridian,
  },
  {
    path: '/hilton-head',
    name: 'Hilton Head',
    component: HiltonHead,
  },
  {
    path: '/old-key-west',
    name: 'Old Key West',
    component: OldKeyWest,
  },
  {
    path: '/polynesian',
    name: 'Polynesian',
    component: Polynesian,
  },
  {
    path: '/saratoga-springs',
    name: 'Saratoga springs',
    component: SaratogaSprings,
  },
  {
    path: '/riviera',
    name: 'Riviera',
    component: Riviera,
  },
  {
    path: '/vero-beach',
    name: 'Vera Beach',
    component: VeroBeach,
  },
  {
    path: '/interval-resorts',
    name: 'Interval Resorts',
    component: IntervalResorts,
  },
  // resorts end
  {
    path: '/compare-brokers',
    name: 'Compare Brokers',
    component: CompareBrokers,
  },
  {
    path: '/firpta',
    name: 'Firpta',
    component: Firpta,
  },
  {
    path: '/why-waitlist',
    name: 'Why we have a Waitlist',
    component: WhyWaitlist,
  },
  {
    path: '/sales-difference',
    name: 'Dvc Sales Difference',
    component: SalesDifference,
  },
  {
    path: '/historical-sales-chart',
    name: 'Historical Sales Chart',
    component: HistoricalSalesChart,
  },
  {
    path: '/financing',
    name: 'Financing',
    component: Financing,
  },
   {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
   {
    path: '/blog-detail',
    name: 'Blog Detail',
    component: BlogDetail,
  },
  {
    path: '/blog-list',
    name: 'Blog List',
    component: BlogList,
  },
  {
    path: '/writer-information',
    name: 'Writer Information',
    component: WriterInformation,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

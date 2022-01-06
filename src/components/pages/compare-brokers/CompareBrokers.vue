<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        GUARANTEED LOWEST FEES
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div>
              <vue-slider :tooltip="'always'"></vue-slider>
              <p class="text-center text-custom-orange3">
                Move slider to show approximate savings when selling your
                membership
              </p>
            </div>
            <div
              class="grid grid-cols-4 text-xl md:text-2xl gap-2 md:gap-5 mt-5"
            >
              <div
                class="border border-custom-blue3 bg-custom-lightcream justify-center p-1 md:px-3 text-center transition duration-300 transform hover:scale-105 rounded shadow hover:bg-custom-blue2 hover:text-white"
              >
                <img
                  class="w-28 h-8 relative left-1/2 transform -translate-x-1/2"
                  src="/assets/DVC-Sales-Navy.png"
                  alt="dvc-sales"
                />
                <p class="py-3">8%</p>
                <p>$800.00</p>
              </div>
              <div
                class="text-center border border-custom-blue3 bg-custom-lightcream p-1 md:px-3 transition duration-300 transform hover:scale-105 rounded shadow hover:bg-custom-blue2 hover:text-white"
              >
                <p>Competitor A</p>
                <p class="py-3">8.9%</p>
                <p>${{ competitor_cost.a }}</p>
                <p class="py-5 text-left">
                  ${{ competitor_saving.a }}
                  <span class="text-custom-green1 block md:inline">Saving</span>
                </p>
                <span class="float-right -mt-5 clear-both">
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                </span>
              </div>
              <div
                class="text-center border border-custom-blue3 bg-custom-lightcream p-1 md:px3 transition rounded duration-300 transform hover:scale-105 hover:text-white hover:bg-custom-blue2 shadow"
              >
                <p>Competitor B</p>
                <p class="py-3">10%</p>
                <p>${{ competitor_cost.a }}</p>
                <p class="py-5 text-left">
                  ${{ competitor_saving.a }}
                  <span class="text-custom-green1 block md:inline">Saving</span>
                </p>
                <span class="float-right -mt-5 clear-both">
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block -mt-4"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                </span>
              </div>
              <div
                class="text-center border border-custom-blue3 bg-custom-lightcream p-1 md:px3 transition rounded duration-300 transform hover:scale-105 hover:text-white hover:bg-custom-blue2 shadow"
              >
                <p>Competitor C</p>
                <p class="py-3">7.5%</p>
                <p>${{ competitor_cost.a }}</p>
                <p class="py-5 float-left inline">
                  $-{{ competitor_saving.a }}
                  <span class="text-custom-green1 block md:inline">Saving</span>
                </p>
                <span class="float-right -mt-5 clear-both">
                  <img
                    class="w-5 h-auto block transform transition duration-1000 -mt-4"
                    :class="
                      coin2 ? '-translate-y-35rem' : 'block translate-y-1'
                    "
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                  <img
                    class="w-5 h-auto block transform transition duration-1000 -mt-4"
                    :class="coin ? '-translate-y-35rem' : 'block translate-y-1'"
                    src="assets/coin_PNG36935.png"
                    alt="coin"
                  />
                </span>
              </div>
            </div>
            <div class="text-center md:space-x-36 mt-4">
              <label
                class="text-2xl block md:inline mb-3 md:mb-0"
                @click="coin2 = !coin2"
                ><input class="w-5 h-5 mx-2 inline" type="checkbox" />Closing
                Costs Savings $543.00</label
              >
              <label class="text-2xl inline" @click="coin = !coin"
                ><input class="w-5 h-5 mx-2 inline" type="checkbox" />Annual
                Dues Reimbursement $606.00</label
              >
            </div>
          </section>
          <section>
            <div class="text-2xl mt-5 space-y-4">
              <p class="text-3xl text-custom-orange2">
                Another reason to use DVC Sales
              </p>
              <p>
                <span class="text-custom-orange2"
                  >More money in your pocket!</span
                >
                This may be the best reason of all. Here at DVC Sales, our first
                priority is to help members sell their contracts their
                membership for fair market value. Sometimes, choosing the right
                resale broker is confusing. If one broker advertises a lower
                commission rate, doesn't that mean you will end up with more
                money in your pocket? Not necessarily. As with many things in
                life, looks can be deceiving.
              </p>
              <p>
                <span class="text-custom-orange2">What about the fees?</span>
                There are typically 2 fees associated with selling a DVC
                contract: a $150 fee to Disney and a commission to the resale
                broker. Many resale brokers claim that these are the only fees
                for sellers, but they allow the buyer to negotiate who pays the
                closing costs (average $700 or so) and also allow the buyer to
                negotiate not reimbursing the seller for the annual dues for the
                current year.
              </p>
              <p>
                <span class="text-custom-orange2"
                  >How is DVC Sales different?</span
                >
                Unlike every other resale broker, we don't allow buyers to
                negotiate who pays these fees. Just as we would not expect the
                seller to ask the buyer to pay our fee, we think it's fair that
                the seller is compensated for the dues on the points that are
                currently available for the current year- why pay dues on points
                you don't get to use?
              </p>
              <p>
                <span class="text-custom-orange2">Doing the math.</span> The
                demonstration above allows sellers to input the approximate
                price of their membership to see the difference in their bottom
                line cost of selling their contract and how the fees add up. You
                may find it surprising that with a commission fee of only 1/2%
                higher, that if the seller ultimately pays the closing costs and
                is not reimbursed for the dues, the difference can be over
                $2,300 on a $20,000 contract. This may not be apparent when
                listing your membership initially, but the difference is
                substantial.
              </p>
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
  components: {
    Header,
  },
  data() {
    return {
      coin: true,
      coin2: true,
      competitor_cost: { a: 890.0, b: 1000.0, c: 750.0 },
      competitor_saving: { a: 90.0, b: 300.0, c: 50.0 },
    };
  },
};
</script>

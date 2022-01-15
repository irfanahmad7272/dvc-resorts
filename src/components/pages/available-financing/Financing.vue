<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        DVC SALES FINANCING
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div class="text-2xl">
              <p>
                We recommend that you review their loan offerings if you are
                considering financing. You may also contact the below. They are
                independent companies so you will need to contact them for the
                most current rates and terms. Additional information and site
                links are listed below:
              </p>
              <p class="text-center text-custom-orange2 my-3">
                All the lenders below share the following terms: No Pre-Payment
                Penalty, No Monthly Loan Service Fee.
              </p>
            </div>
          </section>
          <!-- cards section start -->
          <section>
            <div
              class="flex flex-wrap sm:flex-nowrap justify-center md:text-2xl mx-auto gap-4 md:gap-5 border-b-8 border-custom-blue4 pb-6"
            >
              <!-- card 1 start -->
              <div
                v-if="available_financing.dvcLoan"
                class="bg-custom-lightcream w-full md:w-80 shadow border border-custom-blue2 hover:border-custom-blue3 hover:shadow-md rounded"
              >
                <div>
                  <img
                    class="mx-auto my-3 w-36"
                    src="/assets/dvc-loans.png"
                    alt="vacation-club-loan"
                  />
                </div>
                <div
                  class="text-center border-t border-b border-custom-blue3 py-3"
                >
                  <p>Financing all DVC Resorts</p>
                  <p class="text-xl">Available Interest Rate</p>
                  <div class="mt-12 mx-5">
                    <vue-slider
                      v-model="value_2"
                      :tooltip="'always'"
                      :dot-options="dotOptions"
                    ></vue-slider>
                  </div>
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Credit Check</span>
                  <span class="float-right">no</span>
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Loan Origination Fee</span>
                  <span class="float-right">$199</span>
                </div>
                <div class="mt-14 px-5 border-b border-custom-blue3">
                  <vue-slider
                    v-model="value_2"
                    :tooltip="'always'"
                  ></vue-slider>
                  <p class="text-center py-1">Loan Term</p>
                </div>
                <div class="text-center my-2">
                  <a class="underline hover:no-underline" href="#"
                    >dvcloans.com</a
                  >
                  <p class="text-xl">(407) 205-1435</p>
                  <p class="text-xl">Lori Webb</p>
                </div>
              </div>
              <!-- card 1 end -->
              <!-- card 2 start -->
              <div
                v-if="available_financing.vacationClubLoan"
                class="bg-custom-lightcream w-full md:w-80 shadow border border-custom-blue2 hover:border-custom-blue3 hover:shadow-md rounded"
              >
                <div>
                  <img
                    class="mx-auto my-3"
                    src="/assets/vacation-club-loans-resize.png"
                    alt="vacation-club-loan"
                  />
                </div>
                <div
                  class="text-center border-t border-b border-custom-blue3 py-3"
                >
                  <p>Financing all DVC Resorts</p>
                  <p class="text-xl">Available Interest Rate</p>
                  <!-- slider start -->
                  <div class="mt-12 mx-5">
                    <vue-slider
                      v-model="value_2"
                      :tooltip="'always'"
                      :disabled="true"
                    ></vue-slider>
                  </div>
                  <!-- slider end -->
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Credit Check</span>
                  <span class="float-right">OPTIONAL</span>
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Loan Origination Fee</span>
                  <span class="float-right">NONE</span>
                </div>
                <div class="mt-14 px-5 border-b border-custom-blue3">
                  <vue-slider
                    v-model="value_2"
                    :tooltip="'always'"
                  ></vue-slider>
                  <p class="text-center py-1">Loan Term</p>
                </div>
                <div class="text-center my-2">
                  <a class="underline hover:no-underline" href="#"
                    >vacationclubloans.com</a
                  >
                  <p class="text-xl">(800) 334-2334</p>
                  <p class="text-xl">Debbie Ely</p>
                </div>
              </div>
              <!-- card 2 end -->
              <!-- card 3 start -->
              <div
                v-if="available_financing.moneraFinancial"
                class="bg-custom-lightcream w-full md:w-80 shadow border border-custom-blue2 hover:border-custom-blue3 hover:shadow-md rounded"
              >
                <div>
                  <img
                    class="mx-auto my-3 w-40"
                    src="/assets/monera_financial.png"
                    alt="vacation-club-loan"
                  />
                </div>
                <div
                  class="text-center border-t border-b border-custom-blue3 py-3"
                >
                  <p>Financing Only Florida Resorts</p>
                  <p class="text-xl">Available Interest Rate</p>
                  <!-- slider start -->
                  <div class="mt-12 mx-5">
                    <vue-slider
                      v-model="value_2"
                      :tooltip="'always'"
                    ></vue-slider>
                  </div>
                  <!-- slider end -->
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Credit Check</span>
                  <span class="float-right">OPTIONAL</span>
                </div>
                <div class="px-2 xl:px-5 border-b border-custom-blue3 py-3">
                  <span>Loan Origination Fee</span>
                  <span class="float-right">$199</span>
                </div>
                <div class="mt-14 px-5 border-b border-custom-blue3">
                  <vue-slider
                    v-model="value_2"
                    :tooltip="'always'"
                  ></vue-slider>
                  <p class="text-center py-1">Loan Term</p>
                </div>
                <div class="text-center my-2">
                  <a class="underline hover:no-underline" href="#"
                    >monerafinancial.com</a
                  >
                  <p class="text-xl">(317) 245-8800</p>
                  <p class="text-xl">Sam Comstand</p>
                </div>
              </div>
              <!-- card 3 end -->
            </div>
            <!-- cards hide/show menu -->
            <div class="my-10 text-center space-x-8">
              <label class="text-2xl cursor-pointer"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="available_financing.dvcLoan"
                />
                <span class="bg bg-custom-blue2 text-white px-2 py-0.5 rounded"
                  >DVC Loan</span
                ></label
              >
              <label class="text-2xl cursor-pointer"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="available_financing.vacationClubLoan"
                />
                <span class="bg bg-custom-blue2 text-white px-2 py-0.5 rounded"
                  >Vacation Club Loan</span
                ></label
              >
              <label class="text-2xl cursor-pointer"
                ><input
                  class="w-5 h-5 mx-2"
                  type="checkbox"
                  v-model="available_financing.moneraFinancial"
                />
                <span class="bg bg-custom-blue2 text-white px-2 py-0.5 rounded"
                  >Monera Financial</span
                ></label
              >
            </div>
          </section>
          <!-- cards section end -->

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
      available_financing: {
        dvcLoan: true,
        vacationClubLoan: true,
        moneraFinancial: true,
      },
      value_2: [20, 50],

      dotOptions: [
        {
          disabled: true,
        },
        {
          disabled: true,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title -->
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
            <div
              class="grid grid-cols-12 lg:text-xl xl:text-2xl bg-custom-lightcream p-3 rounded gap-y-10"
            >
              <div class="w-full col-span-12 md:col-span-4 relative">
                <div class="mb-5 mr-2">
                  <span>Resort Name</span>
                  <select
                    class="float-right border border-custom-blue5 rounded w-36 xl:w-44 2xl:w-60 px-0 xl:px-3 py-1 text-lg md:text-2xl"
                  >
                    <option value="Animal Kingdom">Animal Kingdom</option>
                    <option value="Aulani">Aulani</option>
                    <option value="Bay Lake Tower">Bay Lake Tower</option>
                    <option value="Beach Club">Beach Club</option>
                    <option value="Board Walk">Board Walk</option>
                    <option value="Boulder Ridge">Boulder Ridge</option>
                    <option value="Copper Creek">Copper Creek</option>
                    <option value="Grand CA">Grand CA</option>
                    <option value="Grand Floridian">Grand Floridian</option>
                    <option value="Hilton Head">Hilton Head</option>
                    <option value="Old Key West">Old Key West</option>
                    <option value="Polynesian">Polynesian</option>
                    <option value="Riviera">Riviera</option>
                    <option value="Saratoga Springs">Saratoga Springs</option>
                    <option value="Vero Beach">Vero Beach</option>
                  </select>
                </div>
                <div class="mb-5 mr-2">
                  <span>Points on the Contract</span>
                  <input
                    type="text"
                    value="100"
                    class="float-right border border-custom-blue5 rounded w-16 xl:w-32 px-3 text-right text-lg md:text-2xl"
                  />
                </div>
                <p class="text-center text-base text-gray-500">
                  Select your resort and enter the number of points this
                  contract receives each year.
                </p>
              </div>
              <div class="w-full col-span-12 md:col-span-4 relative">
                <span
                  class="absolute top-1/2 transform -translate-y-1/2 text-5xl font-bold left-2 hidden md:block"
                  >+</span
                >
                <p class="text-custom-blue4 text-center">
                  Available Points for
                </p>
                <div
                  class="grid grid-cols-12 text-center px-2 md:px-8 xl:px-10 2xl:px-16"
                >
                  <div class="col-span-4">
                    <p class="bg-custom-blue3 text-white">2021</p>
                    <input
                      class="w-full border border-gray-300 rounded text-center"
                      type="text"
                      value="20"
                    />
                  </div>
                  <div class="col-span-4">
                    <p class="bg-custom-blue3 text-white">2022</p>
                    <input
                      class="w-full border border-gray-300 rounded text-center"
                      type="text"
                      value="10"
                    />
                  </div>
                  <div class="col-span-4">
                    <p class="bg-custom-blue3 text-white">2023</p>
                    <input
                      class="w-full border border-gray-300 rounded text-center"
                      type="text"
                      value="10"
                    />
                  </div>
                  <div class="col-span-12 mt-2">
                    <p class="text-center text-base text-gray-500">
                      Adjustment for current years available points.ves each
                      year.
                    </p>
                  </div>
                </div>
                <span
                  class="absolute text-5xl font-bold top-1/2 transform -translate-y-1/2 right-0 hidden md:block"
                  >=</span
                >
              </div>
              <div class="w-full col-span-12 md:col-span-4 text-center">
                <p>ESTIMATED SECONDARY MARKET VALUE</p>
                <div class="text-custom-orange2 text-3xl my-3">
                  $<span>248.90</span> or $<span>24,890.00</span>
                </div>
                <p class="text-base text-gray-500">
                  Estimated asking price to sell within 30 days when listed on
                  dvcsales.com
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="bg-custom-lightcream mb-5 mt-10 mx-auto">
              <table class="w-full text-center disney-compare-prices-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <span
                        class="rounded-full bg-custom-blue4 text-white w-8 h-8 py-0.5 block text-center mx-auto -mt-4"
                        >1</span
                      >
                    </td>
                    <td>
                      <span
                        class="rounded-full bg-custom-blue4 text-white w-8 h-8 py-0.5 block text-center mx-auto -mt-4"
                        >2</span
                      >
                    </td>
                    <td>
                      <span
                        class="rounded-full bg-custom-blue4 text-white w-8 h-8 py-0.5 block text-center mx-auto -mt-4"
                        >3</span
                      >
                    </td>
                    <td>
                      <span
                        class="rounded-full bg-custom-blue4 text-white w-8 h-8 py-0.5 block text-center mx-auto -mt-4"
                        >4</span
                      >
                    </td>
                  </tr>
                  <tr class="text-custom-orange2">
                    <td></td>
                    <td>SELL BACK TO DISNEY</td>
                    <td>SELL TO ANOTHER BROKER</td>
                    <td>SELL TO DVC SALES</td>
                    <td>LIST AND SALE WITH DVC SALES</td>
                  </tr>
                  <tr>
                    <td class="text-left"></td>
                    <td>LESS 40% DISCOUNT</td>
                    <td>LESS 15% DISCOUNT</td>
                    <td>LESS 15% DISCOUNT</td>
                    <td>LESS 15% DISCOUNT</td>
                  </tr>
                  <tr>
                    <td class="text-left w-2/6 lg:w-1/6">DISCOUNT</td>
                    <td class="text-red-500 w-1/6">$8,378</td>
                    <td class="text-red-500 w-1/6">$8,378</td>
                    <td class="text-red-500 w-1/6">$8,378</td>
                    <td class="text-red-500 w-1/6">$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left">BROKER COMM</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left">CLOSING COSTS</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                    <td class="text-red-500">$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left">ANNUAL DUES</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td class="text-custom-darkgreen">+ $8,378</td>
                    <td>$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left">ESTOPPEL FEE</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                  </tr>
                  <tr class="border-t-2 border-custom-blue5">
                    <td class="text-left">NET TO SELLER</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left">NET PER POINT.</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                    <td>$8,378</td>
                  </tr>
                  <tr>
                    <td class="text-left"></td>
                    <td>
                      <div class="text-center my-2">
                        <p>Really Bad Idea</p>
                        <button
                          class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                        >
                          Hide
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="text-center my-2">
                        <p>Bad Idea</p>
                        <button
                          class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                        >
                          Hide
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="text-center my-2">
                        <p>Not Recommended</p>
                        <button
                          class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                        >
                          Hide
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="text-center my-2">
                        <p>Best</p>
                        <button
                          class="bg-custom-darkgreen hover:bg-green-600 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                        >
                          LIST MY MEMBERSHIP
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="grid grid-cols-12 my-8 gap-x-2 gap-y-9 border"> -->
            <div
              class="flex flex-wrap flex-row justify-center gap-x-2 gap-9 my-8 relative"
            >
              <!-- card start -->
              <!-- class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3" -->
              <div>
                <div class="py-2 px-2 bg-custom-lightcream relative hidden">
                  <span
                    class="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-custom-blue4 text-white px-4 py-1 text-center"
                    >1</span
                  >
                  <div class="text-center mt-5">
                    <p class="text-custom-orange2">SELL BACK TO DISNEY</p>
                    <p>LESS 40% DISCOUNT</p>
                    <p class="text-base">&nbsp;</p>
                    <p class="text-red-500 text-base pb-5 pt-2">
                      Seller receives a very low price but only has to pay the
                      dues
                    </p>
                  </div>
                  <!--  -->

                  <div class="grid grid-cols-12 gap-10">
                    <!-- <div class="col-span-3">
                      <h3 class="text-3xl">40%</h3>
                      <p>LESS</p>
                      <p></p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                    </div> -->
                    <div class="col-span-4">
                      <h3 class="text-3xl">DISCOUNT</h3>
                      <br />
                      <p>BROKER COMM</p>
                      <p>CLOSING COSTS</p>
                      <p>ANNUAL DUES</p>
                      <p>ESTOPPEL FEE</p>
                    </div>
                    <div class="col-span-2 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                    <div class="col-span-2 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                    <div class="col-span-2 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                    <div class="col-span-2 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                  </div>
                  <div class="w-full border-t-2 border-custom-blue5">
                    <span>NET TO SELLER</span>
                    <span class="float-right">$7,571</span>
                    <br />
                    <span>NET PER POINT.</span>
                    <span class="float-right">$76</span>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <p>Really Bad Idea</p>
                  <button
                    class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                  >
                    Hide
                  </button>
                </div>
              </div>
              <!-- card end -->

              <!-- card start -->
              <!-- class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3" -->
              <div class="hidden">
                <div class="py-2 px-2 bg-custom-lightcream relative">
                  <span
                    class="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-custom-blue4 text-white px-4 py-1 text-center"
                    >2</span
                  >
                  <div class="text-center mt-5">
                    <p class="text-custom-orange2">SELL TO ANOTHER BROKER</p>
                    <p>LESS 15% DISCOUNT</p>
                    <p class="text-base">&nbsp;</p>
                    <p class="text-red-500 text-base pb-5 pt-2">
                      Seller receives a very low price but only has to pay the
                      dues
                    </p>
                  </div>
                  <!--  -->
                  <div class="grid grid-cols-12">
                    <div class="col-span-3">
                      <h3 class="text-3xl">40%</h3>
                      <p>LESS</p>
                      <p></p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                    </div>
                    <div class="col-span-4">
                      <h3 class="text-3xl">DISCOUNT</h3>
                      <br />
                      <p>BROKER COMM</p>
                      <p>CLOSING COSTS</p>
                      <p>ANNUAL DUES</p>
                      <p>ESTOPPEL FEE</p>
                    </div>
                    <div class="col-span-5 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                  </div>
                  <div class="w-full border-t-2 border-custom-blue5">
                    <span>NET TO SELLER</span>
                    <span class="float-right">$7,571</span>
                    <br />
                    <span>NET PRICE PAID/PT.</span>
                    <span class="float-right">$76</span>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <p>Bad Idea</p>
                  <button
                    class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                  >
                    Hide
                  </button>
                </div>
              </div>
              <!-- card end -->
              <!-- card start -->
              <!-- class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3" -->
              <div class="hidden">
                <div class="py-2 px-2 bg-custom-lightcream relative">
                  <p
                    class="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-custom-blue4 text-white px-4 py-1 text-center"
                  >
                    3
                  </p>
                  <div class="text-center mt-5">
                    <p class="text-custom-orange2">SELL TO DVC SALES</p>
                    <p>LESS 15% DISCOUNT</p>
                    <p class="text-custom-darkgreen text-base">
                      Plus $500 Broker Credit
                    </p>
                    <p class="text-red-500 text-base pb-5 pt-2">
                      Seller receives a very low price but only has to pay the
                      dues
                    </p>
                  </div>
                  <!--  -->
                  <div class="grid grid-cols-12">
                    <div class="col-span-3">
                      <h3 class="text-3xl">40%</h3>
                      <p>LESS</p>
                      <p></p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                    </div>
                    <div class="col-span-4">
                      <h3 class="text-3xl">DISCOUNT</h3>
                      <br />
                      <p>BROKER COMM</p>
                      <p>CLOSING COSTS</p>
                      <p>ANNUAL DUES</p>
                      <p>ESTOPPEL FEE</p>
                    </div>
                    <div class="col-span-5 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                  </div>
                  <div class="w-full border-t-2 border-custom-blue5">
                    <span>NET TO SELLER</span>
                    <span class="float-right">$7,571</span>
                    <br />
                    <span>NET PRICE PAID/PT.</span>
                    <span class="float-right">$76</span>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <p>Not Recommended</p>
                  <button
                    class="bg-custom-blue2 hover:bg-custom-blue4 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                  >
                    Hide
                  </button>
                </div>
              </div>
              <!-- card end -->
              <!-- card start -->
              <!-- class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3" -->
              <div class="hidden">
                <div class="py-2 px-2 bg-custom-lightcream relative">
                  <p
                    class="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-custom-blue4 text-white px-4 py-1 text-center"
                  >
                    4
                  </p>
                  <div class="text-center mt-5">
                    <p class="text-custom-orange2">
                      LIST AND SALE WITH DVC SALES
                    </p>
                    <input type="range" class="w-full" />
                    <span class="text-gray-400"
                      >Move slider to change price</span
                    >
                    <p class="text-red-500 text-base pb-5 pt-2">
                      Seller receives a very low price but only has to pay the
                      dues
                    </p>
                  </div>
                  <!--  -->
                  <div class="grid grid-cols-12">
                    <div class="col-span-3">
                      <h3 class="text-3xl">40%</h3>
                      <p>LESS</p>
                      <p></p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                    </div>
                    <div class="col-span-4">
                      <h3 class="text-3xl">DISCOUNT</h3>
                      <br />
                      <p>BROKER COMM</p>
                      <p>CLOSING COSTS</p>
                      <p>ANNUAL DUES</p>
                      <p>ESTOPPEL FEE</p>
                    </div>
                    <div class="col-span-5 text-right mb-5">
                      <h3 class="text-3xl">$8,378</h3>
                      <br />
                      <p>$0</p>
                      <p>$0</p>
                      <p class="text-red-400">($807)</p>
                      <p>$0</p>
                    </div>
                  </div>
                  <div class="w-full border-t-2 border-custom-blue5">
                    <span>NET TO SELLER</span>
                    <span class="float-right">$7,571</span>
                    <br />
                    <span>NET PRICE PAID/PT.</span>
                    <span class="float-right">$76</span>
                  </div>
                </div>
                <div class="text-center mt-2">
                  <p>Best</p>
                  <button
                    class="bg-custom-darkgreen hover:bg-green-800 text-white px-5 py-1 rounded-md mt-2 mb-5 md:mb-0"
                  >
                    LIST MY MEMBERSHIP
                  </button>
                </div>
              </div>
              <!-- card end -->
              <span
                class="absolute -bottom-14 left-1/2 transform -translate-x-1/2 hidden"
                ><button
                  class="bg-custom-lightcream px-4 py-1 border border-custom-blue3 rounded-md hover:bg-custom-darkcream"
                >
                  Show All
                </button></span
              >
            </div>
          </section>
          <section>
            <div class="mt-24">
              <h4 class="text-custom-orange2 text-2xl">SELL BACK TO DISNEY</h4>
              <p class="mb-4">
                Selling your membership back to Disney will net you
                approximately 40% less than selling through DVC Sales
              </p>
              <h4 class="text-custom-orange2 text-2xl">
                SELL TO ANOTHER BROKER
              </h4>
              <p class="mb-4">
                Selling your membership to a resale broker using their 'instant
                sale' option will net you an average of 15% less.
              </p>
              <h4 class="text-custom-orange2 text-2xl">SELL TO DVC SALES</h4>
              <p class="mb-4">
                Selling your membership to DVC Sales will net you more than the
                average 'instant sale', but you will make about 15% more listing
                your contract with DVC Sales.
              </p>
              <h4 class="text-custom-orange2 text-2xl">
                LIST AND SALE WITH DVC SALES
              </h4>
              <p class="mb-4">
                Selling your contract with DVC Sales will net you the highest
                amount the market will allow. No closing costs and you will be
                credited for this years' dues (based on your available points)
                at closing. Even after commission, this option far exceeds all
                others.
              </p>
            </div>
          </section>
          <section>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-t-2 border-b-2 border-custom-blue5 text-center text-2xl py-4"
            >
              <div>
                <input class="w-6 h-6" type="checkbox" />
                <br />
                <span class="mr-4 my-3">Discount 1 (%)</span>
                <input class="px-2 w-24" type="text" value="40" />
                <br />
                <p class="my-3">Add Text 1:</p>
                <input
                  class="px-2 w-full"
                  type="text"
                  value="Selling your membership back to disney"
                />
              </div>
              <div>
                <input class="w-6 h-6" type="checkbox" />
                <br />
                <span class="mr-4 my-3">Discount 2 (%)</span>
                <input class="px-2 w-24" type="text" value="40" />
                <br />
                <p class="my-3">Add Text 2:</p>
                <input
                  class="px-2 w-full mb-3"
                  type="text"
                  value="Selling your membership back to disney"
                />
                <br />
                <span class="mr-4 mt-3">Broker Commission Rate(%)</span>
                <input class="px-2 w-24" type="text" value="40" />
              </div>
              <div>
                <input class="w-6 h-6" type="checkbox" />
                <br />
                <span class="mr-4 my-3">Discount 3 (%)</span>
                <input class="px-2 w-24" type="text" value="40" />
                <br />
                <p class="my-3">Add Text 3:</p>
                <input
                  class="px-2 w-full"
                  type="text"
                  value="Selling your membership back to disney"
                />
              </div>
              <div>
                <span class="mr-4">Above(%)</span>
                <input class="px-2 w-24 mb-2" type="text" value="40" />
                <br />
                <span class="mr-4 my-3">Below(%)</span>
                <input class="px-2 w-24" type="text" value="40" />
                <br />

                <p class="my-2">Add Text 4:</p>
                <input
                  class="px-2 w-full"
                  type="text"
                  value="Selling your membership back to disney"
                />
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
  components: {
    Header,
  },
};
</script>
<style lang="css">
.disney-compare-prices-table tr td {
  @apply border-l-8 border-r-8 border-custom-darkcream px-2;
}
</style>

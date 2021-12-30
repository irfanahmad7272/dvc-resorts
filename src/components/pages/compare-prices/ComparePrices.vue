<template>
  <div>
    <Header />
    <div class="main-page pt-5 pb-12 bg-custom-bg1 text-custom-blue4 text-xl">
      <!-- page title start-->
      <h1
        class="my-5 font-normal text-center uppercase text-2xl md:text-pTitle text-custom-primary font-body"
      >
        PURCHASE DIRECT OR DVC SALES
      </h1>
      <!-- page title end-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <section>
            <div
              class="bg-custom-lightcream px-7 py-2 w-full md:w-5/6 xl:w-4/6 mx-auto relative"
            >
              <table class="bg-custom-lightcream w-full">
                <thead>
                  <tr
                    class="md:text-3xl text-left border-b border-custom-blue3"
                  >
                    <th class="font-normal py-2 px-3">PURCHASE FROM:</th>
                    <th class="font-normal py-2 text-center">
                      Walt Disney Co.
                    </th>
                    <th class="font-normal py-2">
                      <img
                        class="w-36 float-right"
                        src="/assets/DVC-Sales-Navy.png"
                        alt="dvc-sales"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody class="md:text-2xl">
                  <tr class="odd:bg-custom-darkcream">
                    <td class="py-2 px-3">Purchase Price per Point:</td>
                    <td class="py-2 text-center">$171.00</td>
                    <td class="py-2 text-right px-3">$131.00</td>
                  </tr>
                  <tr class="odd:bg-custom-darkcream">
                    <td class="py-2 px-3">Contract price:</td>
                    <td class="py-2 text-center">$171.00</td>
                    <td class="py-2 text-right px-3">$131.00</td>
                  </tr>
                  <tr class="odd:bg-custom-darkcream">
                    <td class="py-2 px-3">Saving per point:</td>
                    <td class="py-2 text-center"></td>
                    <td class="py-2 text-right px-3">$131.00</td>
                  </tr>
                  <tr class="odd:bg-custom-darkcream">
                    <td class="py-2 px-3">Saving per contract:</td>
                    <td class="py-2 text-center"></td>
                    <td class="py-2 text-right px-3">$131.00</td>
                  </tr>
                  <tr class="odd:bg-custom-darkcream">
                    <td class="py-2 px-3">Saving percentage:</td>
                    <td class="py-2 text-center"></td>
                    <td class="py-2 text-right px-3">$131.00</td>
                  </tr>
                </tbody>
              </table>
              <p class="py-3">
                <span class="text-custom-orange1">* </span>Estimated secondary
                market price
              </p>
              <div class="absolute right-1 top-14 text-4xl text-custom-orange1">
                <i class="fas fa-sort-up block"></i>
                <i class="fas fa-sort-down block"></i>
              </div>
            </div>
          </section>
          <section>
            <div class="text-2xl mt-6">
              <p>
                You’ve probably heard how purchasing your Disney Vacation Club
                membership on our DVC Sales resale market can help you save
                thousands on your membership. However, how much will purchasing
                resale save you based on your desired membership preferences?
                That’s what our DVC Retail vs Resale calculator is for. This
                calculator will help determine the approximate savings you may
                expect by purchasing your membership resale.
              </p>
              <h3 class="text-custom-orange2 my-2">
                HOW TO USE THIS CALCULATOR:
              </h3>
              <p>
                Find out how much you could save by purchasing your DVC
                membership on our resale market in three easy steps:
              </p>
              <ol class="list-decimal text-xl ml-7 my-1">
                <li>Select your desired home resort</li>
                <li>
                  Move the slider to the amount of desired vacation points
                </li>
                <li>
                  Compare your savings by purchasing directly from Disney or on
                  our resale market!
                </li>
              </ol>
              <p>
                Want to learn more about how purchasing your DVC membership
                resale can save you? See our blog series where we discuss the
                benefits of purchasing your Disney Vacation Club membership on
                our resale market.
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
  components: { Header },
};
</script>

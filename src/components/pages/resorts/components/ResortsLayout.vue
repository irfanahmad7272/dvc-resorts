<template>
  <div>
    <Header />
    <div class="main-page bg-custom-bg1 text-custom-blue4 body-font-size pb-10">
      <!-- page title-->
      <div class="flex justify-center">
        <div class="left-sidebar-menu w-1/6 hidden lg:block"></div>
        <div class="page-content-body w-11/12 lg:w-4/6">
          <!-- main content start  -->
          <ResortsMenu />
          <slot></slot>
          <!-- main content end -->
        </div>
        <div class="right-sidebar w-1/6 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../layout/header/Header";
import ResortsMenu from "../components/ResortsMenu";
export default {
  components: { Header, ResortsMenu },
};
</script>

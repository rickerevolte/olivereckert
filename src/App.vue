<template>
  <NavHeader />
  <RouterView />
  <Footer></Footer>

</template>
  
  <script>
  import NavHeader from "./components/NavHeader.vue";
  import Footer from "./components/Footer.vue";
  
  export default {
    components: {
      NavHeader,
      Footer,
    }
  }
  </script>

  

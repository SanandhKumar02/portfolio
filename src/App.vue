<template>
  <v-app id="content">
    <Header></Header>
    <v-main>
        <Home></Home>
    </v-main>
    <Footer></Footer> 
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import Footer from './components/Footer.vue';
  // import Contact from './components/Contact.vue';

  export default {
    name: 'App',

    components: {
      Header,
      Home,
      Footer
      // Contact
    },
  }
</script>

<style scoped>
  #content{
    background-color: black;
    color: white;
  }
</style>

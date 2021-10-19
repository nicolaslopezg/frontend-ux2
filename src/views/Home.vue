<template>
  <v-app>

    <Navbar></Navbar>
  
  

    <v-content>
      <router-view/>
    </v-content>
    <Footer></Footer>
    
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
  }),
  components: {
    Navbar,
    Footer,
  }
};
</script>

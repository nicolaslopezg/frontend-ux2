<template>
  <v-app>

    <Navbar></Navbar>
  
  

    <v-content>
      <router-view/>
    </v-content>

      <v-footer
      color="#FFEFD2"
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        color="#FFEFD2"
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text class="black--text">
          <strong>Devance</strong> — <strong>Grupo 2</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar"

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
  }),
  components: {
    Navbar,
  }
};
</script>

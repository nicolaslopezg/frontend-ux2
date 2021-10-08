<template>
  <v-app>

    <v-app-bar app color="#FFEFD2">
      <v-app-bar-nav-icon @click = "drawer = !drawer"></v-app-bar-nav-icon>

        
        <v-btn text to="/">Devance</v-btn>

        <v-spacer>

      <v-btn text to="/cuenta/2">Mi cuenta</v-btn>

        <v-btn text to="/factura/2">Mis Facturas</v-btn>

        <v-btn text to="/pago/2">Realizar Pago</v-btn>

        </v-spacer>

        <v-btn class="error">Salir</v-btn>
    </v-app-bar>

  <v-navigation-drawer app v-model="drawer">
    <v-layout mt-4 column align-center>
      <v-flex>
        <v-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
        </v-avatar>
      </v-flex>
      <v-flex>
        <p class="mt-3 headline"> Nicolás López</p>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>

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
export default {
  name: 'Home',
  data: () => ({
    drawer: false,
  }),
};
</script>

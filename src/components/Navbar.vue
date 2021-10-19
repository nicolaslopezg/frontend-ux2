<template>
<div>
    <v-app-bar app color="#343330" dark>
      <v-app-bar-nav-icon @click = "drawer = !drawer"></v-app-bar-nav-icon>

        
        <v-btn class="white--text" text to="/">Devance</v-btn>

        <v-spacer>

        <v-btn class="white--text" text to="/cuenta/2">Mi cuenta</v-btn>

        <v-btn class="white--text" text to="/factura/2">Mis Facturas</v-btn>

        <v-btn class="white--text" text to="/pago/2">Realizar Pago</v-btn>

        </v-spacer>

        <v-btn color="#DC851F">Salir</v-btn>
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
</div>
</template>

<script>



export default {
  name: 'Home',
  data: () => ({
    drawer: false,
  })
};
</script>
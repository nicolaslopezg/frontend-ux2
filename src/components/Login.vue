<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0" color="#FFEFD2">
              <a>
                <v-img src="https://i.ibb.co/5Y4qxx6/Logo-Devance.png" contain height="200"></v-img>
                <v-img src="https://i.ibb.co/pXH1bYd/Screenshot-1-removebg-preview-2.png" contain height="100"></v-img>
              </a>
              <v-card-text>
                <v-form>
                  <v-text-field label="Ingrese su RUT" name="rut" prepend-inner-icon="mdi-dialpad" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Ingrese su contraseña" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| ¿Olvidó su contraseña?" class="rounded-0" outlined></v-text-field>
                  <router-link style="text-decoration: none; color: inherit;" to='/'>
                  <v-btn class="rounded-0" x-large block dark>Ingresar</v-btn>
                  </router-link>
                  <v-card-actions class="text--secondary">
                    <v-checkbox color="#000000" label="Recordarme"></v-checkbox>
                    <v-spacer></v-spacer>
                    ¿No tienes una cuenta? <a href="#" class="pl-2" style="color: #000000">Registrate aquí</a>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Login'
}


</script>

<style>
#app {
   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(248, 230, 180, 0.5)), url("https://i.ibb.co/PgnsMfw/best-banks-in-Canada.webp");
    
  background-size: cover;
}
</style>
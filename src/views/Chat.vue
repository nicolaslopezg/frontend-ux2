<template>
<div>
    <v-app>
    <Navbar></Navbar>
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
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex xs6>
        <div class="text-xs-center">
          <v-col col="12" style="background-color:#2F2F2F;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation
                                                  
            >
            <v-textarea
            class="custom-label-color"
            label="RUT Destinatario"
            color="white"
            required
            ></v-textarea>
            <v-textarea
            class="custom-label-color"
            label="Monto a Pagar"
            color="white"
            required
            ></v-textarea>
            

            <v-btn
            color="success"
            class="mr-4"
            @click="addFactura"
            >
            Pagar
            </v-btn>
            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Volver
            </v-btn>
            
          </v-form>
        </v-col>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</v-content>



    <v-content>
      <router-view/>
    </v-content>

      <Footer></Footer>
</v-app>
</div>
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
/*
export default {
    data(){
        return {
          tranfers: {
            form: {
                amount: '',
                idDestino: ''
            }
        }
    }
    },

    methods: {
        submit(){
            axios.post('http://localhost:3000/User2', this.tranfers)
                .then(function( response ){
                    // Handle success
                }.bind(this));
        }
    }
}*/
</script>
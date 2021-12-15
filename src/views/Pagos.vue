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
          <v-col col="12" style="background-color:#FFEFD2;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation
                                                  
            >
            <v-combobox
            v-model="select"
            :items="items"
            label="Cuenta de Origen"
            required
            ></v-combobox>

            <v-text-field
            label="Cuenta de Destino"
            required
            ></v-text-field>

            <v-text-field
            label="Monto a Pagar"
            required
            ></v-text-field>
            
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de vencimiento"
                  required
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>

            <v-btn
            color="success"
            class="mr-4"
            @click="addFactura"
            >
            Enviar Solicitud
            </v-btn>
            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Cancelar
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
  },
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
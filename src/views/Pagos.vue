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
          <v-toolbar class="rounded-lg" dark color="#343330">
              <v-spacer />
              <v-toolbar-title>
                <h2 style="textAlign:center;"> 
                 Solicitar Transferencia
                </h2>
              </v-toolbar-title>
              <v-spacer />
              
            </v-toolbar>
          <v-col class="rounded-lg px-4 py-1" col="12" style="background-color:#5A5A5A;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation
            >  

            <v-combobox
            v-model="origen"
            :items="items"
            class="rounded-lg px-4"
            style="background-color:#FFFFFF;"
            label="Cuenta de Origen"
            required
            ></v-combobox>

            <v-text-field
            class="rounded-lg px-4"
            style="background-color:#FFFFFF;"
            label="Cuenta de Destino"
            v-model="destino"
            required
            ></v-text-field>

            <v-text-field
           class="rounded-lg px-4"
            style="background-color:#FFFFFF;"
            label="Monto a Pagar"
            placeholder="$"
            v-model="monto"
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
                  class="rounded-lg px-4"
                  style="background-color:#FFFFFF;"
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
                <v-toolbar color="#5A5A5A" dark>
                    <v-col align="center">
                        <v-dialog transition="dialog-top-transition" max-width="600">
                            <template v-slot:activator="{on}">
                                <v-btn v-on="on"
                                color="error"
                                class="mr-4"
                                >
                                    Cancelar
                                </v-btn>
                            </template>
                            
                            <v-card-title class="justify-center" style="background-color:#343330">
                                <h4 style="color:#FFFFFF">¿Está seguro que desea <strong>Cancelar</strong> la transferencia?</h4>
                            </v-card-title>
                            <v-card-text style="background-color:#5A5A5A">
                                <v-container>
                                    <v-col align="center">
                                        <v-btn @click="reset" type="reset" color="error" class="mr-4" onclick="alert('¡Solicitud de transferencia cancelada!')">
                                        Si
                                        </v-btn>
                                        <v-btn color="success" class="mr-4">
                                        No 
                                        </v-btn>
                                    </v-col>
                                </v-container>  
                            </v-card-text>
                        </v-dialog>

                        <v-dialog transition="dialog-top-transition" max-width="600">
                            <template v-slot:activator="{on}">
    
                                <v-btn v-on="on"
                                color="success"
                                class="mr-4"
                                >
                                    Enviar Solicitud
                                </v-btn>
                            </template>
                            
                            <v-card-title class="justify-center" style="background-color:#343330">
                                <h4 style="color:#FFFFFF">¿Está seguro que desea <strong>Enviar Solicitud</strong> de la transferencia?</h4>
                            </v-card-title>
                            <v-card-text style="background-color:#5A5A5A">
                                <v-container>
                                    <v-col align="center">
                                        <v-btn color="error" class="mr-4">
                                        No
                                        </v-btn>
                                        <v-btn @click="createTransfer" type="reset" color="success" class="mr-4" onclick="alert('¡Envío de solicitud realizada!')">
                                        Si 
                                        </v-btn>
                                    </v-col>
                                </v-container>  
                            </v-card-text>
                        </v-dialog>
                            
                    </v-col>
                </v-toolbar>
            <!--<h3 style="textAlign: center;
              display: block;
              font-weight: bold;
              font-size: 0.5em;
              margin-top: 1em;
              margin-bottom: 0em;
              margin-left: 0;
              margin-right: 0;" >
            <v-btn
            color="success"
            class="mr-4 rounded-pill"
            @click="createTransfer"
            type="reset"
            onclick="alert('¡Envío de solicitud realizada!')"
            >
            Enviar Solicitud
            </v-btn>
            <v-btn
            color="error"
            class="mr-4 rounded-pill"
            @click="reset"
            type="reset"
            onclick="alert('¡Solicitud de transferencia cancelada!')"
            >
            Cancelar
            </v-btn>
            </h3>-->
            
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
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import{db} from "../main.js";

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
    origen: null,
    destino: null,
    monto: null,
    date: null,
    idDestino: null,
    items: [
      {value: 'corriente', text: 'Cuenta Corriente'},
      {value: 'tiempo', text: 'Cuenta Tiempo'}
    ],
  }),
  components: {
    Navbar,
    Footer,
  },
  methods:{

    async loadAccount() {
      console.log(this.origen.value);
      console.log(this.destino);
      console.log(this.monto);
      console.log(this.date);
    const q = query(collection(db, "accounts"), where("accountNumber", "==", parseInt(this.destino)));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    },
    async createTransfer() {
      console.log(this.origen.value);
      console.log(this.destino);
      console.log(this.monto);
      console.log(this.date);
      const q = query(
      collection(db, "transfers")
      );
      console.log(q);
      await setDoc(doc(db, "transfers/"+Math.random().toString(36).substr(2, 9)), {
      acceptaceNumber: 0,
      acceptanceStatus: "rechazado",
      accountType: this.origen.value,
      balance: parseInt(this.monto),
      date: this.date,
      accountDestiny: parseInt(this.destino),
      idUserOrigin: 1,
      transferStatus: "pendiente",
      });
      window.location.reload();
    },

    async loadUser() {
    const userRef = doc(db, "users/1");
    try {
      const loadedUser = await getDoc(userRef);
      if (loadedUser !== null) {
        const {
          name,
        } = loadedUser.data();
        console.log(name);
      }
    } catch (error) {
      console.log(error);
    }
    },
    async setUser(){
      await setDoc(doc(db, "users","US"), {
      name: "Los Angeles",
    });
      },
    async leerDatos(){
      onSnapshot(doc(db, "users", "LA"), (doc) => {
        this.texto=doc.data().name;
      console.log("Current data: ", doc.data());
      });
    }
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
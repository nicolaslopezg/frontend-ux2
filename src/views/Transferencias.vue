<template>
<div>
    <v-app>
    <Navbar></Navbar>


<v-content>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex xs6>
        <div class="text-xs-center">
          <v-toolbar dark color="#343330">
              <v-spacer />
              <v-toolbar-title>
                  <h2 style="textAlign: center"> 
                 Transferencias Realizadas
                </h2>
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
          <v-col col="12" style="background-color:#FFEFD2;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation                                      
            >
            <div v-for="(transaction,index) in obtenerFinalizados" :key="index">
            <v-container>          
                        <v-row no-gutters>                 
                            <v-toolbar color="#DC851F">
                                <v-col>
                                <h4>Fecha</h4>
                            </v-col>
                            <v-col>
                                <h4>Monto</h4>
                            </v-col>
                            <v-col>
                                <h4>Cuenta Origen</h4>
                            </v-col>
                            <v-col>
                                <h4>Cuenta Destino</h4>
                            </v-col>
                        </v-toolbar>
                            </v-row>
                            <v-row no-gutters>
                                <v-toolbar color="#f0c895">
                                <v-col>
                                <h4>{{transaction.date}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.balance}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.accountType}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.accountDestiny}}</h4>
                            </v-col>
                        </v-toolbar>

                            </v-row>
                    </v-container>
            </div>
            
          </v-form>
        </v-col>
      </div>
    </v-flex>
    <v-flex class="ml-5" xs6>
        <div class="text-xs-center">
          <v-toolbar dark color="#343330">
              <v-spacer />
              <v-toolbar-title>
                  <h2 style="textAlign: center"> 
                 Transferencias Pendientes
                </h2>
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
          <v-col col="12" style="background-color:#FFEFD2;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation                                      
            >

            <div v-for="(transaction,index) in obtenerPendientes" :key="index">
                <v-container>          
                        <v-row no-gutters>                 
                            <v-toolbar color="#DC851F">
                                <v-col>
                                <h4>Cuenta Origen</h4>
                            </v-col>
                            <v-col>
                                <h4>Cuenta Destino</h4>
                            </v-col>
                            <v-col>
                                <h4>Monto</h4>
                            </v-col>
                            <v-col>
                                <h4>Vencimiento</h4>
                            </v-col>
                        </v-toolbar>
                            </v-row>
                            <v-row no-gutters>
                                <v-toolbar color="#f0c895">
                                <v-col>
                                <h4>{{transaction.accountType}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.accountDestiny}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.balance}}</h4>
                            </v-col>
                            <v-col>
                                <h4>{{transaction.date}}</h4>
                            </v-col>
                        </v-toolbar>

                            </v-row>
                    </v-container>
            </div>
            
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

import { collection, getDocs } from "firebase/firestore";
import{db} from "../main.js";
export default {
    name: 'Factura',
    
    data () {
        return{
            users: [],
            pendiente: [],
            transactions: [], 
        }
        
    },
    computed: {
        obtenerFinalizados() {
        let algo = this.transactions.filter(doc => doc.transferStatus === 'finalizada');
        console.log("Computed");
        console.log(algo);
            return algo;
        },
        obtenerPendientes() {
        let otro = this.transactions.filter(doc => doc.transferStatus === 'pendiente');
        console.log("Computed");
        console.log(otro);
            return otro;
        }
    },
    created(){
        console.log("hola");
        this.getTransactions();
    
        
    },
    methods: {
    async getTransactions() {
        const querySnapshot = await getDocs(
            collection(db, "transfers")
        );
        try {
            const loadedTransactions = [];
            querySnapshot.forEach((doc) => {
            if (doc !== null) {
                loadedTransactions.push({ id: doc.id, ...doc.data() });

            }
            });
            this.transactions = loadedTransactions;
            console.log(this.transactions);
        } catch (error) {
            console.log(error);
        }
    },
    },
    
    components: {
    Navbar,
    Footer
    }
    
  }
</script>
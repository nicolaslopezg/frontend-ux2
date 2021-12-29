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
                <h4 style="textAlign: center"> 
                    TRANSFERENCIAS REALIZADAS <v-icon>mdi-calendar-check</v-icon>
                </h4>
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
          <v-col col="12" style="background-color:#343330;" 
             max-width="1000" 
             max-height="1000">
            <v-form
            ref="form"
            lazy-validation                                      
            >
            <div v-for="(transaction,index) in obtenerFinalizados" :key="index" dark>
                <v-container >          
                    <v-row v-bind:style="setColor(transaction.acceptanceStatus)? {'border-left': '6px solid green','height': 'auto'}:{'border-left': '6px solid red','height': 'auto'}" no-gutters>                 
                        <v-toolbar color="#5A5A5A" dark>
                            <v-col cols="6">
                                <v-icon>mdi-card-account-details</v-icon> Cuenta Origen: {{transaction.accountType}}
                            </v-col>
                            <v-col cols="6">
                                <v-icon>mdi-card-account-details</v-icon> Cuenta Destino: {{transaction.accountDestiny}}
                            </v-col>
                        </v-toolbar>
                    </v-row>
                    <v-row v-bind:style="setColor(transaction.acceptanceStatus)? {'border-left': '6px solid green','height': 'auto'}:{'border-left': '6px solid red','height': 'auto'}" no-gutters>
                        <v-toolbar color="#5A5A5A" dark>
                            <v-col>
                                <v-icon>mdi-calendar</v-icon> Fecha: {{transaction.date}}
                            </v-col>
                            <v-col>
                                <v-icon>mdi-cash</v-icon> Monto: 
                                <p style="display:inline" v-if="transaction.accountType == 'Corriente'">CLP $</p>
                                <p style="display:inline" v-if="transaction.accountType == 'Tiempo'">Cabildo </p>  
                                {{transaction.balance}}
                            </v-col>
                        </v-toolbar>
                    </v-row>
                    <v-row v-bind:style="setColor(transaction.acceptanceStatus)? {'border-left': '6px solid green','height': 'auto'}:{'border-left': '6px solid red','height': 'auto'}" no-gutters>
                        <v-toolbar color="#5A5A5A" dark>
                            <v-col>
                                <v-icon color="green" v-if="transaction.acceptanceStatus == 'aprobada'"> mdi-check-circle </v-icon>
                                <v-icon color="red" v-if="transaction.acceptanceStatus == 'rechazado'">mdi-close-circle</v-icon> 
                                Estado: {{transaction.acceptanceStatus}}
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
                  <h4 style="textAlign: center"> 
                 TRANSFERENCIAS PENDIENTES <v-icon>mdi-calendar-clock</v-icon>
                </h4>
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
          <v-col col="12" style="background-color:#343330;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation                                      
            >

            <div v-for="(transaction,index) in obtenerPendientes" :key="index">
                <v-container>          
                        <v-row no-gutters>                 
                            <v-toolbar color="#5A5A5A" dark>
                                <v-col>
                                    <v-icon>mdi-card-account-details</v-icon> Cuenta Origen: {{transaction.accountType}}
                                </v-col>
                                <v-col>
                                    <v-icon>mdi-card-account-details</v-icon> Cuenta Destino: {{transaction.accountDestiny}}
                                </v-col>
                            </v-toolbar>
                        </v-row>
                        <v-row no-gutters>
                            <v-toolbar color="#5A5A5A" dark>
                                <v-col>
                                    <v-icon>mdi-calendar</v-icon> Fecha: {{transaction.date}}
                                </v-col>
                                <v-col>
                                    <v-icon>mdi-cash</v-icon> Monto: 
                                    <p style="display:inline" v-if="transaction.accountType == 'Corriente'">CLP$</p>
                                    <p style="display:inline" v-if="transaction.accountType == 'Tiempo'">Cabildo</p>
                                    {{transaction.balance}}
                                </v-col>
                            </v-toolbar>
                        </v-row>
                        <v-row no-gutters>
                            <v-toolbar color="#5A5A5A" dark>
                                <v-col align="center">
                                    <v-dialog transition="dialog-top-transition" max-width="600">
                                        <template v-slot:activator="{on}">
                                            <v-btn v-on="on"
                                            color="error"
                                            class="mr-4"
                                            >
                                                Rechazar
                                            </v-btn>
                                            <v-btn v-on="on"
                                            color="success"
                                            class="mr-4"
                                            >
                                                Aprobar {{transaction.acceptaceNumber}} / 1
                                            </v-btn>
                                        </template>
                                        
                                        <v-card-title class="justify-center" style="background-color:#343330">
                                            <h4 style="color:#FFFFFF">¿Está seguro que desea <strong>Aprobar/Rechazar</strong> la transferencia?</h4>
                                        </v-card-title>
                                        <v-card-text style="background-color:#5A5A5A">
                                            <v-container>
                                                <v-col align="center">
                                                    <v-btn @click="deleteTransfer(transaction.id)" color="error" class="mr-4">
                                                    Rechazar
                                                    </v-btn>
                                                    <v-btn @click="approveTransfer(transaction.id)" color="success" class="mr-4">
                                                    Aprobar {{transaction.acceptaceNumber}} / 1
                                                    </v-btn>
                                                </v-col>
                                            </v-container>  
                                        </v-card-text>
                                    </v-dialog>
                                       
                                </v-col>
                            </v-toolbar>
                        </v-row>
                    </v-container>


            <!--
            <v-container>
                <v-card color="#f0c895">  
            <h3>
                Tipo Cuenta: {{transaction.accountType}}
            </h3>
            <h3>
                Número Cuenta Destino: {{transaction.accountDestiny}}
            </h3>
            <h3>
                Monto: {{transaction.balance}}
            </h3>
            <h3>
                Fecha Vencimiento: {{transaction.date}}
            </h3>
            <h3>
                Aprobación: {{transaction.acceptaceNumber}} / 3
            </h3>
            <h3 style="textAlign: center">
                <v-btn
            color="error"
            class="mr-4"
            >
            Rechazar
            </v-btn>
            <v-btn
            color="success"
            class="mr-4"
            >
            Aprobar
            </v-btn>    
            </h3>
                </v-card>
            </v-container>
-->
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

import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import{db} from "../main.js";
export default {
    name: 'Factura',
    
    data () {
        return{
            users: [],
            pendiente: [],
            transactions: [],
            aprobado: false,
            aprobar: false
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
    async approveTransfer(transaccion){
        await updateDoc(doc(db, "transfers",transaccion), {
            acceptanceNumber: 1,
            acceptanceStatus: "aprobada",
            transferStatus: "finalizada",
        })
        window.location.reload();
    },

    async deleteTransfer(transaccion){
        await updateDoc(doc(db, "transfers",transaccion), {
            transferStatus: "finalizada",
        })
        window.location.reload();
    },

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
    setColor: function (state) {
        if (state === 'aprobada') {
            return true
        }
        else {
            return false
        }
    },
    showCardNumber: function (cardNumber) {
        var stringCard = cardNumber.toString()
        var fillNumbers = ''
        var remainLength = 16 - stringCard.length
        for (var i = 0; i < remainLength; i++) {
            fillNumbers.concat('0')
        }
        fillNumbers.concat(stringCard)
        return fillNumbers
    }
    },
    
    components: {
    Navbar,
    Footer
    }
    
  }
</script>
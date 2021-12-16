<template>
<div>
    <v-app>
    <Navbar></Navbar>


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
            <h2 style="textAlign: center">    
                Transferencias Finalizadas
            </h2>
            <div v-for="(transaction,index) in obtenerFinalizados" :key="index">
            <h3>
                Tipo Cuenta: {{transaction.accountType}}
            </h3>
            <h3>
                Número Cuenta Destino: {{transaction.accountDestiny}}
            </h3> 
            <h3>
                Monto:  {{transaction.balance}}
            </h3>
            <h3>
                Estado: {{transaction.acceptanceStatus}}
            </h3>
            </div>
            
          </v-form>
        </v-col>
      </div>
    </v-flex>
    <v-flex class="ml-5" xs6>
        <div class="text-xs-center">
          <v-col col="12" style="background-color:#FFEFD2;" 
          max-width="1000" 
          max-height="1000">
            <v-form
            ref="form"
            lazy-validation                                      
            >
            
            <h2 style="textAlign: center">    
                Transferencias Pendientes
            </h2>
            <div v-for="(transaction,index) in obtenerPendientes" :key="index">
                
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
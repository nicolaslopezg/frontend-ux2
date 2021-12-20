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
            <v-container>
              <v-card color="#f0c895">
            <h2 style="textAlign: center">    
                Cuenta Corriente
            </h2>

            <h3 >
                Número Cuenta: 1000
            </h3>

            <h3>
                Saldo: 1000000
            </h3>
              </v-card>
            </v-container>
            
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
            <v-container>
              <v-card color="#f0c895">
            <h2 style="textAlign: center">    
                Cuenta Tiempo
            </h2>

            <h3>
                Número Cuenta: 321
            </h3>

            <h3>
                Saldo: 6
            </h3>
              </v-card>
            </v-container>
            
            
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
    name: 'Cuenta',
    components: {
    Navbar,
    Footer,
    },
    data () {
        return{
            users: [],
            aux: [],
            accounts: [],
        }
        
    },
    computed: {
        obtenerCuentas() {
        let algo = this.accounts.filter(doc => parseInt(doc.idUser) === 1);
        console.log("Computed");
        console.log(algo);
            return algo;
        },
    },
    created(){
        console.log("hola");
        this.getAccounts();
    
        
    },
    methods: {
    async getAccounts() {
        const querySnapshot = await getDocs(
            collection(db, "accounts")
        );
        try {
            const loadedAccounts = [];
            querySnapshot.forEach((doc) => {
            if (doc !== null) {
                loadedAccounts.push({ id: doc.id, ...doc.data() });

            }
            });
            this.accounts = loadedAccounts;
            console.log(this.accounts);
        } catch (error) {
            console.log(error);
        }
    },
    },
    
  }
</script>
<template>
<div>
    <v-app>
    <Navbar></Navbar>
 


<v-content>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex xs6 v-for="(account,index) in accounts" :key ="index">
        <div class="text-xs-center">
          <v-toolbar dark color="#343330">
              <v-spacer />
              <v-toolbar-title>
                  <h2 style="textAlign: center"> 
                 Cuenta  {{account.accountType}}
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
            
            <v-container>          
                        <v-row no-gutters>                 
                            <v-toolbar color="#DC851F">
                                <v-col>
                                <h3>Número cuenta</h3>
                            </v-col>
                            <v-col>
                                <h3>Saldo</h3>
                            </v-col>
                            
                        </v-toolbar>
                            </v-row>
                            <v-row no-gutters>
                                <v-toolbar color="#f0c895">
                                <v-col>
                                <h3>{{account.accountNumber}}</h3>
                            </v-col>
                            <v-col>
                                <h3>{{account.balance}}</h3>
                            </v-col>
                            
                        </v-toolbar>
                            </v-row>

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
import { collection, getDocs, where, query} from "firebase/firestore";
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
    
    created(){
        console.log("hola");
        this.getAccounts();
    
        
    },
    methods: {
    async getAccounts() {
        const currentUserID = parseInt(this.$route.params.id);
        console.log(this.$route)
        const querySnapshot = query(
            collection(db, "accounts"), where("idUser","==",currentUserID)
        );
        try {
            const queryAccounts = await getDocs(querySnapshot);
            const loadedAccounts = [];
            queryAccounts.forEach((doc) => {
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
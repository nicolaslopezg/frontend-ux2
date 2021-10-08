<template>
<div>
    <v-app>
    <v-app-bar app color="#FFEFD2">
      <v-app-bar-nav-icon @click = "drawer = !drawer"></v-app-bar-nav-icon>

        
        <v-btn text to="/">Devance</v-btn>

        <v-spacer>
  
        <v-btn text to="/cuenta/2">Mi cuenta</v-btn>

        <v-btn text to="/factura/2">Mis Facturas</v-btn>

        <v-btn text to="/pago/2">Realizar Pago</v-btn>

        </v-spacer>

        <v-btn to ="/login" class="error">Salir</v-btn>
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


 <div v-for="user in users" :key="user.id">
     <div v-if="user.id == url_data">
         <div v-for="account in user.accounts" :key="account.id">
            <v-content>
                <v-container fill-height>
                    <v-layout justify-start>
                        <v-flex xs6>
                            <div class="text-xs-center">
                                <v-card
                                    class="mx-auto"
                                    max-width="1000"
                                    outlined
                                >
                                    <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="text-overline mb-4">
                                        Tipo de cuenta: {{account.type}}
                                        </div>
                                        <v-list-item-title class="text-h5 mb-1">
                                        Balance: ${{account.balance}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>Este balance corresponde a la cuenta de tu banco</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                    ></v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                    <v-btn
                                        outlined
                                        rounded
                                        text
                                    >
                                        Revisar cuenta
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
         </div>
    </div>
 </div>



    <v-content>
      <router-view/>
    </v-content>

      <v-footer
      color="#FFEFD2"
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        color="#FFEFD2"
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text class="black--text">
          <strong>Devance</strong> — <strong>Grupo 2</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</v-app>
</div>
</template>

<script>

export default {
    name: 'Cuenta',
    
    data () {
        return{
            users: []
        }
        
    },
    mounted(){
        fetch('http://localhost:3000/User2')
        .then(res => res.json())
        .then(data => this.users = data)
        .catch(err => console.log(err.message))
        this.url_data=this.$route.params.id;
    },
    
  }
</script>
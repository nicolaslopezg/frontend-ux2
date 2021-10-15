<template>
<div>
    <v-app>
    <Navbar></Navbar>


 <div v-for="user in users" :key="user.id">
     <div v-if="user.id == url_data">
         <div v-for="tranfer in user.tranfers" :key="tranfer.id">
            <v-content>
                <v-container fill-height>
                    <v-layout justify-start>
                        <v-flex xs6>
                            <div class="text-xs-center">
                                <v-col col="12">
                                    <v-card
                                        class="mx-auto"
                                        max-width="1000"
                                        outlined>
                                        <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="text-overline mb-4">
                                            Destinatario: {{tranfer.idDestino}}
                                            </div>
                                            <v-list-item-title class="text-h5 mb-1">
                                            Monto tranferencia: ${{tranfer.amount}}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>Comprobante de factura</v-list-item-subtitle>
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
                                            Revisar factura
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
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
import Navbar from "@/components/Navbar"
export default {
    name: 'Factura',
    
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
    components: {
    Navbar,
    }
    
  }
</script>
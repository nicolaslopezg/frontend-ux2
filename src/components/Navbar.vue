<template>
<div>
    <v-app-bar app color="#343330" dark>
      <v-app-bar-nav-icon @click = "drawer = !drawer"></v-app-bar-nav-icon>

        
        <v-btn class="white--text" text to="/2">Devance</v-btn>

        <v-spacer>

        <v-btn class="white--text" text to="/cuenta/2">Mi cuenta</v-btn>

        <v-btn class="white--text" text to="/transferencias/2">Movimientos</v-btn>

        <v-btn class="white--text" text to="/realizarTransferencia/2">Realizar transferencia</v-btn>

         <v-btn class="white--text" text to="/chat/2">Chats</v-btn>

        </v-spacer>

        <p class="mt-4 mr-4 headline">{{user.name}}</p>

        <v-avatar class = "mr-8"
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    :src="user.photo"
                  >
        </v-avatar>

        <v-btn text to ="/login" color="#DC851F">Salir</v-btn>
    </v-app-bar>  
    <v-navigation-drawer app v-model="drawer">
    <v-layout mt-4 column align-center>
      <v-flex>
        <v-avatar>
          <img :src="user.photo" alt="">
        </v-avatar>
      </v-flex>
      <v-flex>
        <p class="mt-3 headline"> {{user.name}}</p>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>  
</div>
</template>

<script>

import { doc, getDoc} from "firebase/firestore";
import { db } from "../main.js";

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
    user: {},
  }),
  created(){
    this.getUser();
  },

    methods: {
    async getUser() {

        const currentUserID = this.$route.params.id;
        const docRef = doc(db, "users", currentUserID);

        try {
          const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.user = {id:docSnap.id, ...docSnap.data()}
          console.log("Document data:", this.user);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        } catch (error) {
        
          console.log(error)
        }
        
    },
    },

};
</script>

<template>
<div>
    <v-app>
    <Navbar></Navbar>
    


    <v-content >
      <v-card class="d-flex justify-center elevation-12" color="#FFEFD2">
      </v-card>
       <v-container fill-height fill-width >
       <v-row class="d-flex justify-center align-center ">
        <v-col cols="10">
        <v-card class="elevation-12 " color="#343330">
          
            
          
          <v-row >
            <v-col >
              <v-toolbar dark color="#343330">
                <v-toolbar-title>
                  <h4 class="text-center">
                    CHAT
                  </h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text class="chatbox">
                <v-list ref="chat" id="logs" color="#FFFFFF" :style="{minHeight: '200px'}">
                  <template v-for="(mensaje, index) in logs" >
                    <v-subheader v-if="mensaje" :key="index">
                        
                          <v-icon >
                            mdi-account-circle
                          </v-icon>
                        
                        {{ mensaje.text}}
                    </v-subheader>
                  </template>
                </v-list>
              </v-card-text>
              <v-card-actions class="chatbox" >
                <v-form @submit.prevent="submit" :style="{width: '100%'}">
                <v-container >
                  <v-row align="center" justify="center">
                    <v-col align-self="right" justify="right" cols="11">
                      <v-text-field :style="{minWidth: '50px',maxWidth:'1500px', height: '50px'}" v-model="msg" dark color="#676765" label="Mensaje" single-line solo-inverted></v-text-field>
                    </v-col>
                    <v-col cols="1"  align-self="right" justify="end">
                      <v-btn @click="setUser" :style="{width: '50px', height: '50px'}" fab dark small color="#DC851F" type="submit">
                        <v-icon  :style="{fontSize: '25px'}" dark>mdi-send</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center caption">
                    <v-icon dark color="red" :style="{fontSize: '15px'}"  >mdi-circle</v-icon>
                    <h3 class= "text">Chat en vivo</h3>
                  </v-row>
                </v-container>
                  </v-form>
              </v-card-actions>
            </v-col>
          </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-content>

      <Footer></Footer>
</v-app>
</div>
</template>

<script>

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { doc, getDoc, onSnapshot, query, collection, setDoc} from "firebase/firestore";
import{db} from "../main.js";

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
    logs: [],
    texto: [],
    msg: null,
    user: [],
  }),
  mounted(){
        this.url_data=this.$route.params.id;
    },
    created() {
      this.loadUser()
      this.leerChat()
    },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    submit() {
      this.logs.push(this.msg);
      this.msg = "";
    },
    async loadUser() {
    const userRef = doc(db, "users/"+this.$route.params.id); 
    try {
      const loadedUser = await getDoc(userRef);
      if (loadedUser !== null) {
        this.user = loadedUser.data(); 
        console.log(this.user);
      }
    } catch (error) {
      console.log(error);
    }
    },
  leerChat() {
    const q = query(
      collection(db, "chats")
    );
    onSnapshot(q, (querySnapshot) => {
      let mensajes = [];
      querySnapshot.forEach((doc) => {
        mensajes.push(doc.data())
      });
      this.logs=mensajes
      console.log(mensajes)
    })},

  async setUser(){
    await setDoc(doc(db, "chats/"+this.logs.length+1), {
    text: this.user.name+": " + this.msg,
    });
  },
    
  },
  watch: {
    logs() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  }
};
</script>

<style scoped>
.chatbox{
  background-color: #343330;
  
}
.text{
  color: white;
}
.elevation-12{
  /*max-width: 1200px;*/

}
</style>
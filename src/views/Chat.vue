
<template>
<div>
    <v-app>
    <Navbar></Navbar>
    


    <v-content>
      <v-card class="elevation-12" color="#D8D8D7">
      </v-card>
       <v-container fill-height>
       <v-row class="d-flex justify-center align-center">
        <v-col cols="10">
        <v-card class="elevation-12" color="#D8D8D7">
          
            <v-toolbar dark color="#343330">
              <v-toolbar-title>Chat</v-toolbar-title>
            </v-toolbar>
          
          <v-row>
            <v-col>
              <v-card-text>
                <v-list ref="chat" id="logs" :style="{minHeight: '200px'}">
                  <template v-for="(mensaje, index) in logs" >
                    <v-subheader v-if="mensaje" :key="index">{{mensaje.text}}</v-subheader>
                  </template>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-form @submit.prevent="submit" :style="{width: '100%'}">
                <v-container>
                  <v-row>
                    <v-col align-self="right" justify="right" cols="11">
                      <v-text-field v-model="msg"  label="Mensaje" single-line solo-inverted></v-text-field>
                    </v-col>
                    <v-col cols="1"  align-self="right" justify="end">
                      <v-btn @click="setUser" :style="{width: '50px', height: '50px', 'margin-left': '30px'}" fab dark small color="primary" type="submit">
                        <v-icon  :style="{fontSize: '25px'}" dark>mdi-send</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center caption">
                    <v-icon color="red" :style="{fontSize: '15px'}"  dark>mdi-circle</v-icon>
                    Chat en vivo
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
<template>
  <v-app>

    <Navbar></Navbar>
  
  

    <v-content>
      <router-view/>
    </v-content>


    <Footer></Footer>
    
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import{db} from "../main.js";

export default {
  name: 'Home',
  data: () => ({
    texto: "",
    drawer: false,
  }),
  components: {
    Navbar,
    Footer,
  },
  methods:{
    async loadUser() {
    const userRef = doc(db, "users/1");
    try {
      const loadedUser = await getDoc(userRef);
      if (loadedUser !== null) {
        const {
          name,
        } = loadedUser.data();
        console.log(name);
      }
    } catch (error) {
      console.log(error);
    }
    },
  async setUser(){
    await setDoc(doc(db, "users","US"), {
    name: "Los Angeles",
  });
    },
  async leerDatos(){
    onSnapshot(doc(db, "users", "LA"), (doc) => {
      this.texto=doc.data();
    console.log("Current data: ", doc.data());
    });
  }
  }
};
</script>

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

Vue.config.productionTip = false

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgWJ76oJj2szfeLD2CL_RsQkrLl6emKs8",
  authDomain: "frontend-ux.firebaseapp.com",
  projectId: "frontend-ux",
  storageBucket: "frontend-ux.appspot.com",
  messagingSenderId: "892906669711",
  appId: "1:892906669711:web:aa8df991eca8d4e232d2fa",
  measurementId: "G-715Y19MXNT"
};

// Initialize Firebase
let firebaseApp;

const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}
const db = getFirestore(firebaseApp, {});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export{db};
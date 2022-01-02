
<template>
<div>
    <v-app>
    <Navbar></Navbar>
    


    <v-content >
       <v-container >
       <h1 class="rounded-lg px-4 py-1" style="background:rgba(175,145,10,0.75);textAlign:center;">
         <font color="FFFFFF">
         Bienvenido a Ayuda Devance
         </font>
         </h1>
        <h3 class="rounded-lg px-4 py-1" style="background:rgba(0,0,0,0.75);">
          <font color="FFFFFF">
         En esta sección se da instrucciones de usabalidad de la plataforma, abarcando todos los
         los puntos para su eficiente utilziación.
         </font>
        </h3>
        <div class="rounded-lg px-4 py-1" style="background:rgba(50,50,50,0.75);">
          <h3> <font color="FFFFFF">
         <b>Sección 1: Mi Cuenta</b>
         </font></h3>
        <p> <font color="FFFFFF">
         En la parte superior de la página, se encuentra la barra de navegación, en la cual están 
         los botones para dirigirse a otras secciones de la página. Uno de estos botones es el 
         botón de Mi Cuenta, mostrado en la siguiente imagen:
        </font></p>
        <center>
        <img class="rounded-lg" src="../assets/MiCuentaNav.jpg" style="textAlign:center;width:750px;height:63px">
        </center>
        <p> <font color="FFFFFF">
         Al seleccionar aquel botón que en la imagen se ve enmarcado en azul, que solo se 
         representa por aquellas palabras correspondientes, se abre una página donde se 
         puede hacer seguimiento de ambas cuenta que posea el usuario, es decir, su cuenta
         corriente y su cuenta en cabildos. En ambas se puede visualizar tanto su número de
         cuenta como el saldo disponible en ambas cuentas.
        </font></p><br>

         <h3> <font color="FFFFFF">
         <b>Sección 2: Movimientos</b>
         </font></h3>
         <center>
         <img class="rounded-lg" src="../assets/MovimientosNav.jpg" style="textAlign:center;width:750px;height:55px">
         </center>
        <p> <font color="FFFFFF">
         En esta sección, se puede ver todas aquellas transacciones a las que se ha enviado
         solicitud, mostrando el estado si fueron aceptadas o rechazadas, como todas aquellas 
         solicitudes que se reciben, permitiendo aceptarlas o rechazarla. Ambas muestras la
         cuenta de origen, la cuenta de destino, la fecha límite y el monto de transferencia.
         Para el caso de las solicitudes recibidas, se tienen los botones Rechazar y Aprobar, 
         como se muestra en la siguiente imagen:
        </font></p>
         <center>
         <img class="rounded-lg" src="../assets/RechazarAprobar.jpg" style="textAlign:center;width:370px;height:75px">
         </center>
         <p> <font color="FFFFFF">
         Al presionar alguno de estos 2 botones, se abre una ventana de seguridad preguntando
         al usuario si el botón que presionó es la acción que desea llevar a cabo. Esto se debe
         al caso de que el botón haya sido presionado por error. La ventana vuelve a presentar 
         ambas opciones de botones para esa vez elegir el botón correcto, ya sea para rechazar
         o aprobar la transacción.
        </font></p><br>

        <h3> <font color="FFFFFF">
         <b>Sección 3: Realizar transferencia</b>
         </font></h3>
         <center>
         <img class="rounded-lg" src="../assets/RealizarTransferenciaNav.jpg" style="textAlign:center;width:760px;height:55px">
         </center>
         <p> <font color="FFFFFF">
         En esta sección, el usuario puede realizar una transferencia hacia la cuenta de un tercero
         que este dentro de la aplicación. El usuario puede elegir entre su cuenta corriente o su
         cuenta de cabildos. En ambas cuentas, se puede definir el monto a transferir, ya sea en
         pesos chilenos como en cabildos. Se define la fecha límite para que el otro usuario pueda
         aceptar o rechazar la solicitud. Para la selección de la cuenta a utilizar, se seleccionar
         la casilla de texto "Cuenta de Origen", abriendo una venta para seleccionar la cuenta,
         como se ve en la siguiente imagen:
        </font></p>
        <center>
         <img class="rounded-lg" src="../assets/CuentaCorriente.jpg" style="textAlign:center;width:400px;height:120px">
         </center>
         <p> <font color="FFFFFF">
         Para el destinatario, se debe seleccionar la casilla de texto "Cuenta de Destino" y
         escribir al quien de los otros usuarios le desea enviar la transferencia.
        </font></p>
        <p> <font color="FFFFFF">
         La siguiente casilla "Monto a Pagar" es para escribir la cantidad de pesos chilenos o cabildos,
         en números, que desea transferir.
        </font></p>
        <p> <font color="FFFFFF">
         Por último, esta la casilla extensible "Fecha de vencimiento", la cual debe ser
         seleccionada para fijar una fecha límite para que el usuario de destino tenga que
         aceptar o rechazar la solicitud. Esto se ve reflejado en la siguiente imagen:
        </font></p>
         <center>
         <img class="rounded-lg" src="../assets/FechaLimite.jpg" style="textAlign:center;width:400px;height:250px">
         </center>
         <p> <font color="FFFFFF">
         Una vez que se rellena el formulario para la solicitud de transferencias, al final de
         este, se encuentran los botones de Cancelar y Enviar Solicitud. Al presionar el botón 
         "Cancelar", se abre la siguiente ventana:
        </font></p>
        <center>
         <img class="rounded-lg" src="../assets/CancelarSolicitud.jpg" style="textAlign:center;width:400px;height:110px">
         </center>
         <p> <font color="FFFFFF">
         La ventana de la opción de cancelar o no la solocitud, en caso de seguridad. En caso
         que se presione el botón "SI", todo el formulario que se rellenó anteriormente se
         vacía, mostrando una ventana en la parte superior con el mensaje "¡Solicitud de
         transferencia cancelada!".
        </font></p>
        <p> <font color="FFFFFF">
        Con respecto al presionar el botón "Enviar Solicitud" del fomulario, se abre la siguiente
        ventana:
        </font></p>
        <center>
         <img class="rounded-lg" src="../assets/EnviarSolicitud.jpg" style="textAlign:center;width:400px;height:110px">
         </center>
         <p> <font color="FFFFFF">
         La ventana de la opción de enviar o no la solocitud, en caso de seguridad. En caso
         que se presione el botón "SI", todo el formulario que se rellenó anteriormente se
         vacía, mostrando una ventana en la parte superior con el mensaje "¡Solicitud de
         transferencia enviada!", mostrando en la sección de "Movimientos" la transacción
         pendiente.
         </font></p><br>

         <h3> <font color="FFFFFF">
         <b>Sección 4: Chats</b>
         </font></h3>
         <center>
         <img class="rounded-lg" src="../assets/ChatsNav.jpg" style="textAlign:center;width:760px;height:55px">
         </center>
          <p> <font color="FFFFFF">
         En esta sección, existe un chat interactivo con el resto de usuarios pertenecientes
         a la plataforma. El chat se muestra el centro de la página, en una sección de fondo
         blanco. Cada usuario tiene un color en específico para que sus mensajes sean
         diferenciados al resto de usuario. Para enviar un mensaje, existe abajo del cuadro de
         chat una casilla de texto para rellenar, en la cual se puede escribir el mensaje que se
         desea enviar al grupo del chat. Una vez listo el mensaje, a su lado derecho existe un
         botón que, al presionarlo, envía el mensaje al chat, monstrándolo el cuadro de
         mensajes. En la siguiente imagen se muetra la parte que la escritura y envío del mensaje:
         </font></p>
         <center>
         <img class="rounded-lg" src="../assets/Mensaje.jpg" style="textAlign:center;width:705px;height:100px">
         </center>

        </div>
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
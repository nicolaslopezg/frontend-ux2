import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Cuenta from '../views/Cuentas.vue'
import Factura from '../views/Transferencias.vue'
import Pago from '../views/Pagos.vue'
import Chat from '../views/Chat.vue'
import Ayuda from '../views/Ayuda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Inicio
  },
  {
    path: '/cuenta/:id',
    name: 'Cuentas',
    component: Cuenta
  },
  {
    path: '/Transferencias/:id',
    name: 'Facturas',
    component: Factura
  },
  {
    path: '/realizarTransferencia/:id',
    name: 'Pagos',
    component: Pago
  },
  {
    path: '/chat/:id',
    name: 'Chats',
    component: Chat
  },
  {
    path: '/ayuda/:id',
    name: 'Ayuda',
    component: Ayuda
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Cuenta from '../views/Cuentas.vue'
import Factura from '../views/Transferencias.vue'
import Pago from '../views/Pagos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/factura/:id',
    name: 'Facturas',
    component: Factura
  },
  {
    path: '/pago/:id',
    name: 'Pagos',
    component: Pago
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

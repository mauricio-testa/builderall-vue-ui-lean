import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Calendars from '../views/Calendars.vue'
import CalendarsNew from '../views/CalendarsNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendars',
    name: 'Calemndars',
    component: Calendars
  },
  {
    path: '/create',
    name: 'Crete',
    component: CalendarsNew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

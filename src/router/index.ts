import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import index from '@/views/index.vue'
import LP from '@/views/LP.vue'
import pruebaL from '@/views/pruebaL.vue'
import RegistroActividad from '@/views/RegistroActividad.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Registro',
      name: 'Registro',
      component: RegisterView
    },
    {
      path: '/AR',
      name: 'AR',
      component: RegistroActividad
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/l',
      name: 'l',
      component: pruebaL
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/LP',
      name: 'LP',
      component: LP 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

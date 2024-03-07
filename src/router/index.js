import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactsView',
    component:  () => import('../views/ContactsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router

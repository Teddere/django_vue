import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivityView from "@/views/ActivityView.vue";
import SingleActivityView from "@/views/SingleActivityView.vue";
import GymView from "@/views/GymView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/activities',
    name: 'activities',
    component: ActivityView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/activity',
    name: 'single_activity',
    component: SingleActivityView
  },
  {
    path: '/gym',
    name: 'gym',
    component:GymView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

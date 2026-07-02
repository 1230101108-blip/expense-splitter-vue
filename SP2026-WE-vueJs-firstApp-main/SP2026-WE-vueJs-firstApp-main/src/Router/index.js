import { createRouter, createWebHistory } from 'vue-router'
import Register from '../Views/Register.vue';
import Participants from '../Views/Participants.vue';
import Home from '../Views/Home.vue';
import History from '../Views/History.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/participants', component: Participants },
  { path: '/history', component: History }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
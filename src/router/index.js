import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import notFound from "../views/notFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },

  {
    path: "*",
    name: "404",
    component: notFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

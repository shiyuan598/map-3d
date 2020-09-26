import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue'),
  },
  {
    path: '/',
    name: 'List',
    component: () => import('../components/package/PackageList.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../components/package/PackageDetail.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

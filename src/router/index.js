import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () => import("../components/HelloWorld.vue")
  },
  {
    path: "/DatePicker",
    name: "DatePicker",
    component: () => import("../views/DatePicker.vue")
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue")
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/Table.vue")
  },
  {
    path: "/Tree",
    name: "Tree",
    component: () => import("../views/Tree.vue")
  },
  {
    path: "/region",
    name: "Region",
    component: () => import("../views/Region.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../components/package/PackageList.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../components/package/PackageDetail.vue")
  },
  {
    path: "/dag",
    name: "Dag",
    component: () => import("../views/DAG.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

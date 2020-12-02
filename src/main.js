import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vRegion from "v-region";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import DAGBoard from "dag-board";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(vRegion);
Vue.use(DAGBoard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

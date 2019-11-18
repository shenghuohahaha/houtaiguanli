// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//vuex
import vuex from "vuex";
Vue.use(vuex);

import "./assets/css/reset.css";
import "animate.css";
import axios from "axios";

//响应拦截
axios.interceptors.response.use(config=>{
  console.log("=============");
  
  console.log(config);
  if(config.data.code==-1){
    router.push('/login')
    return
  }
  return config
})

Vue.prototype.$axios = axios;




//全局组件
import comn from "./components/common";
for (var i in comn) {
  Vue.component(i, comn[i]);
}

//全局过滤
import Filter from "./filters/index";
for (var i in Filter) {
  Vue.filter(i, Filter[i]);
}
//全局守卫

router.beforeEach((to, from, next) => {
  if(to.path == "/index"){
    if(sessionStorage.getItem("type")){
      next()
      return
    }else{
      next('/login')
      return
    }
  }
  if (to.path == "/login") {
    next();
    return;
  }
  if (to.path.includes("manage")) {
    if (sessionStorage.getItem("type") == "0") {
      next();
    } else {
      next("/login");
    }
    return;
  }
  if (
    to.path.includes("banner") ||
    to.path.includes("teacher") ||
    to.path.includes("water") ||
    to.path.includes("house") ||
    to.path.includes("service") ||
    to.path.includes("pass")
  ) {
    if (sessionStorage.getItem("type") == "1") {
      next();
    } else {
      next("/login");
    }
    return;
  }
  next();
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

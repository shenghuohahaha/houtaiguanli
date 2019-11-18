import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//一级路由
const index = () => import("../pages/index.vue");
const login = () => import("../pages/login.vue");

//二级路由
const manage = () => import("../pages/manage.vue");
const banner = () => import("../pages/banner.vue");
const house = () => import("../pages/house.vue");
const teacher = () => import("../pages/teacher.vue");
const welcom = () => import("../pages/welcom.vue");
const water = () => import("../pages/water.vue");
const service = () => import("../pages/service.vue");
const pass = () => import("../pages/pass.vue");



export default new Router({
  routes: [
    {
      path: "/index",
      component: index,
      children: [
        {
          path: "",
          component: welcom
        },
        {
          path: "manage",
          component: manage,
          
        },
        {
          path: "banner",
          component: banner
        },
        {
          path: "teacher",
          component: teacher
        },
        {
          path: "water",
          component: water
        },
        {
          path: "house",
          component: house
        },
        {
          path: "service",
          component: service
        },
        {
          path: "pass",
          component: pass
        },
      ]
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

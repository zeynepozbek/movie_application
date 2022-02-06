import Vue from "vue"
import VueRouter from  "vue-router"

import HomePage from "./views/homePage"
import About from "./views/about"
import Detail from "./views/detail"

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {path: "/", name:"/", component: HomePage},
    {path: "/about", name:"about", component: About},
    {path: "/detail", name:"detail", component: Detail}
  ],
  mode: "history"
})

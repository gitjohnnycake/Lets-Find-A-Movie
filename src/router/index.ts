import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue"
import Login from "@/views/Login.vue"

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      "title": "首页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      "title": "登陆"
    }
  },
]

const router = createRouter({
  history,
  routes
})

export default router
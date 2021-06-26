import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue"
import Login from "@/views/Login.vue"
import MyList from "@/views/MyList.vue"

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
  {
    path: "/MyList",
    name: "MyList",
    component: MyList,
    meta: {
      "title": "我的片单"
    }
  },
]

const router = createRouter({
  history,
  routes
})

export default router
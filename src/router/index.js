import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    component:()=>import("../views/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/register.vue")
  },
  {
    path:"/index",
    component:()=>import("../views/index.vue"),
    children:[
      {
        path:"home",
        component:()=>import("../views/home.vue"),
      },
      {
        path:"cate",
        component:()=>import("../views/cate.vue"),
      },
      {
        path:"shop",
        component:()=>import("../views/shop.vue"),
      },
      {
        path:"mine",
        component:()=>import("../views/mine.vue"),
      },
      {
        path: "",
        redirect: "home"
      }
    ]
  },
  {
    path: "/list",
    component: () => import("../views/list.vue")
  },
  {
    path:"/detail",
    component:()=>import("../views/detail.vue")
  },
  {
    path:"/order",
    component:()=>import("../views/order.vue")
  },
  {
    path:"/addressList",
    component:()=>import("../views/addressList.vue")
  },
  {
    path:"/addressAdd",
    component:()=>import("../views/addressAdd.vue")
  },
  {
    path:"*",
    redirect: "/login"
  },
]

const router = new VueRouter({
  routes
})

export default router

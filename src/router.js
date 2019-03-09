import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: () =>
        import(/* webpackChunkName: "menuView" */ "./views/MenuView.vue")
    },
    {
      path: "/bills",
      name: "bills",
      component: () =>
        import(/* webpackChunkName: "BillsView" */ "./views/BillsView.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import(/* webpackChunkName: "adminView" */ "./views/AdminView.vue")
    }
  ]
});

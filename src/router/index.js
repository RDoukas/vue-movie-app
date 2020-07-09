import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import ActorsIndex from "../views/ActorsIndex.vue";
import ActorsNew from "../views/ActorsNew.vue";
import ActorsShow from "../views/ActorsShow.vue";
import ActorsEdit from "../views/ActorsEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/movies", name: "movies-index", component: MoviesIndex },
  { path: "/movies/new", name: "movies-new", component: MoviesNew },
  { path: "/movies/:id", name: "movies-show", component: MoviesShow },
  { path: "/movies/:id/edit", name: "movies-edit", component: MoviesEdit },
  { path: "/actors", name: "actors-index", component: ActorsIndex },
  { path: "/actors/new", name: "actors-new", component: ActorsNew },
  { path: "/actors/:id", name: "actors-show", component: ActorsShow },
  { path: "/actors/:id/edit", name: "actors-edit", component: ActorsEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;

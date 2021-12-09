import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from "../components/login/Login"
import signup from "../components/login/signup";
import Forum from '../components/forum/Forum';
import Logout from "../components/login/Logout";
import Read from "../components/forum/Read";
import Create from "../components/forum/Create";

const routes = [
    {path: '/login', component: Login , name: 'login'},
    {path:'/logout' , component: Logout},
    {path : '/signup' , component: signup , name: 'signup'},
    {path: '/forum' , component: Forum , name: 'forum'},
    {path: '/ask' , component: Create , name: 'AskQuestion'},
    {path:'/questions/:slug' , component: Read , name: 'read'},
]

const router = new VueRouter({
    routes, // short for `routes: routes`,
    mode: 'history'
})

export default router




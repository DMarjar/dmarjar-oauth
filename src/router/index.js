import Vue from 'vue'
import VueRouter from 'vue-router'
import {authGuard} from "@/oauth/authGuard.js";

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: "http://localhost:8080/",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            beforeEnter: authGuard
        }
    ]
})

export default router

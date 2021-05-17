import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register";
import Signin from '../components/Signin.vue';
import Home from "../components/Home";
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home,
        name:'Home',
    },
    {
        path: "/home",
        component: Home,
        name:'Home',
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Signin',
        name: 'Signin',
        component: Signin
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && store.state.token == null) {
        // redirect to login page
        next({ name: 'Signin' })
        return
    }

    // if logged in redirect to dashboard
    if(to.path === '/Signin' && store.state.token) {
        next({ name: 'Home' })
        return
    }

    next()
})
export default router
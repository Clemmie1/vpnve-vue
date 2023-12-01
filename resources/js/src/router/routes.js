import Home from "@/src/Pages/Home.vue";
import Login from "@/src/Pages/Auth/Login.vue";
import Register from "@/src/Pages/Auth/Register.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        component: Login
    },
    {
        path: '/auth/register',
        name: 'auth.register',
        component: Register
    }
];

export default routes;

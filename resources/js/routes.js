import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {   
        path: '/login',
        name: 'login',
        component: () => import('./auth/Login.vue'),
    },
    {   
        path: '/register',
        name: 'register',
        component: () => import('./auth/Register.vue'),
    },
    {   
        path: '/forget',
        name: 'forget',
        component: () => import('./auth/Forget.vue'),
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    linkActiveClass:"active",
    linkExactActiveClass:"exact-active"
});

export default router;
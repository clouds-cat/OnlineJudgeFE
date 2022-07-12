import { createRouter, createWebHashHistory } from "vue-router";
import {adminRoutes} from "./admin";

const routes = [
    ...adminRoutes,
    {
        path: '/',
        redirect: '/index',
        children: [
            {
                path: "/index",
                meta:{
                    // title:"?"
                },
                component: () => import("../views/oj/index.vue")
            }

        ],
    },
    {
        path: '/401',
        name: "401",
        component: () => import("../views/error/401.vue"),
        hidden: true,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "404",
        component: () => import("../views/error/404.vue"),
        hidden: true,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router";
import {adminRoutes} from "./admin";

const routes = [
    ...adminRoutes,
    {
        path: '/',
        name:'/',
        redirect: '/test',
        component: () => import("../layout/OJ.vue"),
        children: [
            {
                path: "/index",
                meta:{
                    // title:"?"
                },
                component: () => import("../views/oj/index.vue")
            },
            {
                path: "/test",
                meta: {},
                component: () => import("../views/oj/test.vue")
            },
            {
                path: "/test1",
                meta: {},
                component: () => import("../views/oj/test1.vue")
            },
            {
                path: "/test2",
                name: "Test2",
                component: () => import("../views/oj/test2.vue")
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
        path: '/finallytest',
        name: "finallytest",
        component: () => import("../views/oj/finallytest/index.vue"),
        hidden: true,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "404",
        component: () => import("../views/error/404.vue"),
        hidden: true,
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
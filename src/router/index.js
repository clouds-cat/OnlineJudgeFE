import { createRouter, createWebHashHistory } from "vue-router";
import {adminRoutes} from "./admin";

const routes = [
    ...adminRoutes,
    {
        path: '/',
        redirect: '/problems',
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
                path: "/problems",
                name: "Problems",
                component: () => import("../views/oj/problem/ProblemList.vue")
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
        path: '/problems/:problemId/',
        // path: '/problems/1001',
        name: "ProblemDetail",
        component: () => import("../views/oj/problem/ProblemDetail.vue"),
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
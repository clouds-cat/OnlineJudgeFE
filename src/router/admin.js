export const adminRoutes = [
    {
        path: '/admin',
        // name: "",
        // component: ,
        redirect: '/admin/home',
        beforeEnter: (to, from, next) => {
            // document.title = `${to.meta.title}`;
            // if(to.meta.permission) next();
            // else next("401");
        },
        children: [
            // {
            //     path: '',
            //     name: '',
            //     meta:{title: "首页"},
            //     component: () => import(),
            // },
        ]
    },
]
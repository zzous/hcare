const membermanage = [
    {
        path: "/",
        name: "layout",
        component: () => import("@/layout/index.vue"),
        children:[
            {
                path:"/memberinfo",
                name:"memberinfo",
                component:()=>import("@/views/membermanage/MemberInfo.vue"),
                meta: {
                    unauthorized: true,
                    sublocation_depth:['회원관리', '회원정보관리', '회원정보관리' ]
                },
            }, 
        ]
    }
]
export default membermanage;
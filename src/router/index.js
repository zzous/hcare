import { createRouter, createWebHistory } from 'vue-router'
import member from "@/router/modules/member.js"
// import membermanage from "@/router/modules/membermanage.js"

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/layout/Layout.vue"),
    },
    ...member,
    // ...membermanage,
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

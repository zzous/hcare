import { createRouter, createWebHistory } from 'vue-router'
import membermanage from "@/router/modules/membermanage.js"

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/layout/Index.vue"),
    },
    ...membermanage
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

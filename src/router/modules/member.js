const member = [
    {
        path: '/',
        name: 'member',
        component: () => import('@/layout/Layout.vue'),
        children: [
            {
                path: '/login',
                name: 'sign-in',
                component: () => import('@/views/member/SignIn.vue'),
                meta: {
                    unauthorized: true
                }
            }
        ]
    }
];
export default member;
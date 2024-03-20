// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Willkommen',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: { showParallax: true, showTitle: false}
      },
      {
        path: '/vermietung',
        name: 'Vermietung',
        component: () => import('@/views/Renting.vue'),
        meta: { showParallax: false, showTitle: true}
      },
      {
        path: '/kontakt',
        name: 'Kontakt',
        component: () => import('@/views/Contact.vue'),
        meta: { showParallax: false, showTitle: true}
      },
      {
        path: '/bilder',
        name: 'Bilder',
        component: () => import('@/views/Pictures.vue'),
        meta: { showParallax: false, showTitle: false}
      },
      {
        path: '/mitglied-werden',
        name: 'Mitglied werden',
        component: () => import('@/views/BecomeMember.vue'),
        meta: { showParallax: false, showTitle: true}
      },
      {
        path: '/datenschutzerklaerung',
        name: 'Datenschutzerklärung',
        component: () => import('@/views/PrivacyPolicy.vue'),
        meta: { showParallax: false, showTitle: true}
      },
      {
        path: '/impressum',
        name: 'Impressum',
        component: () => import('@/views/Imprint.vue'),
        meta: { showParallax: false, showTitle: true}
      },
      {
        path: '/anfahrt',
        name: 'Anfahrt',
        component: () => import('@/views/Directions.vue'),
        meta: { showParallax: false, showTitle: true}
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

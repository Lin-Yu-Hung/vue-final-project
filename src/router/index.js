import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  // 使用者介面
  {
    path: '/user',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'productlist',
        component: () => import('../views/ProductList.vue'),
        props: (route) => {
          console.log(route.query)
          return {
            query: route.query.query
          }
        }
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      }
    ]
  },
  // 管理這介面
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/Order.vue')
      },
      {
        path: 'coupon',
        component: () => import('@/views/Coupon.vue')
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router

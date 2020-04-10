// Layouts
import MainLayout from 'layouts/main-layout'
import RestoringLayout from 'layouts/restoring-layout'

// Pages
import Profile from 'pages/app/profile'
import Map from 'pages/app/map'
import Orders from 'pages/app/orders'
import Shop from 'pages/app/shop'

export default [{ // Auth Routes
  path: '/auth',
  redirect: 'auth/sign-in',
  component: () => import('layouts/auth-layout'),
  children: [{
    path: 'sign-in',
    name: 'signIn',
    component: () => import('pages/auth/sign-in')
  }, {
    path: 'sign-up',
    name: 'signUp',
    component: () => import('pages/auth/sign-up')
  }, {
    path: 'password-recovery',
    name: 'forgotPassword',
    component: () => import('pages/auth/forgot-password')
  }]
},

{
  // Restoring
  path: '/',
  component: RestoringLayout
},

{ // Main Routes
  path: '/app',
  component: MainLayout,
  redirect: '/app/shop',
  meta: {
    authRequired: true
  },
  children: [{
    path: 'profile',
    name: 'profile',
    component: Profile,
    meta: {
      authRequired: true
    }
  }, {
    path: 'map',
    name: 'map',
    component: Map,
    meta: {
      authRequired: true
    }
  }, {
    path: 'orders',
    name: 'orders',
    component: Orders,
    meta: {
      authRequired: true
    }
  }, {
    path: 'shop',
    name: 'shop',
    component: Shop,
    meta: {
      authRequired: true
    }
  }]
},

{ // Always leave this as last one
  path: '*',
  component: () => import('pages/404')
}
]

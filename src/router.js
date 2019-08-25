import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Store from './views/Store.vue'
import store from '@/store.js'

// Anytime you want to add a new view or component, include it here

Vue.use(Router)


const router = new Router({
  routes: [
    // path is URL
    // name is an easy way to access this route if you want to do something to it
    // component is the view you want to display
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    }
  ]
})

// This runs before we enter every route
// Calling next() allows us to enter the route
// to, from: these can be used if you want to do something special for a specific URL
router.beforeEach((to, from, next) => {
  if (store.state.dummy === null){
    store.commit('addDummyInfo')
    next()
  }
  else{
    next()
  }
})


export default router

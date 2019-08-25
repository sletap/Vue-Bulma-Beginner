import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
// Anytime you want to add a new view or component, include it here

Vue.use(Router)


export default new Router({
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
    }
  ]
})


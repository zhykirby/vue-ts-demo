import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound/NotFound.vue'

Vue.use(Router);

export function createRouter(){
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      },
      {
        path: '/404',
        name: 'notFound',
        component: NotFound
      },
      {
        path: '/test',
        component: () => import(/*webpackChunkName: "test" */ './views/test-index/TestIndex.vue'),
        children:[
          {
            path: '/',
            name: 'mai',
            component: () => import(/*webpackChunkName: "test" */ './components/test/mai.vue')
          },
          {
            path: '/test/other',
            name: 'other',
            component: () => import(/*webpackChunkName: "test" */ './components/test/other.vue')
          }
        ]
      }
    ],
  })
}


import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/views/Home';
import Search from '@/components/views/Search';
import Cart from '@/components/views/Cart';
import User from '@/components/views/User';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Router);
Vue.use(Swipe).use(SwipeItem);
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Grid).use(GridItem);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'user',
          component: User
        }
      ]
    },
  ]
})

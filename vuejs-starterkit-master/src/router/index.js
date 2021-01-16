import Vue from 'vue';
import Router from 'vue-router';
import HelloComponent from '@/components/Hello';
import RouterComponent from '@/components/Router';
import RouterChildComponent from '@/components/RouterChild';
import StoreComponent from '@/components/Store';
import DevelopComponent from '@/components/Develop';
import ServicesComponent from '@/components/Services';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.ROUTER_PREFIX,
  routes: [
    {
      path: '/services',
      name: 'services',
      component: ServicesComponent,
    },
    {
      path: '/develop',
      name: 'develop',
      component: DevelopComponent,
    },
    {
      path: '/',
      name: 'home',
      component: HelloComponent,
    },
    {
      path: '/store',
      name: 'store',
      alias: '/vuex',
      component: StoreComponent,
    },
    {
      path: '/router',
      component: RouterComponent,
      children: [
        {
          path: '',
          name: 'router',
          component: RouterChildComponent,
        },
        {
          path: ':child',
          component: RouterChildComponent,
        },
      ],
    },
    {
      path: '*',
      component: {
        functional: true,
        render(h) {
          return h('h1', 'Page not found!');
        },
      },
    },
  ],
});

export default router;

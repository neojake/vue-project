import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Login from '@/components/Login';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(Vuelidate);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

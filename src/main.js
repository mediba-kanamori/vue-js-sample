import Vue from 'vue';
import Router from 'vue-router'
import App from './App.vue'
import Hello from './components/Hello.vue';

const Fuga = Vue.extend({
  template: 'Fuga fuga!'
});

Vue.use(Router);

const router = new Router({
  history: true,
});

router.map({
  '/hello/': {
    component: Hello
  },

  '/fuga/': {
    component: Fuga
  },
});

router.start(App, '#app');

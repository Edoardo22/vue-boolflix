import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LangFlag from 'vue-lang-code-flags';
Vue.component('lang-flag', LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
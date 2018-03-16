import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import { Menu, Row, Submenu, Col, MenuItemGroup, MenuItem } from 'element-ui';

sync(store, router)

Vue.use(Menu);
Vue.use(Row);
Vue.use(Submenu);
Vue.use(Col);
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Feed from './pages/Feed.vue'
import Chat from './pages/Chat.vue'
import * as Config from './config'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: Config.rootPath, component: Home },
      { path: '/feeds', component: Feed },
      { path: '/chat', component: Chat },
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Feed from './pages/Feed.vue'
import Chat from './pages/Chat.vue'

Vue.use(VueRouter)

const rootPath = window.location.pathname

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: rootPath, component: Home },
      { path: '/feeds', component: Feed },
      { path: '/chat', component: Chat },
  ]
})
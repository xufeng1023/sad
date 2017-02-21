import Vue from 'vue'
import router from './router.js'
import store from './store'
import App from './App.vue'

// 'load', 'deviceready', 'offline', and 'online'.

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
   
    StatusBar.styleLightContent(true);
}
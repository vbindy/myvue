import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',

  router
})
// render: h => h(App)
// render: function (createElement) {
//   return createElement(App)  // 渲染<App/>
// }

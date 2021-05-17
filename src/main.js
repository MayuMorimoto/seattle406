import Vue from 'vue'
import App from './App.vue'

// LeafletのCSSを読み込み
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

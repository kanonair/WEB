import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'

Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

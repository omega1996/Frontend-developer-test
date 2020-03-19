import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import parse from './components/MarkdownParser'

Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        markdown(value) {
            return parse(value)
        }
    }
});

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');

import Vue from 'vue';
import TodoOutline from './todo-outline.vue'
import store from './store/store.js'


new Vue({
    el: 'div#main-body',
    store,
    components: {
        TodoOutline
    }
})

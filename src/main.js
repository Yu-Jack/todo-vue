import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoOutline from './todo-outline.vue';
import IndexPage from './index-page.vue';
import store from './store/store.js';

Vue.use(VueRouter)

const routes = [
    {
        path: '/todo', 
        component: TodoOutline,
    },
    {
        path: '/', 
        component: IndexPage,
    },
    {
        path: '*', 
        redirect: '/',
    },
]

const router = new VueRouter({
    routes
})

new Vue({
    el: 'div#main-body',
    store,
    router
})

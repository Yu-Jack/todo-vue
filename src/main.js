import Vue from 'vue';

Vue.component('my-component', {
    template: '<div><p>A custom component!</p></div>'
})

new Vue({
    el: 'div.main-body'
})
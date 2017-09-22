import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        lists: [],
        status: '',
        counter: 0
    },
    mutations: {
        addItem (state, new_item) {
            state.counter += 1
            new_item.id = state.counter
            state.lists.push(new_item)
        },
        changeStatus(state, id) {
            state.lists = state.lists.map((list) => {
                if (list.id === id) list.is_completed = !list.is_completed
                return list
            })
        },
        deleteItem(state, id) {
            state.lists = state.lists.filter((list) => {
                if (list.id === id) return false;
                return true;
            })
        }
    }
})

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        lists: [],
        // done, nondone, 空字串（代表 all）
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
            state.lists.forEach((list) => {
                if (list.id === id) {
                    list.is_completed = !list.is_completed
                }
            })
        },
        deleteItem(state, id) {
            state.lists = state.lists.filter((list) => list.id !== id)
        },
        setFilter (state, filter) {
            state.status = filter
        }
    },
    getters: {
        filtered_list (state) {
            // all
            if (state.status === '') {
                return state.lists
            }
            // done or nondone
            return state.lists.filter((todo) => {
                const todo_status = todo.is_completed === true ? 'done' : 'nondone'
                return state.status === todo_status
            })
        }
    }
})

export default store;
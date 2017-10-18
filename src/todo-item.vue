<template lang="html">
    <div>
        <table class="ui table stackable fixed">
            <thead>
                <tr>
                    <th colspan="3">Item</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list, index) in lists">
                    <td :class="{completed: list.is_completed}"> {{list.name}} </td>
                    <td>
                        <button class="ui icon inverted green button" @click="done(list.id)">
                            <i v-if="list.is_completed === false" class="checkmark icon"></i>
                            <i v-else class="reply icon"></i>
                        </button>
                    </td>
                    <td>
                        <button class="ui icon inverted red button" @click="remove(list.id)">
                            <i class="trash icon"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped lang="css">
.completed {
    text-decoration: line-through
}
</style>

<script>
export default {
    computed: {
        status () {
            return this.$store.state.status
        },
        lists() {
            return this.$store.getters.filtered_list
        }  
    },
    methods: {
        remove(id) {
            this.$store.commit('deleteItem', id)
        },
        done(id) {
            this.$store.commit('changeStatus', id)
        }
    }
}
</script>
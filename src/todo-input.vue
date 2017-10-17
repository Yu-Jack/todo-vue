<template lang="html">
    <div>
        <form class="ui form" @submit.prevent="submit">
            <div class="field">
                <label for="">List</label>
                <input type="text" v-model="item">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    methods: {
        submit() {
            this.$store.commit('addItem', {
                name: this.item,
                is_completed: false
            })
            this.item = ''
        }
    }
}
</script>
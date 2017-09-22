<template lang="html">
    <div>
        <form action="" class="ui form">
            <div class="field">
                <label for="">List</label>
                <input type="text" v-model="item" v-on:keyup.13="submit">
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
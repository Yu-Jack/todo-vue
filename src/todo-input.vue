<template lang="html">
    <div>
        <input type="text" v-model="item" v-on:keyup.13="submit">
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
            this.$store.state.lists.push(this.item)
            this.item = ''
        }
    }
}
</script>
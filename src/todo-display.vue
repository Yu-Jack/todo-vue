<template lang="html">
    <div>
        <select class="ui dropdown" v-model="status">
            <option value="">Show All</option>
            <option value="done">Show Done</option>
            <option value="nondone">Show None-done</option>
        </select>
    </div>
</template>
<script>
export default {
    computed: {
        status: {
            get () { 
                return this.$store.state.status
            },
            set (value) {
                this.$store.commit('setFilter', value)
            }
        }
    }
}
</script>
<template lang="html">
    <div>
        <select class="ui dropdown" v-model="status">
            <option value="">Show All</option>
            <option value="done" selected>Show Done</option>
            <option value="nondone">Show None-done</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            status: ""
        }
    },
    mounted() {
        this.$store.state.status = this.status
    },
    watch: {
        status(n_v, o_v) {
            this.$store.state.status = n_v
        }
    }
}
</script>
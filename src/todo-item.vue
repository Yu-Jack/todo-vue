<template lang="html">
    <div>
        <ul>
            <li v-for="list in lists">{{list}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: this.$store.state.lists
        }
    }
}
</script>
<template lang="html">
    <div>
        <todo-input></todo-input>
        <todo-item></todo-item>
    </div>
</template>
<script>
import TodoInput from './todo-input.vue';
import TodoItem from './todo-item.vue';
export default {
    components: {
        TodoInput,
        TodoItem
    }
}
</script>
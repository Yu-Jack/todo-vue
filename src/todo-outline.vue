<template lang="html">
    <div>
        <todo-input></todo-input>
        <br>
        <todo-display></todo-display>
        <br>
        <todo-item></todo-item>
    </div>
</template>
<script>
import TodoInput from './todo-input.vue';
import TodoDisplay from './todo-display.vue';
import TodoItem from './todo-item.vue';
export default {
    components: {
        TodoInput,
        TodoItem,
        TodoDisplay
    }
}
</script>

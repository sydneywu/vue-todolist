<template>
    <div class="home">
        <AddTodo/>
        <TodoListTable
                class="todoListTable"
        />
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddTodo from "@/containers/AddTodo.vue";
    import TodoListTable from "@/containers/TodoList.vue";

    export default {
        name: "home",
        components: {
            AddTodo,
            TodoListTable,
        },
        created: function () {
            this.$store.commit('retrieveTodoListFromStore')
        }
    };
</script>

<style scoped>
    .todoListTable {
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>
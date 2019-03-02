<template>
    <div class="container">
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="20" :md="18" :lg="12" :xl="8">
                <TodoTable />
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // @ is an alias to /src
    import TodoTable from "@/components/TodoTable.vue";

    export default {
        name: "TodoListTable",
        data() {
            return {
                todoItem: ''
            }
        },
        components: {
            TodoTable
        },
        methods: {
            handleCreated() {
                console.log('child has been created')
            },
            createTodo(todo) {
                console.log(todo)
                this.$store.commit('addTodo', todo)
            }
        }

    };
</script>

<style scoped>
    .container {

    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>

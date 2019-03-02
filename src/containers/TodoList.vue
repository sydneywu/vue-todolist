<template>
    <div class="container">
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="20" :md="18" :lg="12" :xl="8">
                <GeneralTable
                        @onCheck="onCheck"
                        @onDelete="onDelete"
                        :tableData="$store.getters.todoItems"
                />
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // @ is an alias to /src
    import GeneralTable from "@/components/GeneralTable.vue";
    import {editTodoItem} from "@/helpers/todoHelper.js"

    export default {
        name: "TodoListTable",
        data() {
            return {
                selectedTodo: ''
            }
        },
        components: {
            GeneralTable
        },
        methods: {
            onCheck(todoItem) {
                let editedTodo = editTodoItem({
                    ...todoItem,
                    isCompleted: true,
                });
                this.$store.commit('editTodo', editedTodo)
            },
            onDelete(todoItem) {
                this.$store.commit('deleteTodo', todoItem)
            },
            onEdit(todoItem){

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

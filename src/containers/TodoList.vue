<template>
    <div class="container">
        <GeneralModal>
            <InputWithButtons
                    label=""
                    inputPlaceholder="Edit task"
                    btnText="Update"
                    @onClick="confirmEditedTitle"
            />
        </GeneralModal>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="20" :md="18" :lg="12" :xl="8">
                <div class="filter">
                    <GeneralFilter
                            label="Filter By"
                            :filterOptions = "filterOptions"
                            :defaultFilter = "currentFilter"
                            @onChange = "onFilterChange"
                    />
                </div>
                <div>
                    <GeneralTable
                            @onCheck="onCheck"
                            @onDelete="onDelete"
                            :tableData="formattedTodoItems"
                    />
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // @ is an alias to /src
    import GeneralTable from "@/components/GeneralTable.vue";
    import GeneralFilter from "@/components/GeneralFilter.vue";
    import GeneralModal from "@/components/GeneralModal.vue";
    import InputWithButtons from "@/components/InputWithButtons.vue";
    import {editTodoItem, filterTodoItems} from "@/helpers/todoHelper.js"
    import {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED} from "@/constants/todoFilter.js"

    export default {
        name: "TodoListTable",
        data() {
            return {
                selectedTodo: '',
                filterOptions: [FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED],
                currentFilter: FILTER_ALL
            }
        },
        components: {
            GeneralTable,
            GeneralFilter,
            GeneralModal,
            InputWithButtons
        },
        computed: {
            formattedTodoItems: function(){
                return filterTodoItems({
                    todoItems: this.$store.getters.todoItems,
                    filter: this.currentFilter
                })
            }
        },
        methods: {
            onCheck(todoItem) {

                let editedTodo = editTodoItem({
                    ...todoItem,
                    isCompleted: todoItem.isCompleted,
                });
                this.$store.commit('editTodo', editedTodo)

            },
            onDelete(todoItem) {
                this.$store.commit('deleteTodo', todoItem)
            },
            onEdit(todoItem){
                console.log(todoItem)
            },
            onFilterChange(filterValue){
                this.currentFilter = filterValue;
            },
            updated(){
                console.log(this.$store.getters.todoItems)
            },
            confirmEditedTitle(title){
                console.log(title)
            }

        }
    };
</script>

<style scoped>
    .container {

    }
    .filter {
        float: right;
        margin-bottom: 10px
    }
</style>

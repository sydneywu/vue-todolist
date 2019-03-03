<template>
    <div class="container">
        <GeneralModal
                :modalOpen="editModalOpen"
                @onCloseModal="onCloseEditModal"
                :cancelBtn="false"
                :confirmBtn="false"
        >
            <InputWithButtons
                    label=""
                    inputPlaceholder="Edit task"
                    btnText="Update"
                    @onClick="confirmEditedTitle"
                    :initialValue = "selectedTodo.title"
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
                            @onEdit="onEdit"
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
                selectedTodo: {},
                filterOptions: [FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED],
                currentFilter: FILTER_ALL,
                editModalOpen: false,
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
                    filter: this.currentFilter,
                    selectedTodoItem: this.selectedTodoItem
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
                this.selectedTodo = todoItem;
                this.$nextTick(function () {
                    this.editModalOpen = true;
                });
            },
            onFilterChange(filterValue){
                this.currentFilter = filterValue;
                this.editModalOpen = false;
            },
            confirmEditedTitle(title){
                let editedTodo = editTodoItem({
                    ...this.selectedTodo,
                    title: title
                });
                this.$store.commit('editTodo', editedTodo)
                this.editModalOpen = false;
            },
            onCloseEditModal(){
                this.editModalOpen = false
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

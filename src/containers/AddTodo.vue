<template>
    <div class="about">
        <InputWithButtons
                label=""
                inputPlaceholder="Add a task"
                btnText="Create"
                @onClick="createTodo"
        />
    </div>
</template>

<script>
    // @ is an alias to /src
    import InputWithButtons from "@/components/InputWithButtons.vue";
    import {createTodoItem} from "@/helpers/todoHelper.js";

    export default {
        name: "Addtodo",
        data() {
            return {
                todoItem: ''
            }
        },
        components: {
            InputWithButtons: InputWithButtons
        },
        methods: {
            createTodo(todoTitle) {
                let newTodoItem = createTodoItem({title: todoTitle});
                this.$store.dispatch({type: 'addTodo', todoItem: newTodoItem})

            }
        }

    };
</script>

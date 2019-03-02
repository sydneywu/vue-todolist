<template>
    <div class="about">
        <InputWithButtons
                post-title="hello!"
                label="Todo"
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
            handleCreated() {
                console.log('child has been created')
            },
            createTodo(todoTitle) {
                console.log(todoTitle)
                let newTodoItem = createTodoItem({title: todoTitle});
                this.$store.commit('addTodo', newTodoItem)
            }
        }

    };
</script>

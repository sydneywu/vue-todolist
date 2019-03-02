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
            createTodo(todo) {
                console.log(todo)
            }
        }

    };
</script>

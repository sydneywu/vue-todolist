<template>
    <div class="about">
        <AddTodo />
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddTodo from "@/containers/AddTodo.vue";

    export default {
        name: "About",
        data(){
            return {
                todoItem: ''
            }
        },
        components: {
            AddTodo
        },

    };
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AddTodo />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from "@/containers/AddTodo.vue";

export default {
  name: "home",
  components: {
      AddTodo
  }
};
</script>

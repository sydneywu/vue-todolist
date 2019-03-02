<template>
  <div id="app">
    <div id="nav">
      <h2 class="primary-color">Simple Todo List</h2>
    </div>
    <router-view />
  </div>
</template>

<style>
body{
  background-color: #f4f4f4

}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.primary-color{
  color: #409EFF
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

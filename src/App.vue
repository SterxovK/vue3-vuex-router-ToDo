<template>
  <div id="app">
    <nav>
      <router-link to="/">Task Manager</router-link>
      |
      <router-link to="/contacts">My Contacts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
  padding: 0;
  background: #bbf1c8;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0px auto;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
<script setup>
</script>
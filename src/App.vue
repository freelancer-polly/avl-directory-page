<template>
  <div id="app">
    <div class="container is-fluid app-header">
      <div class="columns">
        <div class="column has-text-left">
          <h1 class="title is-size-6"><i class="fa fa-trademark has-text-danger"></i> your workspace</h1>
        </div>
        <div class="column has-text-right">
          <ul>
            <li>
              <i class="fa fa-envelope-o"></i>
            </li>
            <li>
              <i class="fa fa-bell-o"></i>
            </li>
            <li>
              <i class="fa fa-user-circle-o"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  background: #ebeff2;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.app-header {
  padding: 0.5rem;
  background: #fff;
  margin-bottom: 2em;
}
@media screen and (min-width: 1024px) {
  #app > div.container.is-fluid.app-header {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

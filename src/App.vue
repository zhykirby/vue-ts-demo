<template>
  <div id="app">
    <div id="nav">
      <p>Cloudy</p>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import component from 'vue-class-component'

@component({})
export default class App extends Vue{

}
</script>

<style lang="less">
//background: url('./assets/img/post-bg-new.jpg') no-repeat center center;
//  background-attachment: scroll;
//  background-size: cover;
body{
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 70px;
  background: url('./assets/img/post-bg-new-cloud.jpg') no-repeat center center;
  background-attachment: scroll;
  background-size: cover;
  color:#fff;
  p{
    font-size: 50px;
    font-weight: bold;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

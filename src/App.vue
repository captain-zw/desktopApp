<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HomePage msg="这是一个桌面端应用hh"/>
  <router-link to="/test">测试</router-link><br>
  <router-link to="/1111">路由</router-link>
  <router-view></router-view>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

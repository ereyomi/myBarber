<template>
  <div id="app">
    <Header/>
    <Brand/>
    <Ourservices/>
    <PlanAndPrice/>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Brand from './layout/Brand.vue'
import PlanAndPrice from './layout/PlanAndPrice'
import Ourservices from './layout/Ourservices'


export default {
  name: 'App',
  components: {
    Header,
    Brand,
    PlanAndPrice,
    Ourservices,
  }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

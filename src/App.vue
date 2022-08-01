<template>
  <weather-resources></weather-resources>
</template>

<script>
import WeatherResources from './components/resources/WeatherResources.vue';

export default {
  data() {
    return {
      userPos: null
    }
  },
  components: {
    WeatherResources
  }
}
</script>

<style>
#app {
  width: 50%;
  margin-left: 25%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

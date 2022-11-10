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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@100&display=swap');

html {
  background-color: #545E75;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  background-image: url('@/assets/background.jpg');
  background-size: 260%;
  background-position: 40%;
  background-repeat: no-repeat;
  opacity: 0.6;
  border: 1px solid black;
  border-radius: 12px;
  font-family: Merriweather, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 380px;
  height: 548px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8rem;
  color: #304d6d;
  box-shadow: -20px -20px 60px #3d3d3d,
    20px 20px 60px rgb(0, 0, 0);
  overflow-x: auto;
}

#app::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <card-info class="few-days-card">
    <h4>{{ date }}</h4>
    <div>
      <img :src="weatherImage" />
      <p>{{ weather }}</p>
    </div>
      <ul>
        <li class="max">{{ maxCelcius }}°</li>
        <li class="min">{{ minCelcius }}°</li>
      </ul>
  </card-info>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
export default {
  components: {
    BaseCard
  },
  props: ["date", "weather", "minCelcius", "maxCelcius", "humidity"],
  data() {
    return {
      weatherImage: require('@/assets/' + this.weather + '.png')
    }
  }
};
</script>

<style scoped lang="scss">
.few-days-card {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  text-align: center;
  align-items: center;
  position: relative;

  h4 {
    position: absolute;
    top: -35px;
    left: -5px;
  }

  img {
    width: 60px;
  }

  p {
    font-size: 0.6rem;
    text-align: left;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    .max {
      font-size: 1.3rem;
    }
  }
}
</style>

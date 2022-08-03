<template>
  <base-card class="few-days-card">
    <div>
      <span>{{ weather }}</span>
      <span>{{ humidity }}</span>
    </div>
    <div>
      <ul>
        <li><span class="min">{{ minCelcius }}</span>°</li>
        <li><span class="max">{{ maxCelcius }}</span>°</li>
      </ul>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
export default {
  components: {
    BaseCard
  },
  props: ["weather", "minCelcius", "maxCelcius", "humidity"],
};
</script>

<style scoped>
.few-days-card {
  max-width: 10rem;
  display: flex;
  justify-content: space-between;
}

ul {
  list-style-type: none;
}

.min {
  color: rgb(33, 116, 188);
}

.max {
  color: rgb(210, 40, 40);
}
</style>

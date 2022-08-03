<template>
    <base-card class="weather-card">
        <base-button @click="setSelected('detail-one-day')" :mode="oneDayButtonMode">Today</base-button>
        <base-button @click="setSelected('detail-few-days')" :mode="fewDaysButtonMode">4 days</base-button>
        <keep-alive>
            <component :is="selected"></component>
        </keep-alive>
    </base-card>
</template>

<script>
import DetailOneDay from '../../pages/weather-one-day/DetailOneDay.vue';
import DetailFewDays from '../../pages/weather-few-days/DetailFewDays.vue';

export default {
    components: {
        DetailOneDay,
        DetailFewDays
    },

    data() {
        return {
            selected: 'detail-one-day',
        }
    },
    computed: {
        oneDayButtonMode() {
            return this.selected === 'detail-one-day' ? null : 'flat'
        },
        fewDaysButtonMode() {
            return this.selected === 'detail-few-days' ? null : 'flat'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        },
    }
}
</script>

<style scoped>
.weather-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background: rgb(36,0,6);
    background: linear-gradient(0deg, rgba(0, 9, 49, 0.7) 0%, rgba(12, 129, 153, 0.6) 35%, rgba(32, 218, 255, 0.5) 100%);
}
</style>
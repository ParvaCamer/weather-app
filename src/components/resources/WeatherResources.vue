<template>
    <div class="div-content">
        <the-header @send-tab="getTab" @send-newCoord="getNewCoord"></the-header>
        <keep-alive>
            <component :is="selected" :newCoord="newCoord"></component>
        </keep-alive>
    </div>
</template>

<script>
import DetailOneDay from '../../pages/weather-one-day/DetailOneDay.vue';
import DetailFewDays from '../../pages/weather-few-days/DetailFewDays.vue';
import TheHeader from '@/pages/header/Header.vue';

export default {
    components: {
        DetailOneDay,
        DetailFewDays,
        TheHeader
    },
    data() {
        return {
            selected: 'detail-one-day',
            newCoord: {}
        }
    },
    methods: {
        getTab(event) {
            this.selected = event
        },
        getNewCoord(value) {
            this.newCoord = value;
        }
    }
}
</script>
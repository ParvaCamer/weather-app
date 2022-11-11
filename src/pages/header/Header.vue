<template>
    <div class="content">
        <base-button @click="setSelected('detail-one-day')" :mode="oneDayButtonMode">Today</base-button>
        <base-button @click="setSelected('detail-few-days')" :mode="fewDaysButtonMode">More days</base-button>
        <search @send-newCoord="getNewCoord"></search>
    </div>
</template>

<script>
import Search from './Search.vue';

export default {
    components: {
        Search
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
            this.$emit('send-tab', tab)
        },
        getNewCoord(value) {
            this.$emit('send-newCoord', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    margin: 30px 0 15px;
    display: flex;
    justify-content: center;
}
</style>
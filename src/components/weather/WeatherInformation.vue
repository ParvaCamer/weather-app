<template>
    <base-card id="base-card">
        <h3>{{city}}</h3>
        <img :src="weatherImage"/>
        <p>{{celcius}}°C</p>
    </base-card>
</template>

<script>
export default {
    props: ['city', 'celcius', 'weather', 'sendNight'],
    data() {
        return {
            weatherImage: require('@/assets/' + this.weather + '.png')
        }
    },
    mounted() {
        if (this.sendNight) {
            this.weatherImage = require('@/assets/' + this.weather + 'Moon.png')
        }
    }
}
</script>

<style lang="scss" scoped>
#base-card {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.7fr 0.3fr;
    text-align: center;
    align-items: center;

    h3 {
        grid-row: 1;
        text-align: left;
        padding-left: 20px;
        margin: 0;
    }
    img {
        grid-row: 1/3;
        grid-column: 2;
        width: 70%;
    }
    p {
        grid-row: 2;
        font-size: 1.8rem;
        margin: 0;
        font-weight: bold;
        position: relative;
        right: 20px;
    }
}
</style>
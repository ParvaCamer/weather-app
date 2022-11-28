<template>
    <div id="base-card">
        <h3>{{ city }}</h3>
        <img :src="weatherImage" />
        <div class="weather">
            <span class="celcius">{{ celcius }}°C</span> 
            <span class="stick">|</span>
            <span class="description">{{ description }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['city', 'celcius', 'weather', 'description', 'sendNight'],
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
    margin: 55px 0 40px 0;

    h3 {
        grid-row: 1;
        margin: 0;
        font-size: 1.5rem;
    }

    img {
        grid-row: 1/3;
        grid-column: 2;
        width: 70%;
    }

    .weather {
        grid-row: 2;
        font-weight: bold;
        span.celcius {
            margin: 0;
            font-size: 1.5rem;
        }
        span.stick {
            margin-left: 10px;
            font-size: 1.2rem;
        }
        span.description {
            margin: 0;
            margin-left: 10px;
            font-size: 1rem;
        }
    }
}
</style>
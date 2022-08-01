<template>
    <base-card class="weather-card">
        <base-button @click="setSelected('detail-one-day')" :mode="oneDayButtonMode">Today</base-button>
        <base-button @click="setSelected('detail-few-days')" :mode="fewDaysButtonMode">4 days</base-button>
        <component :is="selected" :resourcesOneDay="resourcesOneDay" :resourcesFewDays="resourcesFewDays"></component>
    </base-card>
</template>

<script>
import DetailOneDay from '../../pages/weather-one-day/DetailOneDay.vue';
import DetailFewDays from '../../pages/weather-few-days/DetailFewDays.vue';
import axios from 'axios'

export default {
    components: {
        DetailOneDay,
        DetailFewDays
    },
    data() {
        return {
            selected: 'detail-one-day',
            userPosition: null,
            resourcesOneDay: [],
            resourcesFewDays: [],
            canGetData: false
        }
    },
    mounted() {
        if (window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition)
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
        getPosition(position) {
            this.userPosition = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            }
            this.canGetData = true
            this.getWeatherData()
        },
        getWeatherData() {
            axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.userPosition.lat}&lon=${this.userPosition.long}&exclude={part}&appid=1e89e777e7ae940dd37bce76c14bd304&units=metric`)
                .then(response => {
                    const currentday = response.data.current
                    console.log(response.data)
                    const weatherCurrentDay = {
                        celcius: Math.round(currentday.temp),
                        weather: currentday.weather[0].main,
                        uvi: currentday.uvi,
                        humidity: currentday.humidity,
                        pressure: currentday.pressure,
                        windDegrees: currentday.wind_deg,
                        windSpeed: currentday.wind_speed,
                    }
                    this.resourcesOneDay.push(weatherCurrentDay)

                    const daily = response.data.daily
                    for (let i = 0; i < 5; i++) {
                        const weatherDailyDay = {
                            minCelcius: Math.round(daily[i].temp.min),
                            maxCelcius: Math.round(daily[i].temp.max),
                            weather: daily[i].weather[0].main,
                            humidity: daily[i].humidity
                        }
                        this.resourcesFewDays.push(weatherDailyDay)
                    }
                })
        },
        setSelected(tab) {
            this.selected = tab;
        },
    }
}
</script>

<style scoped>
.weather-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
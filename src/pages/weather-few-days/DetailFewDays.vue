<template>
    <ul>
        <weather-more-days v-for="resource in resourcesFewDays" :key="resource.id" :minCelcius="resource.minCelcius"
            :maxCelcius="resource.maxCelcius" :weather="resource.weather" :humidity="resource.humidity"></weather-more-days>
    </ul>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import WeatherMoreDays from '@/components/weather/WeatherMoreDays.vue';
import axios from 'axios';

export default {
    components: {
        BaseCard,
        WeatherMoreDays
    },
    data() {
        return {
            userPosition: null,
            resourcesFewDays: []
        }
    },
    mounted() {
        if (window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition)
        }
    },
    methods: {
        getPosition(position) {
            this.userPosition = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            }
            this.getWeatherData();
        },
        getWeatherData() {
            axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.userPosition.lat}&lon=${this.userPosition.long}&exclude={part}&appid=1e89e777e7ae940dd37bce76c14bd304&units=metric`)
                .then(response => {
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
    }
}
</script>
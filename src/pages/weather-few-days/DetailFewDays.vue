<template>
    <base-card>
        <div class="grid-few-days">
            <weather-more-days v-for="resource in resourcesFewDays" :key="resource.id" :date="resource.date"
                :minCelcius="resource.minCelcius" :maxCelcius="resource.maxCelcius" :weather="resource.weather"
                :humidity="resource.humidity">
            </weather-more-days>
        </div>
    </base-card>
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
                    for (let i = 0; i < 6; i++) {
                        var newDate = new Date(new Date().getTime() + ((i + 1) * 24 * 60 * 60 * 1000)) //to get the 5 next days
                        const options = { weekday: 'long', month: 'long', day: 'numeric' }
                        let finalDate = new Intl.DateTimeFormat('en-US', options).format(newDate)
                        const weatherDailyDay = {
                            date: finalDate,
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

<style lang="scss" scoped>
.grid-few-days {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
}
</style>
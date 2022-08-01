<template>
    <div v-for="resource in resourcesOneDay" :key="resource.id">
        <weather-information 
            :celcius="resource.celcius"
            :weather="resource.weather">
        </weather-information>
        <more-information
            :humidity="resource.humidity"
            :pressure="resource.pressure"
            :windDegrees="resource.windDegrees"
            :windSpeed="resource.windSpeed"
            :uvi="resource.uvi">
        </more-information>
    </div>
</template>

<script>
import WeatherInformation from '../../components/weather/WeatherInformation.vue';
import MoreInformation from '../../components/weather/MoreInformation.vue';
import axios from 'axios';

export default {
    components: {
        WeatherInformation,
        MoreInformation
    },
    data() {
        return {
            userPosition: null,
            resourcesOneDay: []
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
                })
        },
    }
}
</script>
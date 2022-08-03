<template>
    <div v-for="resource in resourcesOneDay" :key="resource.id">
        <weather-information 
            :city="cityName"
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
            resourcesOneDay: [],
            cityName: ''
        }
    },
    mounted() {
      if (window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition)
        }
    },
    methods: {
    getPosition(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.getWeatherData(lat, long);
      this.getCity(lat, long);
    },
    getWeatherData(lat, long) {
      axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=1e89e777e7ae940dd37bce76c14bd304&units=metric`
        )
        .then((response) => {
          const currentday = response.data.current;
          const weatherCurrentDay = {
            celcius: Math.round(currentday.temp),
            weather: currentday.weather[0].main,
            uvi: currentday.uvi,
            humidity: currentday.humidity,
            pressure: currentday.pressure,
            windDegrees: currentday.wind_deg,
            windSpeed: currentday.wind_speed,
          };
          this.resourcesOneDay.push(weatherCurrentDay);
        });
    },
    getCity(lat, long) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCKXKFzbZfMGUTju6JTgfaROABudepjWKU`
        )
        .then((response) => {
          this.cityName = response.data.results[0].address_components[2].long_name
        });
    },
  },
}
</script>
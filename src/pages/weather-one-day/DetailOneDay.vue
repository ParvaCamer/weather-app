<template>
  <div class="div-detail-one-day" v-for="resource in resourcesOneDay" :key="resource.id">
    <weather-information :key="componentKey" :city="cityName" :celcius="resource.celcius" :weather="resource.weather" :description="resource.description"
      :sendNight="isItTheNight()">
    </weather-information>
    <weather-hourly :key="componentKey" :hourly="resource.hourly" :sendNight="isItTheNight()">
    </weather-hourly>
    <more-information :key="componentKey" :sunrise="resource.sunrise" :sunset="resource.sunset"
      :humidity="resource.humidity" :pressure="resource.pressure" :windDegrees="resource.windDegrees"
      :windSpeed="resource.windSpeed" :uvi="resource.uvi">
    </more-information>
  </div>
</template>

<script>
import WeatherInformation from '../../components/weather/WeatherInformation.vue';
import WeatherHourly from '../../components/weather/WeatherHourly.vue';
import MoreInformation from '../../components/weather/MoreInformation.vue';
import axios from 'axios';

export default {
  components: {
    WeatherInformation,
    WeatherHourly,
    MoreInformation
  },
  props: ['newCoord'],
  data() {
    return {
      resourcesOneDay: [],
      cityName: '',
      componentKey: 0
    }
  },
  mounted() {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition)
    }
  },
  watch: {
    newCoord() {
      this.resourcesOneDay = [];
      this.getWeatherData(this.newCoord.lat, this.newCoord.lon);
      this.getCity(this.newCoord.lat, this.newCoord.lon)
      this.resourcesFewDays = [];
      this.componentKey += 1;
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
          var currentday = response.data.current;
          var hourlyCurrentDay = response.data.hourly;
          let hourlyData = [];
          for (let i = 0; i < 12; i++) {
            hourlyData.push(hourlyCurrentDay[i])
          }
          const weatherCurrentDay = {
            sunrise: currentday.sunrise,
            sunset: currentday.sunset,
            celcius: Math.round(currentday.temp),
            weather: currentday.weather[0].main,
            description: currentday.weather[0].description[0].toUpperCase() + currentday.weather[0].description.slice(1),
            uvi: currentday.uvi,
            humidity: currentday.humidity,
            pressure: currentday.pressure,
            windDegrees: currentday.wind_deg,
            windSpeed: currentday.wind_speed,
            hourly: hourlyData
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
    isItTheNight() {
      var now = new Date();
      var timeSunset = new Date(this.resourcesOneDay[0].sunset * 1000);
      var timeSunrise = new Date(this.resourcesOneDay[0].sunrise * 1000);
      let isNight = false;
      if ((now.getTime() <= timeSunrise.getTime()) || timeSunset.getTime() <= now.getTime()) {
        isNight = true;
        const background = document.getElementById('app').style
        background.backgroundImage = 'url(https://www.itl.cat/pngfile/big/186-1868057_blue-moon-night-sky-wallpaper-cloud-sky-night.jpg)';
        background.backgroundPosition = '75%';
      }
      return isNight;
    }
  },
}
</script>
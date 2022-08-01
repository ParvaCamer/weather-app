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

export default {
    components: {
        WeatherInformation,
        MoreInformation
    },
    props: ['resourcesOneDay'],
}
</script>
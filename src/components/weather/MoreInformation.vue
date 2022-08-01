<template>
    <base-card>
        <h2>More information</h2>
        <p>-{{humidity}}</p>
        <p>{{pressure}}hPa</p>
        <p>-{{windDirection}}</p>
        <p>-{{windSpeedPerHour}} km/h</p>
        <p>-{{uvi}}</p>
    </base-card>
</template>

<script>
export default {
    props: ['humidity', 'pressure', 'windDegrees', 'windSpeed', 'uvi'],
    computed: {
        windSpeedPerHour() {
            return Math.round(this.windSpeed * 3.6)
        },
        windDirection() {
            if ( this.windDegrees >= 22.5 && this.windDegrees < 67.5) {
                return 'North-East'
            } 
            if (this.windDegrees >= 67.5 && this.windDegrees < 112.5 ) {
                return 'East'
            }
            if (this.windDegrees >= 112.5 && this.windDegrees < 157.5) {
                return 'South-East'
            }
            if (this.windDegrees >= 157.5 && this.windDegrees < 202.5) {
                return 'South'
            }
            if (this.windDegrees >= 202.5 && this.windDegrees < 247.5) {
                return 'South-West'
            }
            if (this.windDegrees >= 247.5 && this.windDegrees < 292.5) {
                return 'West'
            }
            if (this.windDegrees >= 292.5 && this.windDegrees < 337.5) {
                return 'North-West'
            }
            else {
                return 'North'
            }
        }
    }
}
</script>
<template>
    <base-card id="card-more-info">
        <h3>About the day</h3>
        <p class="date">{{ dateOfTheDay }}</p>
        <div id="div-info">
            <card-info class="content-info">
                <article>
                    <label>Sunrise</label>
                    <img src="@/assets/sunrise.png" alt="humidity" />
                    <p>{{ getSunrise }}</p>
                </article>
            </card-info>
            <card-info class="content-info">
                <article>
                    <label>Sunset</label>
                    <img src="@/assets/sunset.png" alt="humidity" />
                    <p>{{ getSunset }}</p>
                </article>
            </card-info>
            <card-info class="content-info">
                <article>
                    <label>Humidity</label>
                    <img src="@/assets/humidity.png" alt="humidity" />
                    <p>{{ humidity }}%</p>
                </article>
            </card-info>
            <card-info class="content-info">
                <article>
                    <label>{{ windDirection }} wind</label>
                    <img src="@/assets/direction_wind.png" alt="wind_direction" />
                    <p>{{ windSpeedPerHour }}km/h</p>
                </article>
            </card-info>
            <card-info class="content-info">
                <article>
                    <label>Air pressure</label>
                    <img src="@/assets/barometer.png" alt="barometer" />
                    <p>{{ pressure }}hPa</p>
                </article>
            </card-info>
            <card-info class="content-info">
                <article>
                    <label>UV index</label>
                    <img src="@/assets/uv_index.png" />
                    <p>{{ uvi }}</p>
                </article>
            </card-info>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['sunrise', 'sunset', 'humidity', 'pressure', 'windDegrees', 'windSpeed', 'uvi'],
    computed: {
        getSunrise() {
            var date = new Date(this.sunrise * 1000);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            return hours + ":" + minutes
        },
        getSunset() {
            var date = new Date(this.sunset * 1000);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            
            return hours + ":" + minutes;
        },
        windSpeedPerHour() {
            return Math.round(this.windSpeed * 3.6)
        },
        windDirection() {
            if (this.windDegrees >= 22.5 && this.windDegrees < 67.5) {
                return 'North-East'
            }
            if (this.windDegrees >= 67.5 && this.windDegrees < 112.5) {
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
        },
        dateOfTheDay() {
            const today = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric' }
            return new Intl.DateTimeFormat('en-US', options).format(today)
        },
    }
}
</script>

<style lang="scss" scoped>
#card-more-info {
    padding-top: 1px;
}
h3 {
    padding-left: 20px;
    opacity: 0.6;
}

#div-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;

    article {
        label {
            position: relative;
            text-align: left;
            font-size: 0.75rem;
        }

        p {
            margin: 0.3rem;
            opacity: 0.75;
        }

        img {
            width: 2rem;
            float: right;
        }
    }
}

.date {
    position: relative;
    margin: 0;
    padding-left: 20px;
    font-size: 0.85rem;
    text-align: left;
}

@media screen and (max-width: 408px) {
    .content-info {
        width: 100px !important;
    }
}
</style>
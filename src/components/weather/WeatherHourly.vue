<template>
    <base-card id="card-hourly">
        <h3>Hourly forecast</h3>
        <div class="div-hourly-flex">
            <div class="div-hourly-data" v-for="hour in hourly" :key="hour.id">
                <p> {{ convertToTime(hour.dt) }}</p>
                <img :src="getHourlyImage(hour.weather[0].main)" />
                <p>{{ getTemp(hour.temp) }}</p>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['hourly', 'sendNight'],
    methods: {
        getTemp(e) {
            return Math.round(e)
        },
        getHourlyImage(e) {
            if (this.sendNight) {
                return require('@/assets/' + e + 'Moon.png')
            } else {
                return require('@/assets/' + e + '.png')
            }
        },
        padToTwoDigits(num) {
            return num.toString().padStart(2, '0');
        },
        convertToTime(value) {
            const date = new Date(value * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();

            const time = `${this.padToTwoDigits(hours)}:${this.padToTwoDigits(minutes)}`
            return time
        }
    }
}
</script>

<style lang="scss" scoped>
#card-hourly {
    padding: 1px 0 0 0;

    h3 {
        padding-left: 20px;
        opacity: 0.6;
    }

    .div-hourly-flex {
        gap: 1rem;
        display: flex;
        margin: 0 20px 0 20px;
        overflow-x: auto;
        text-align: center;

        &::-webkit-scrollbar {
            display: none;
        }
        .div-hourly-data {
            img {
                width: 55%;
            }
        }
    }

}
</style>
<template>
    <base-card>
        <p>{{city}}</p>
        <p>{{dateOfTheDay}}</p>
        <p>{{celcius}}°C</p>
        <p>{{weather}}</p>
    </base-card>
</template>

<script>
export default {
    props: ['city', 'celcius', 'weather'],
    computed: {
        dateOfTheDay() {
            const today = new Date();
            const options = {weekday: 'long', month: 'long', day: 'numeric'}
            return new Intl.DateTimeFormat('en-US', options).format(today)
        },
    }
}
</script>
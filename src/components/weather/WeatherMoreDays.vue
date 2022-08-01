<template>
    <p>{{weather}}</p>
</template>

<script>
export default {
    props: ['weather', 'minCelcius', 'maxCelcius', 'humidity'],
    mounted() {
        console.log(this.resourcesFewDays)
    }
}
</script>
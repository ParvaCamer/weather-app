<template>
    <button class="base-button" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped lang="scss">
.base-button{
    cursor: pointer;
    background-color: #82A0BC;
    padding: 12px;
    margin-left: 10px;
    letter-spacing: 0.2rem;
    border-radius: 30px;
    border-color: #304D6D;
}

</style>
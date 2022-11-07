<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    .card {
        margin: 10px;
        padding: 5px;
        padding-left: 10px;
        border-radius: 20px;  
        background-color: #82A0BC;
        width: 140px;
        box-shadow: 5px 5px 10px #82A0BC;
    }
</style>
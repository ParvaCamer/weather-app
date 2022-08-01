<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.26);
    max-width: 40rem;
    margin: 2rem auto;
    border-radius: 12px;
    padding: 1rem;
}
</style>
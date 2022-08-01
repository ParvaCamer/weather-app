<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button {
    padding: 0.75rem 1.25rem;
    font-family: inherit;
    background-color: #81B2B5;
    border: 1px solid #81B2B5;
    color: white;
    cursor: pointer;
    border-radius: 50%;
}

button:hover,
button:active {
  background-color: #537375;
  border-color: #537375;
}

.flat {
  background-color: transparent;
  color: #120646;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: rgba(156, 215, 219, 86);
  opacity: 75%;
}
</style>
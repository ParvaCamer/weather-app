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
  background-color: #0a76db63;
  border: 1px solid #0a76db63;
  color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
}

button:hover,
button:active {
  background-color: #236099;
  border-color: #236099;
}

.flat {
  background-color: transparent;
  color: #ffffff;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #0a76db63;
  opacity: 75%;
}
</style>
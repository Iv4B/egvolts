<script setup lang="ts">
defineProps<{ diagonal?: boolean }>()
</script>

<template>
  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path :d="diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
</template>

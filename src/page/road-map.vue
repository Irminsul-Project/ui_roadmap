<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue';

const msg = ref('PHP');
</script>

<template>
  <HelloWorld :msg="msg"></HelloWorld>
</template>

<style scoped>
</style>

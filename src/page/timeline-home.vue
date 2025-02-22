<script setup>
import { ref } from 'vue';
import hyperlink from '../components/button/hyperlink.vue';
const msg = ref('PHP');
</script>

<template>
    <div class="container mx-auto px-4">
        <h1 class="mb-3">
            Select Reasearch
        </h1>
        <hyperlink title="Membuat Time line" to="/timeline/php"/>
    </div>
</template>

<style scoped>
</style>

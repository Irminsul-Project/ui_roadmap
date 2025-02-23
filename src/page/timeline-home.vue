<script setup>
import { ref } from 'vue';
import hyperlink from '../components/button/hyperlink.vue';
const msg = ref('PHP');
</script>

<template>
    <div class="flex">
        <div class="flex-1">
            <h1 class="mb-3">
                Select Reasearch
            </h1>
        </div>
        <div class="flex-1 text-right">
            <hyperlink title="Create New" to="/timelinecreate"/>
        </div>
    </div>
    <hyperlink title="Membuat Time line" to="/timeline/php"/>
</template>

<style scoped>
</style>

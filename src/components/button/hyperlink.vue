<script setup>
const Props = defineProps({
    to: {
        "type": String,
        "required": true
    },
    title: {
        "type": String,
        "required": true
    },
    class: {
        "type": String,
        "required": true
    },
})
</script>

<template>
    <RouterLink :to="Props.to" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ Props.title }}
    </RouterLink>
</template>
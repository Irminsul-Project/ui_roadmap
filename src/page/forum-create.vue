<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import InputText from 'primevue/inputtext';
</script>

<template>
    <Card class="h-screen">
        <template #title>
            <div class="flex">
                <div class="flex-1 text-left">
                    <hyperlink to="/forum" title="back"/>
                </div>
                <div class="flex-2">
                    <h1 class="text-center font-extrabold">
                        Create Forum
                    </h1>
                </div>
                <div class="flex-1 text-right">
                    <Button label="Create New" severity="info" @click="SelectContect('create')"/>
                </div>
            </div>
        </template>
        <template #content>
            <div class="mb-2">
                <p class="font-bold block mb-2">
                    Title
                </p>
                <InputText class="w-full"/>
            </div>
            <div class="mb-2">
                <p class="font-bold block mb-2">
                    Description 
                </p>
                <Editor v-model="content" editorStyle="height: 320px"/>
            </div>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
</style>

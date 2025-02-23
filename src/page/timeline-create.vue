<script setup>
import Timeline from 'prmevue/timeline';
import { ref } from "vue";
import Card from 'primevue/card';
import Button from 'primevue/button';
import Hyperlink from '../components/button/hyperlink.vue';

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

const ContentId = ref("");
const SelectContect = (Content = "") => {
    ContentId.value = Content
}
</script>

<template>
    <Card class="h-screen">
        <template #title>
            <div class="flex">
                <div class="flex-1 text-left">
                    <hyperlink to="/timeline" title="back"/>
                </div>
                <div class="flex-2">
                    <h1 class="text-center font-extrabold">
                        Time Line
                    </h1>
                </div>
                <div class="flex-1 text-right">
                    <Button label="Create New" severity="info" @click="SelectContect('create')"/>
                </div>
            </div>
        </template>
        <template #content>
                <div class="flex-2">
                    <FloatLabel variant="on">
                        <label for="on_label">Title</label>
                        <InputText id="on_label" v-model="title" class="size-full"/>
                    </FloatLabel>
                </div>
            <Editor v-model="content" editorStyle="height: 320px"/>
        </template>
    </Card>
</template>

<style lang="scss">
</style>

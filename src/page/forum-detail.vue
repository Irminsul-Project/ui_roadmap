<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import Toolbar from 'primevue/toolbar';

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

const Props = defineProps({
  id: String,
})
</script>

<template>
    <Card class="h-[100vh]">
        <template #title>
            <Toolbar class="mb-[15px]">
                <template #start>
                    <div class="flex-1 text-left">
                        <hyperlink to="/forum" title="back"/>
                    </div>
                </template>
                <template #center>
                    {{Props.id}}
                </template>
            </Toolbar>
        </template>
        <template #content>
            <Card class="mb-[10px]">
                <template #content>
                    Content
                </template>
            </Card>
            <Card class="mb-[10px]">
                <template #title>
                    <b>
                        Comment
                    </b>
                </template>
                <template #content>
                    <Editor v-model="content" editorStyle="height: 180px"/>
                </template>
                <template #footer>
                    <div class="text-right">
                        <Button label="Commnet" severity="info"/>
                    </div>
                </template>
            </Card>
            <Card>
                <template #title>
                    <b>
                        Comment Header
                    </b>
                </template>
                <template #content>
                    Content
                </template>
                <template #footer>
                    <div class="text-right">
                        Create By : 'test'
                    </div>
                </template>
            </Card>
        </template>
    </Card>
</template>

<style lang="scss">
</style>

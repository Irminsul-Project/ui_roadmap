<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const TargetCount = ref(1);
const TargetNeedBool = ref(true);
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
                        Create Time Line
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
            <div class="mb-2">
                <p class="font-bold block mb-2">
                    Target
                    <Checkbox v-model="TargetNeedBool" binary />
                </p>
                <template v-if="TargetNeedBool">
                    <template v-for="Count in TargetCount" :key="Count">
                        <InputGroup class="mb-2">
                            <InputGroupAddon>
                                {{Count}}
                            </InputGroupAddon>
                            <InputText :id="`target-${Count}`" class="w-full" :placeholder="`Target`"/>
                            <InputGroupAddon v-if="TargetCount > 1">
                                <Button icon="pi pi-times" severity="danger" />
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <Button icon="pi pi-plus" severity="success" />
                            </InputGroupAddon>
                        </InputGroup>
                    </template>
                </template>
            </div>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
</style>

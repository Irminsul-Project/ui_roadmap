<script setup>
import { Form } from '@primevue/forms';
import { instance } from '../utils/connection/api.js';
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

const router = useRouter()
const TargetCount = ref(1);
const TargetNeedBool = ref(false);
const loading = ref(false);
const toast = useToast();

const AddTarget = () => {
    TargetCount.value++;
}

const RemoveTarget = () => {
    TargetCount.value--;
}

const onSubmit = async ({values}) => {
    const InstanceAPI = instance();
    loading.value = true;

    values.target = [];
    for (let i = 1; i <= TargetCount.value; i++) {
        if (values[`target-${i}`] !== undefined) {
            values.target.push(values[`target-${i}`]);
            delete values[`target-${i}`];
        }
    }
    
    try {
        const CreateResearch = await InstanceAPI.post('api/research', values);

        const ResearchId = CreateResearch.data.data.id;
        
        router.push(`/research/${ResearchId}`);
    } catch (error) {
        if(error.response === undefined){
            toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
        }else{
            error.response.data.message.map((message) => {
                toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
            });
        }
    }

    loading.value = false;
};
</script>

<template>
    <Toast />
    <Form class="space-y-4" @submit="onSubmit">
        <Card class="h-screen">
            <template #title>
                <div class="flex">
                    <div class="flex-1 text-left">
                        <hyperlink to="/reasearch" title="back" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-center font-extrabold">
                            Create Time Line
                        </h1>
                    </div>
                    <div class="flex-1 text-right">
                        <Button type="submit" label="Create New" severity="info" :loading="loading" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="mb-2">
                    <p class="font-bold block mb-2">
                        Title
                    </p>
                    <InputText class="w-full" name="title" />
                </div>
                <div class="mb-2">
                    <p class="font-bold block mb-2">
                        Description 
                    </p>
                    <Editor v-model="content" name="content" editor-style="height: 320px" />
                </div>
                <div class="mb-2">
                    <p class="font-bold block mb-2">
                        <span for="target" class="mr-2">
                            Target
                        </span>
                        <Checkbox id="target" v-model="TargetNeedBool" binary />
                    </p>
                    <template v-if="TargetNeedBool">
                        <template v-for="Count in TargetCount" :key="Count">
                            <InputGroup class="mb-2">
                                <InputGroupAddon>
                                    {{ Count }}
                                </InputGroupAddon>
                                <InputText :name="`target-${Count}`" class="w-full" :placeholder="`Target ${Count}`" />
                                <InputGroupAddon v-if="TargetCount > 1 && Count === TargetCount">
                                    <Button icon="pi pi-times" severity="danger" @click="RemoveTarget" />
                                </InputGroupAddon>
                                <InputGroupAddon v-if="Count === TargetCount">
                                    <Button icon="pi pi-plus" severity="success" @click="AddTarget" />
                                </InputGroupAddon>
                            </InputGroup>
                        </template>
                    </template>
                </div>
            </template>
        </Card>
    </Form>
</template>

<style lang="scss" scoped>
</style>

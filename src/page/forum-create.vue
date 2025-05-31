<script setup>
import { Form } from '@primevue/forms';
import { instance } from '../utils/connection/api.js';
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

const router = useRouter()
const loading = ref(false);
const toast = useToast();

const onSubmit = async ({values}) => {
    const InstanceAPI = instance();
    loading.value = true;
    
    try {
        const CreateForum = await InstanceAPI.post('api/forum', values);

        const ForumId = CreateForum.data.Data.Id;
        
        router.push(`/research/${ForumId}`);
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
                        <hyperlink to="/forum" title="back" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-center font-extrabold">
                            Create Forum
                        </h1>
                    </div>
                    <div class="flex-1 text-right">
                        <Button type="submit" name="title" label="Create New" severity="info" :loading="loading" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="mb-2">
                    <p class="font-bold block mb-2">
                        Title
                    </p>
                    <InputText name="title" class="w-full" />
                </div>
                <div class="mb-2">
                    <p class="font-bold block mb-2">
                        Description
                    </p>
                    <Editor v-model="content" name="content" editor-style="height: 320px" />
                </div>
            </template>
        </Card>
    </Form>
</template>

<style lang="scss" scoped>
</style>

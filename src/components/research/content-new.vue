<script setup>
import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { instance } from '@/utils/connection/api.js';
import { useToast } from "primevue/usetoast";
import { useResearchStore } from "@/stores/useResearchStore";
import Toast from 'primevue/toast';
import { ref } from 'vue';

const title = ref("");
const content = ref("");
const loading = ref(false);
const toast = useToast();
const ResearchStore = useResearchStore();

const commentTimeLine = async () => {
    const InstanceAPI = instance();
    loading.value = true;

    try {
        const CreateForum = await InstanceAPI.post(`api/research/${ResearchStore.getId}/research`, {
            "title": title.value,
            "content": content.value
        });

        toast.add({ severity: 'success', summary: 'Success', detail: 'Success Create New', life: 3000 });
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
}
</script>

<template>
    <Toast />
    <div class="flex mb-10 gap-4">
        <div class="flex-2">
            <FloatLabel variant="on">
                <label for="on_label">Title</label>
                <InputText id="on_label" v-model="title" class="size-full" />
            </FloatLabel>
        </div>
        <div class="flex-1 text-right">
            <div class="grid grid-cols-2 gap-4">
                <Button label="Add Comment" severity="info" @click="commentTimeLine" />
                <!-- <Button label="Update Progress" severity="info" @click="save"/> -->
            </div>
        </div>
    </div>
    <Editor v-model="content" editor-style="height: 320px" />
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>

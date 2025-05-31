<script setup>
import { Form } from '@primevue/forms';
import { instance } from '../utils/connection/api.js';
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Editor from 'primevue/editor';
import Hyperlink from '../components/button/hyperlink.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';
import DataView from 'primevue/dataview';

const Props = defineProps({
    id: {
        "type": String,
        "required": true
    },
});

const loading = ref(true);
const title = ref("loading...");
const content = ref("");
const commentDataList = ref([]);
const InstanceAPI = instance();
const toast = useToast();
const contentComment = ref("");

const fetchForumData = async () => {
    try {
        const commentDataListTemp = [];
        const response = await InstanceAPI.get(`/api/forum/${Props.id}`);
        const forumData = response.data.Data.Forum;
        const commentsData = forumData.Comments;
        const userCreatesData = response.data.Data.UserCreates;

        commentsData.forEach((comment) => {
            userCreatesData.forEach((userCreate) => {
                if (comment.UserCreateId === userCreate.Id) {
                    comment.UserCreateName = userCreate.Name;
                }
            });
            
            commentDataListTemp.push(comment);
        });

        title.value = forumData.Title || "No Title";``
        content.value = forumData.Content || "No Title";
        loading.value = false;

        commentDataList.value = commentDataListTemp;
    } catch (error) {
        loading.value = false;
        if (error.response === undefined) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
        } else {
            error.response.data.message.forEach((message) => {
                toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
            });
        }
    }
};

const loadingComment = ref(false);
const onSubmitAddComment = async ({values}) => {
    loadingComment.value = true;
    
    try {
        await InstanceAPI.post(`/api/forum/${Props.id}/commend`, values);
        contentComment.value = "";
        await fetchForumData();
    } catch (error) {
        if(error.response === undefined){
            console.log(error)
            toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
        }else{
            error.response.data.message.map((message) => {
                toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
            });
        }
    }

    loadingComment.value = false;
};

onMounted(() => {
    fetchForumData();
});
</script>

<template>
    <Toast />
    <Card class="h-[100vh]">
        <template #title>
            <Toolbar class="mb-[15px]">
                <template #start>
                    <div class="flex-1 text-left">
                        <hyperlink to="/forum" title="Back" />
                    </div>
                </template>
                <template #center>
                    {{ title }}
                </template>
            </Toolbar>
        </template>

        <template #content>
            <template v-if="loading">
                <div class="flex justify-center items-center h-full w-full">
                    <ProgressSpinner aria-label="Loading" />
                </div>
            </template>
            <template v-else>
                <Card class="mb-[10px]">
                    <template #content>
                        <div v-dompurify-html="content" />
                    </template>
                </Card>
                <Form class="space-y-4" @submit="onSubmitAddComment">
                    <Card class="mb-[10px]">
                        <template #title>
                            <b>
                                Comment
                            </b>
                        </template>
                        <template #content>
                            <Editor v-model="contentComment" name="content" editor-style="height: 180px" :aria-disabled="loadingComment" />
                        </template>
                        <template #footer>
                            <div class="text-right">
                                <Button type="submit" label="Add Comment" severity="info" :loading="loadingComment" />
                            </div>
                        </template>
                    </Card>
                </Form>
                <DataView :value="commentDataList" :paginator="true" :rows="10">
                    <template #empty>
                        <div class="flex flex-col items-center justify-center h-full w-full">
                            <h2 class="text-2xl font-bold">
                                Not Have Comments
                            </h2>
                        </div>
                    </template>
                    <template #list="commentList">
                        <div class="flex flex-col">
                            <div v-for="(Comment) in commentList.items" :key="Comment.Id">
                                <Card>
                                    <template #content>
                                        <div v-dompurify-html="Comment.Content" />
                                    </template>
                                    <template #footer>
                                        <div class="text-right">
                                            Create By : {{ Comment.UserCreateName }}
                                        </div>
                                    </template>
                                </Card>
                            </div>
                        </div>
                    </template>
                </DataView>
            </template>
        </template>
    </Card>
</template>

<style lang="scss">
</style>
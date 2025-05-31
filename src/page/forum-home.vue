<script setup>
import { ref, onMounted } from "vue";
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import hyperlink from '../components/button/hyperlink.vue';
import { useUserStore } from '../stores/userStore';
import moment from 'moment';
import 'moment/locale/id';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

const userStore = useUserStore();
const ForumListData = ref([]);
import { instance } from '../utils/connection/api.js';
moment.locale('id');

const toast = useToast();

const fetchForumData = async () => {
    const InstanceAPI = instance();
    
    try {
        const GetForum = await InstanceAPI.get('api/forum');

        const ForumListDataTemp = GetForum.data.Data.Forums;
        ForumListDataTemp.forEach((Forum) => {
            Forum.updated_at = moment(Forum.updated_at).format('DD-MMM-YYYY HH:mm');
        });
        ForumListData.value = ForumListDataTemp;
    } catch (error) {
        if(error.response === undefined){
            toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
        }else{
            error.response.data.message.map((message) => {
                toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
            });
        }
    }
};

onMounted(() => {
    fetchForumData();
});
</script>

<template>
    <Toast />
    <div class="flex">
        <div class="flex-1">
            <h1 class="mb-3">
                Select Forum
            </h1>
        </div>
        <template v-if="userStore.isLoggedIn">
            <div class="flex-1 text-right">
                <hyperlink title="Create New" to="/forumcreate" />
            </div>
        </template>
    </div>
    <Card>
        <template #content>
            <DataView :value="ForumListData" :paginator="true" :rows="10">
                <template #empty>
                    <div class="flex flex-col items-center justify-center h-full w-full">
                        <h2 class="text-2xl font-bold">
                            No Forums Available
                        </h2>
                    </div>
                </template>
                <template #list="ForumList">
                    <div class="flex flex-col">
                        <div v-for="(Forum, index) in ForumList.items" :key="Forum.Id">
                            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <div class="text-lg font-medium mt-2">
                                                {{ Forum.title }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:items-end gap-8">
                                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                            <hyperlink title="Open" :to="`/forum/${Forum.id}`" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </template>
    </Card>
</template>

<style scoped>
</style>

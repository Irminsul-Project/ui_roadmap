<script setup>
import { ref, onMounted } from "vue";
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import hyperlink from '../components/button/hyperlink.vue';
import moment from 'moment';
import 'moment/locale/id';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

const ResearchListData = ref([]);
import { instance } from '../utils/connection/api.js';
moment.locale('id');

const toast = useToast();

const fetchResearchData = async () => {
    const InstanceAPI = instance();
    
    // try {
    const GetResearch = await InstanceAPI.get('api/research');

    const ResearchListDataTemp = GetResearch.data.data.researchs;
    ResearchListDataTemp.forEach((research) => {
        research.updated_at = moment(research.updated_at).format('DD-MMM-YYYY HH:mm');
    });

    ResearchListData.value = ResearchListDataTemp;
    // } catch (error) {
    //     if(error.response === undefined){
    //         toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
    //     }else{
    //         error.response.data.message.map((message) => {
    //             toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    //         });
    //     }
    // }
};

onMounted(() => {
    fetchResearchData();
});
</script>

<template>
    <Toast />
    <div class="flex mb-[10px]">
        <div class="flex-1">
            <h1 class="mb-3">
                Select Research
            </h1>
        </div>
        <div class="flex-1 text-right">
            <hyperlink title="Create New" to="/timelinecreate" />
        </div>
    </div>
    <Card>
        <template #content>
            <DataView :value="ResearchListData">
                <template #list="ResearchList">
                    <div class="flex flex-col">
                        <div v-for="(Research, index) in ResearchList.items" :key="Research.Id">
                            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <div class="text-lg font-medium mt-2">
                                                {{ Research.title }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:items-end gap-8">
                                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                            <hyperlink title="Open" :to="`/research/${Research.id}`" />
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

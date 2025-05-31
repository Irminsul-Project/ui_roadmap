<script setup>
import { instance } from '../utils/connection/api.js';
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { useResearchStore } from "../stores/useResearchStore.js";
import Button from 'primevue/button';
import Card from 'primevue/card';
import ContentDescription from "../components/research/content-description.vue";
import ContentNew from "../components/research/content-new.vue";
import Hyperlink from '../components/button/hyperlink.vue';
import Timeline from 'primevue/timeline';
import Toolbar from 'primevue/toolbar';
import moment from 'moment';
import 'moment/locale/id';
import ScrollPanel from 'primevue/scrollpanel';

const Props = defineProps({
    id: {
        type: String,
        required: true
    },
})

const ResearchStore = useResearchStore();
const loading = ref(true);
const title = ref("loading...");
const InstanceAPI = instance();
const toast = useToast();

moment.locale('id');

ResearchStore.setId(Props.id);

const fetchResearchData = async () => {
    try {
        const response = await InstanceAPI.get(`/api/research/${Props.id}`);
        const researchData = response.data.data.research;

        title.value = researchData.title || "No Title";
        loading.value = false;

        ResearchStore.setDescription(researchData.content || "");
        ResearchStore.setTarget(response.data.data.targets || []);
        ResearchStore.setResearch(response.data.data.timelines || []);
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

const Mode = ref("info");
const Title = ref("");
const SelectContect = (Content = "", TitleTemp = "") => {
    Mode.value = Content
    Title.value = TitleTemp
}

onMounted(() => {
    fetchResearchData();
});
</script>

<template>
    <div class="flex">
        <div class="flex-1 min-w-[300px] max-w-[400px]">
            <div class="max-h-screen">
                <div class="flex flex-col">
                    <div class="flex-1">
                        <h1 class="text-[25px] mt-[10px] mb-[10px] text-center font-extrabold">
                            Time Line
                        </h1>
                    </div>
                    <div class="flex-1 grow">
                        <ScrollPanel style="height: calc(100vh - 57.5px);">
                            <Timeline :value="ResearchStore.getResearch" class="timeline-event-opposite-hide">
                                <template #marker>
                                    <div class="p-timeline-event-marker" data-pc-section="eventmarker" />
                                </template>
                                <template #connector>
                                    <div class="p-timeline-event-connector" data-pc-section="eventconnector" />
                                </template>
                                <template #content="slotProps">
                                    <button class="w-full h-full flex flex-col content-start justify-content-start mb-[15px]" @click="SelectContect(slotProps.item.content, slotProps.item.title)">
                                        <p class="text-left leading-[16px] mb-[10px]">
                                            {{ slotProps.item.title }}
                                        </p>
                                        <p class="text-left leading-[16px] mb-[10px]">
                                            {{ slotProps.item.status }}
                                        </p>
                                        <small class="text-left text-surface-500 dark:text-surface-400">{{ moment(slotProps.item.created_at).format('DD-MMM-YYYY HH:mm') }}</small>
                                    </button>
                                </template>
                            </Timeline>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-3">
            <Card class="h-[100vh]">
                <template #content>
                    <Toolbar class="mb-[15px]">
                        <template #start>
                            <div class="flex-1 text-left">
                                <hyperlink to="/research" title="Back" />
                            </div>
                        </template>
                        <template #center>
                            <p class="text-[32px] font-bold">
                                {{ title }}
                            </p>
                        </template>
                        <template #end>
                            <Button icon="pi pi-info" class="mr-[10px]" severity="info" @click="SelectContect('info')" />
                            <Button icon="pi pi-plus" severity="info" @click="SelectContect('create')" />
                        </template>
                    </Toolbar>
                    <template v-if="Mode != ''">
                        <template v-if="Mode == 'create'">
                            <ContentNew />
                        </template>
                        <template v-else-if="Mode == 'info'">
                            <ContentDescription />
                        </template>
                        <template v-else>
                            <Card>
                                <template #content>
                                    <h1 class="mb-[10px] text-[32px] font-bold">
                                        {{ Title }}
                                    </h1>
                                    <div v-dompurify-html="Mode" class="editor-content" />
                                </template>
                            </Card>
                        </template>
                    </template>
                </template>
            </Card>
        </div>
    </div>
</template>

<style lang="scss">
    .p-card-body-no-padding .p-card-body {
        padding: 0;
        display: flex;
    }

    div.editor-content ol {
        list-style: decimal;

        li {
            margin-left: 17px;
        }
    }
</style>

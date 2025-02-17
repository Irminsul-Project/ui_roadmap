<script setup>
import Timeline from 'primevue/timeline';
import { ref } from "vue";
import Card from 'primevue/card';

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

const ContentId = ref("");
const SelectContect = () => {
    ContentId.value = "Test"
}
</script>

<template>
    <div class="flex">
        <Card class="flex-1 h-screen">
            <template #title>
                <h1 class="text-center font-extrabold">
                    Time Line
                </h1>
            </template>
            <template #content>
                <Timeline :value="events" class="w-full h-full timeline-event-opposite-hide">
                    <template #marker>
                        <div class="p-timeline-event-marker" data-pc-section="eventmarker"></div>
                    </template>
                    <template #connector>
                        <div class="p-timeline-event-connector" data-pc-section="eventconnector"></div>
                    </template>
                    <template #content="slotProps">
                        <button class="w-full h-full flex flex-col content-start justify-content-start" @click="SelectContect">
                            <p class="text-left leading-[16px] mb-[10px]">
                                {{slotProps.item.status}}
                            </p>
                            <small class="text-left text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
                        </button>
                    </template>
                </Timeline>
            </template>
        </Card>
        <Card class="flex-3">
            <template #content>
                <p>
                    ContentId : {{ ContentId }}
                </p>
            </template>
        </Card>
    </div>
</template>

<style lang="scss">
</style>

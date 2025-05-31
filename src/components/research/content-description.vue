<script setup>
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import { useResearchStore } from "../../stores/useResearchStore";

const ResearchStore = useResearchStore();
</script>

<template>
    <Card>
        <template #content>
            <div v-dompurify-html="ResearchStore.getDescription" />
            <template v-if="ResearchStore.getTarget.length > 0">
                <hr class="mt-[10px] mb-[10px]">
                <strong class="mb-[10px]">
                    Target
                </strong>
                <div v-for="Target in ResearchStore.getTarget" :key="Target.id">
                    <Checkbox :v-model="Target.status !== 'Done'" disabled binary class="mr-[10px]" />
                    <span>{{ Target.content }}</span>
                </div>
            </template>
        </template>
    </Card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

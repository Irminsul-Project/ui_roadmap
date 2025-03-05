<script setup>
import { ref } from 'vue';
import hyperlink from '../components/button/hyperlink.vue';
import DataView from 'primevue/dataview';
import Card from 'primevue/card';

const ReasearchListData = ref([
    {
        "Title" : "Php List",
        "LastUpadte" : "20-Jan-2024 20:10",
        "Id" : "PHP"
    },
    {
        "Title" : "Php Budi",
        "LastUpadte" : "20-Jan-2024 20:10",
        "Id" : "PHP1"
    }
]);

</script>

<template>
    <div class="flex mb-[10px]">
        <div class="flex-1">
            <h1 class="mb-3">
                Select Reasearch
            </h1>
        </div>
        <div class="flex-1 text-right">
            <hyperlink title="Create New" to="/timelinecreate"/>
        </div>
    </div>
    <Card>
        <template #content>
            <DataView :value="ReasearchListData">
                <template #list="ReasearchList">
                    <div class="flex flex-col">
                        <div v-for="(Reasearch, index) in ReasearchList.items" :key="Reasearch.Id">
                            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <div class="text-lg font-medium mt-2">{{ Reasearch.Title }}</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:items-end gap-8">
                                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                            <hyperlink title="Open" to="/timeline/php"/>
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

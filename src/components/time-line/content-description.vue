<script setup>
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ref } from 'vue';

const TaskList = ref([
  {
    "Id": "faklsf",
    "Status": true,
    "Description": "Instalasi PHP"
  },
  {
    "Id": "fakls1",
    "Status": false,
    "Description": "Running PHP"
  }
]);
const Description = ref("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");

</script>

<template>
  <Card>
    <template #content>
      <div v-dompurify-html="Description">
      </div>
      <template v-if="TaskList.length > 0">
        <br>
        <h1>
          Targer
        </h1>
        <div v-for="Task in TaskList" :key="Task.Id">
          <Checkbox v-model="Task.Status" disabled binary/>
          <span>{{ Task.Description }}</span>
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

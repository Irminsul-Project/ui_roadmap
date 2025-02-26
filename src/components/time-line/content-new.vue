<script setup>
import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { ref } from 'vue';

const title = ref("");
const content = ref("");
const save = () => {
  console.log(title.value)
  console.log(content.value)
}
</script>

<template>
  <div class="flex mb-10 gap-4">
    <div class="flex-2">
      <FloatLabel variant="on">
        <label for="on_label">Title</label>
        <InputText id="on_label" v-model="title" class="size-full"/>
      </FloatLabel>
    </div>
    <div class="flex-1 text-right">
      <div class="grid grid-cols-2 gap-4">
        <Button label="Add Comment" severity="info" @click="save"/>
        <Button label="Update Progress" severity="info" @click="save"/>
      </div>
    </div>
  </div>
  <Editor v-model="content" editorStyle="height: 320px"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>

<script setup>
import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
</script>

<template>
  <div class="flex mb-10">
    <div class="flex-2">
      <FloatLabel variant="on">
        <label for="on_label">Title</label>
        <InputText id="on_label" v-model="value3" class="size-full"/>
      </FloatLabel>
    </div>
    <div class="flex-1 text-right">
        <Button label="Create" severity="info"/>
    </div>
  </div>
  <Editor v-model="value" editorStyle="height: 320px" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

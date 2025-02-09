<script setup>
import json from "../../data/road-map-detail.json";
import Card from 'primevue/card';
import moment from 'moment';
import CodeEditor from 'simple-code-editor';
import { watchEffect } from 'vue'
const Props = defineProps({
  content_id: String,
})

let DetailFound = false
let categorys = ""
let sections = ""
let last_update = ""
let teorys = ""
let sources = ""
let title = ""
let level_knowlage = ""

watchEffect(() => {
  let Detail = {}
  DetailFound = false
  
  json.forEach(content => {
    if (content.id == Props.content_id) {
      DetailFound = true
      Detail = content
    }
  });

  if (DetailFound == true) {
    categorys = Detail.categorys
    sections = Detail.sections
    last_update = Detail.last_update
    teorys = Detail.teorys
    sources = Detail.sources
    title = Detail.title
    level_knowlage = Detail.level_knowlage
  }
})


</script>

<template>
  <div v-if="DetailFound == true">
    <h1>{{ title }}</h1>
    <hr>
    <div>
      <strong>category :</strong>
      <span v-for="category in categorys" :key="category.text">{{ category.text }}</span>
    </div>
    <div>
      <p>level knowlage : {{ level_knowlage }}</p>
    </div>
    <Card v-for="section in sections" :key="section.id">
        <template #title>{{ section.title }}</template>
        <template #content>
          <template v-if="section.content_type == 'text'">
            {{ section.content }}
          </template>
          <template v-if="section.content_type == 'code'">
            <CodeEditor :value="section.content" width="100%"></CodeEditor>
          </template>
        </template>
    </Card>
    <div>
      <p>source :</p>
      <span v-for="teory in teorys" :key="teory.data">{{ teory.data }}</span>
    </div>
    <div>
      <p>teory :</p>
      <span v-for="source in sources" :key="source.data">{{ source.data }}</span>
    </div>
    <div>
      <p>Last update : {{moment(last_update.timestamps).format('YYYY-MM-DD HH:mm:ss')}}</p>
      <p>By : {{last_update.by.name}}</p>
    </div>
  </div>
  <div v-else>
    <p>
      Not Found
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

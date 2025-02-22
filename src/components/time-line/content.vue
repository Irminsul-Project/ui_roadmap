<script setup>
import json from "../../data/road-map-detail.json";
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
  <h1>
    Content Title
  </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

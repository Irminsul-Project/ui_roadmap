<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import contant from '../components/road-map/content.vue'
import json from "../data/roud-map.json";
const { updateNode } = useVueFlow()
const nodes = ref(json)

const edges = ref([])
json.forEach((data, index) => {
  if (index > 0) {
    const before = json[index - 1]
  
    edges.value.push({ 
      id: `e${before.id}->${data.id}`,
      source: before.id, 
      target: data.id,
    })
  }
});

const description = ref(null)
const TranslateExtent = [
  [0, 0],
  [500, 800]
];

function onNodeClick({ event, node }) {
  description.value = node.id
  updateNode(node.id, { style: { backgroundColor: "#777" } })
  console.log(node.id)
}

defineProps({
  msg: String,
})
</script>

<template>
  <div class="flex">
    <div class="flex-1 road-map">
      <h1>
        Road map {{msg}}
      </h1>
      <VueFlow
        :nodes="nodes"
        :edges="edges"
        :nodes-draggable="false"
        :zoom-on-double-click="false"
        :pan-on-drag="false"
        :zoom-on-scroll="false"
        :zoom-on-pinch="false"
        :pan-on-scroll="true"
        pan-on-scroll-mode="vertical"
        :translate-extent="TranslateExtent"
        @node-click="onNodeClick">
     </VueFlow>
    </div>
    <div class="flex-1 overflow-y-auto max-h-screen" v-if="description != null">
      <contant :content_id="description"/>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.road-map {
  height: 90vh;
}

.road-map-content {
  border-left: #000 solid;
  padding-left: 10px;
  height: 100vh;
}
</style>

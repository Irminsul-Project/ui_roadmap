<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import contant from '../components/road-map/content.vue'
import Hyperlink from '../components/button/hyperlink.vue';
import json from "../data/road-map.json";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

const Props = defineProps({
    id: {
        "type": String,
        "default": ""
    },
})

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
}
</script>

<template>
    <div class="layout">
        <div class="flex">
            <hyperlink to="/knowlage" title="back" />
            <h1>
                Road map {{ id }}
            </h1>
        </div>
        <Splitter class="content">
            <SplitterPanel size="30">
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
                    @node-click="onNodeClick"
                />
            </SplitterPanel>
            <SplitterPanel>
                <div v-if="description != null" class="flex-1 overflow-y-auto max-h-screen">
                    <contant :content_id="description" />
                </div>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;    
  }
}

.read-the-docs {
  color: #888;
}
</style>

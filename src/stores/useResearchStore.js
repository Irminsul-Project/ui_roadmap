import { defineStore } from 'pinia';

export const useResearchStore = defineStore('research-store', {
  state: () => ({
    id: "",
    description: "",
    timeline: "",
    target: [],
  }),
  actions: {
    setId(id) {
      this.id = id;
    },
    setDescription(description) {
      this.description = description;
    },
    setTarget(target) {
      this.target = target;
    },
    setTimeline(timeline) {
      this.timeline = timeline;
    },
  },
  getters: {
    getId: (state) => state.id,
    getDescription: (state) => state.description,
    getTarget: (state) => state.target,
    getTimeline: (state) => state.timeline,
  },
  persist: false,
});
import { defineStore } from 'pinia';

export const useResearchStore = defineStore('research-store', {
  state: () => ({
    id: "",
    description: "",
    research: "",
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
    setResearch(research) {
      this.research = research;
    },
  },
  getters: {
    getId: (state) => state.id,
    getDescription: (state) => state.description,
    getTarget: (state) => state.target,
    getResearch: (state) => state.research,
  },
  persist: false,
});
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    session: null,
  }),
  actions: {
    setSession(session) {
      this.session = session;
    },
    logout() {
      this.session = null;
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.session,
    getSession: (state) => state.session,
  },
  persist: true,
});
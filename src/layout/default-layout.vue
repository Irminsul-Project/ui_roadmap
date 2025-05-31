<script setup>
import {ref} from 'vue';
import Menubar from 'primevue/menubar';
import hyperlink from '../components/button/hyperlink.vue';

const items = ref([
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Tree Of Knowlage',
        route: '/knowlage'
    },
    {
        label: 'Research',
        route: '/timeline'
    },
    {
        label: 'Forum',
        route: '/forum'
    }
]);

import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();

const Logout = () => {
    userStore.logout();
    window.location.reload()
};
</script>

<template>
    <div class="container mx-auto px-1 pt-[15px]">
        <Menubar :model="items" class="mb-[20px]">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
            <template #end>
                <template v-if="userStore.isLoggedIn == false">
                    <div class="flex items-center gap-2">
                        <hyperlink title="Login" to="/login" />
                    </div>
                </template>
                <template v-else>
                    <div class="flex items-center gap-2">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="Logout">
                            Logout
                        </button>
                    </div>
                </template>
            </template>
        </Menubar>
        <router-view />
    </div>
</template>

<style scoped>
</style>

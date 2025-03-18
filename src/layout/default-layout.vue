<script setup>
    import { ref } from 'vue';
    import Menubar from 'primevue/menubar';

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
            label: 'Reasearch',
            route: '/timeline'
        },
        {
            label: 'Forum',
            route: '/forum'
        }
    ]);
</script>

<template>
    <div class="container mx-auto px-1 pt-[15px]">
        <Menubar :model="items" class="mb-[10px]">
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
        </Menubar>
        <router-view />
    </div>
</template>

<style scoped>
</style>

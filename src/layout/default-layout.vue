<script setup>
    import {ref, inject} from 'vue';
    import Menubar from 'primevue/menubar';
    import hyperlink from '../components/button/hyperlink.vue';

    const $cookies = inject('$cookies');
    // $cookies.set('session', 'xs34rfff', '7d');
    // $cookies.remove('session');
    const Session = $cookies.get('session')

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
                <template v-if="Session === null">
                    <div class="flex items-center gap-2">
                        <hyperlink title="Login" :to="`/login`"/>
                    </div>
                </template>
            </template>
        </Menubar>
        <router-view />
    </div>
</template>

<style scoped>
</style>

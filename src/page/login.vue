<script setup>
import { Form } from '@primevue/forms';
import { instance } from '../utils/connection/api.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";
import {useUserStore} from '../stores/userStore.js';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Toast from 'primevue/toast';

const UserStore = useUserStore()
const router = useRouter()
const loading = ref(false);
const toast = useToast();

const onSubmit = async ({values}) => {
    const InstanceAPI = instance();
    loading.value = true;
    
    try {
        const LoginAPI = await InstanceAPI.post('api/auth/login', values);

        const BodyResponse = LoginAPI.data.data.Token;
        
        UserStore.setSession(BodyResponse);
        router.push("/");
    } catch (error) {
        if(error.response === undefined){
            console.log(error)
            toast.add({ severity: 'error', summary: 'Error', detail: 'Network Error', life: 3000 });
        }else{
            error.response.data.message.map((message) => {
                toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
            });
        }
    }

    loading.value = false;
};
</script>

<template>
    <Toast />
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="p-6 bg-white shadow-lg rounded-lg w-96">
            <h2 class="text-2xl font-semibold text-center mb-4">
                Login
            </h2>
            <Form class="space-y-4" @submit="onSubmit">
                <div>
                    <label for="email" class="block text-sm font-medium">Email</label>
                    <InputText name="email" class="w-full" />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium">Password</label>
                    <Password name="password" class="w-full" :feedback="false" />
                </div>
                <Button type="submit" label="Login" class="w-full" :loading="loading" />
            </Form>
        </div>
    </div>
</template>

<style scoped>
.p-invalid {
    border-color: red;
}
</style>

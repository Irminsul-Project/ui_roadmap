import axios from 'axios';
import {APIURL} from '../setting.js'
import {useUserStore} from '../../stores/userStore.js';


export const instance = () => {
    const UserStore = useUserStore()
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    if (UserStore.isLoggedIn) {
        headers.Authorization = `Bearer ${UserStore.getSession}`
    }

    return axios.create({
        baseURL: APIURL,
        headers: headers
    })
}
import axios from 'axios';
import Configs from '../configs/Configs';

class User {
    constructor() {
        this.userData = null;
    }

    static registerUser(userData) {
        const { baseUrl, registerUrl } = Configs.api;

        return axios.post(`${baseUrl}${registerUrl}`, userData);
    }

    getUserDetails() {
        return this.userData;
    }
}

export default User;

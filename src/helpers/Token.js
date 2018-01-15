import axios from 'axios';
import Configs from '../configs/Configs';

class Token {
    static setToken(userData) {
        localStorage.setItem('YUMMY_USER', JSON.stringify(userData));
    }

    static getToken() {
        const userData = JSON.parse(localStorage.getItem('YUMMY_USER'));

        if (!userData) {
            return false;
        }

        const { token, data } = userData;
        const { baseUrl, users } = Configs.api;
        const headers = {
            'x-access-token': token,
        };
        const state = {}; // checks whether a token is valid or not

        axios
            .get(`${baseUrl}${users}${data.id}/`, { headers })
            .then((response) => {
                userData.data = response.data.data;
                state.valid = true;
            })
            .catch((error) => {
                state.valid = false;
            });

        if (state.valid) {
            return false;
        }

        return userData;
    }

    static getTokenWithoutHttpCall() {
        return JSON.parse(localStorage.getItem('YUMMY_USER')).token;
    }

    static deleteToken() {
        if (localStorage.getItem('YUMMY_USER')) {
            localStorage.clear();
        }
    }
}

export default Token;

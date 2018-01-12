import axios from 'axios';
import Configs from '../configs/Configs';

class Token {
    // checks whether a token is valid
    static tokenIsValid = false;

    static setToken(userData) {
        localStorage.setItem('YUMMY_USER', JSON.stringify(userData));
    }

    static getToken() {
        const userData = JSON.parse(localStorage.getItem('YUMMY_USER'));
        Token.tokenIsValid = false;

        if (!userData) {
            return false;
        }

        const { token, data } = userData;
        const { baseUrl, users } = Configs.api;
        const headers = {'x-access-token': token};

        axios.get(`${baseUrl}${users}${data.id}/`,{headers})
        .then((response)=>{
            Token.tokenIsValid = true;
            userData.data = response.data.data;
        })
        .catch((error)=>{
            Token.tokenIsValid = false;
        })

        if(!Token.tokenIsValid){
            return false;
        }

        return userData;
    }

    static deleteToken() {
        if (localStorage.getItem('YUMMY_USER')) {
            localStorage.clear();
        }
    }
}

export default Token;

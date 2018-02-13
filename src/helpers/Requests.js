import axios from 'axios';
import Configs from '../configs/Configs';
import Token from './Token';

/**
 * Requests class to create the axios instance
 */
class Requests {

    static axios = axios;

    static axiosInstance = axios.create({
        baseURL: Configs.api.baseUrl,
    });
}

// intercept the request to see whether a toke always exists
Requests.axiosInstance.interceptors.request.use(config=>{
    if(Token.getTokenWithoutHttpCall() && !config.headers["x-access-token"]){
        config.headers["x-access-token"] = Token.getTokenWithoutHttpCall();
    }
    return config;
})

export default Requests;

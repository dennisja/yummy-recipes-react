import axios from 'axios';
import Configs from '../configs/Configs';
import Token from './Token';

class Requests {

    static axios = axios;

    static axiosInstance = axios.create({
        baseURL: Configs.api.baseUrl,
    });


}

export default Requests;

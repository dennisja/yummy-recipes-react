import axios from 'axios';
import Configs from '../configs/Configs';

class Requests {

    static axios = axios;

    static axiosInstance = axios.create({
        baseURL: Configs.api.baseUrl,
    });


}

export default Requests;

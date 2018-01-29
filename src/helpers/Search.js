import Requests from './Requests';
import Configs from '../configs/Configs';

class SearchRequests extends Requests {
    static search(searchData) {
        const {search} = Configs.api;
        console.log("In search requests: ")
        console.log(searchData)
        return SearchRequests
            .axiosInstance
            .get(`${search}`, {params: searchData});
    }
}

export default SearchRequests;
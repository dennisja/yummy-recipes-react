import Requests from './Requests';
import Configs from '../configs/Configs';

class SearchRequests extends Requests {
    static search(searchData) {
        const {search} = Configs.api;
        return SearchRequests
            .axiosInstance
            .get(`${search}`, {params: searchData});
    }
}

export default SearchRequests;
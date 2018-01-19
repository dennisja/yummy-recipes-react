import Configs from '../configs/Configs';
import Requests from './Requests';

class CategoryRequest extends Requests {
    static addCategory(CategoryRequestData) {
        return CategoryRequest.axiosInstance.post(Configs.api.categories, CategoryRequestData);
    }
    static fetchUserCategories() {
        return CategoryRequest.axiosInstance.get(Configs.api.categories);
    }

    static editCategory(CategoryRequestId, newCategoryRequestData) {
        const { categories } = Configs.api;
        return CategoryRequest.axiosInstance.put(`${categories}${CategoryRequestId}/`, newCategoryRequestData);
    }

    static deleteCategory(CategoryRequestId) {
        const { categories } = Configs.api;
        return CategoryRequest.axiosInstance.delete(`${categories}${CategoryRequestId}/`);
    }

    static getCategory(CategoryRequestId) {
        const { categories } = Configs.api;
        return CategoryRequest.axiosInstance.get(`${categories}${CategoryRequestId}/`);
    }

    static getRecipesInCategory(CategoryRequestId) {
        const { categories, recipesUrl } = Configs.api;
        return CategoryRequest.axiosInstance.get(`${categories}${CategoryRequestId}/${recipesUrl}`);
    }
}

export default CategoryRequest;

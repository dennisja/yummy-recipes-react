import Configs from '../configs/Configs';
import Requests from './Requests';
import Categories from '../components/categories/Categories';

class Category extends Requests {
    static addCategory(categoryData) {
        return Category.axiosInstance.post(Configs.api.categories, categoryData);
    }
    static fetchUserCategories() {
        return Category.axiosInstance.get(Configs.api.categories);
    }

    static editCategory(categoryId, newCategoryData) {
        const { categories } = Configs.api;
        return Category.axiosInstance.put(`${categories}${categoryId}/`, newCategoryData);
    }

    static deleteCategory(categoryId) {
        const { categories } = Configs.api;
        return Category.axiosInstance.delete(`${categories}${categoryId}/`);
    }

    static getCategory(categoryId) {
        const { categories } = Configs.api;
        return Category.axiosInstance.get(`${categories}${categoryId}/`);
    }

    static getRecipesInCategory(categoryId) {
        const { categories, recipesUrl } = Configs.api;
        return Category.axiosInstance.get(`${categories}${categoryId}/${recipesUrl}`);
    }
}

export default Categories;


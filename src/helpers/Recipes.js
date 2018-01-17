import Requests from './Requests';
import Configs from '../configs/Configs';

class Recipes extends Requests {
    static addRecipe(recipeData) {
        return Recipes.axiosInstance.post(Configs.api.recipesUrl, recipeData);
    }

    static fetchRecipes() {
        return Recipes.axiosInstance.get(Configs.api.recipesUrl);
    }

    static editRecipe(recipeId, newRecipeDetails) {
        const { recipesUrl } = Configs.api;
        return Recipes.axiosInstance.put(`${recipesUrl}${recipeId}/`, newRecipeDetails);
    }

    static publishRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return Recipes.axiosInstance.patch(`${recipesUrl}${recipeId}/`);
    }

    static deleteRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return Recipes.axiosInstance.delete(`${recipesUrl}${recipeId}/`);
    }

    static getSingleRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return Recipes.axiosInstance.get(`${recipesUrl}${recipeId}/`);
    }
}

export default Recipes;

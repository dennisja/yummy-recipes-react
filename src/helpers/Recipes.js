import Requests from './Requests';
import Configs from '../configs/Configs';

class RecipesRequest extends Requests {
    static addRecipe(recipeData) {
        return RecipesRequest.axiosInstance.post(Configs.api.recipesUrl, recipeData);
    }

    static fetchRecipes() {
        return RecipesRequest.axiosInstance.get(Configs.api.recipesUrl);
    }

    static editRecipe(recipeId, newRecipeDetails) {
        const { recipesUrl } = Configs.api;
        return RecipesRequest.axiosInstance.put(`${recipesUrl}${recipeId}`, newRecipeDetails);
    }

    static publishRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return RecipesRequest.axiosInstance.patch(`${recipesUrl}${recipeId}/`);
    }

    static deleteRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return RecipesRequest.axiosInstance.delete(`${recipesUrl}${recipeId}`);
    }

    static getSingleRecipe(recipeId) {
        const { recipesUrl } = Configs.api;
        return RecipesRequest.axiosInstance.get(`${recipesUrl}${recipeId}`);
    }
}

export default RecipesRequest;

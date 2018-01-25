import React, {Component} from 'react';
import RecipesRequest from '../../helpers/Recipes';

import Preloader from '../Utilities';
import YummyNotifier from '../Utilities';
import RecipesList from './RecipeList';

const RecipeModel = props => {
    return (
        <div id="recipeModal" className="modal">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <button class="modal-action modal-close waves-effect waves-green btn-flat">close</button>
            </div>
        </div>
    )
}

class Recipes extends Component {
    state = {
        recipes: [],
        loadingRecipes: true,
        errorOccured: false,
        errors: []
    }

    viewRecipe = (event, id) => {
        event.preventDefault();
        alert('Delete ' + id);
    }

    deleteRecipe = (event, id) => {
        event.preventDefault();
        RecipesRequest
            .deleteRecipe(id)
            .then(response => {
                console.log(response.data)
                window
                    .Materialize
                    .toast(response.data.message, 4000)
                this.fetchRecipes();
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                } else if (error.request) {
                    console.log(error.request)
                }
            })
    }

    fetchRecipes() {
        RecipesRequest
            .fetchRecipes()
            .then(response => {
                this.setState({recipes: response.data.recipes, loadingRecipes: false})
                console.log(response)
            })
            .catch(error => {
                //notify user about the error that occured
                this.setState({errorOccured: true, loadingRecipes: false, errors: ["Set this depending on the error that occured"]})
                console.log(error.response || error.request || error)
            })
    }

    componentDidMount() {
        this.fetchRecipes();
    }

    render() {

        const {loadingRecipes, errorOccured, recipes} = this.state;
        let componentToRender = null;

        if (loadingRecipes) {
            componentToRender = (<Preloader message="Fetching Recipes......"/>)
        } else if (errorOccured) {
            componentToRender = "Errors occures"
        } else {
            console.log(recipes)
            if (recipes.length <= 0) {
                componentToRender = <div className="card-panel center-align">No recipes yet</div>
            } else {
                componentToRender = <RecipesList
                    recipes={recipes}
                    deleteRecipe={this.deleteRecipe}
                    viewRecipe={this.viewRecipe}/>
            }
        }

        return (
            <div className="row">
                <div className="col s12 m4">
                    SideBar Component Here
                </div>
                <div className="col s12 m8">
                    {componentToRender}
                </div>
            </div>
        )
    }
}

export default Recipes;
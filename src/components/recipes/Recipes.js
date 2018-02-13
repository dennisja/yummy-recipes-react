import React, {Component} from 'react';
import $ from 'jquery';
import TimeAgo from 'react-timeago';

import RecipesRequest from '../../helpers/Recipes';
import Preloader, { displayError} from '../Utilities';
import RecipesList from './RecipeList';
import SideBar from '../SideBar';
import { error } from 'util';

export const RecipeModel = props => {
    const {name, category, steps, ingredients, created, edited} = props.recipe;
    return (
        <div id="recipeModal" className="modal">
            <div className="modal-content">
                <header className="center-align orange white-text">
                    <h4>{name}</h4>
                </header>
                <table>
                    <tbody>
                        <tr>
                            <td>Created</td>
                            <td><TimeAgo date={created+"+3"} /></td>
                        </tr>
                        <tr>
                            <td>Edited</td>
                            <td><TimeAgo date={edited+"+3"} /></td>
                        </tr>
                        <tr>
                            <td>Owner</td>
                            <td>{`${category.owner_details.firstname} ${category.owner_details.lastname}`}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{`${category.name}`}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className="center-align orange white-text"> Ingredients </div>
                    <p>{ ingredients }</p>
                </div>
                <div>
                    <div className="center-align orange white-text"> Steps </div>
                    <pre>{ steps }</pre>
                </div>
            </div>
            <div className="modal-footer">
                <button className="modal-action modal-close waves-effect waves-green btn-flat">close</button>
            </div>
        </div>
    )
}

class Recipes extends Component {
    state = {
        recipes: [],
        loadingRecipes: true,
        errorOccured: false,
        errors: [],
        displayRecipe:false,
        recipeDetails: null,
    }

    viewRecipe = (event, id) => {
        // gets recipe details of the recipe to view
        event.preventDefault();
        const{ recipes } = this.state;

        for (let recipe of recipes){
            if (recipe.id === id){
                this.setState({
                    recipeDetails: recipe,
                    displayRecipe: true,
                });
                break;
            }
        }

    }

    deleteRecipe = (event, id) => {
        // deletes a recipe
        event.preventDefault();
        RecipesRequest
            .deleteRecipe(id)
            .then(response => {
                window
                    .Materialize
                    .toast(response.data.message, 4000)
                this.fetchRecipes();
            })
            .catch(error => {
                displayError(error);
            })
    }

    fetchRecipes() {
        // gets all recipes
        RecipesRequest
            .fetchRecipes()
            .then(response => {
                this.setState({recipes: response.data.recipes, loadingRecipes: false})
            })
            .catch(error => {
                //notify user about the error that occured
                this.setState({errorOccured: true, loadingRecipes: false, errors: ["Set this depending on the error that occured"]})
                displayError(error)
            })
    }

    componentDidMount() {
        // fetch all recipes when a component is mounted
        this.fetchRecipes();
    }

    componentDidUpdate(){
        // activate model if a recipe is to be shown
        if(this.state.displayRecipe){
            $('.modal').modal();
            $('#recipeModal').modal('open')
        }
    }

    render() {

        const {loadingRecipes, errorOccured, recipes, displayRecipe, recipeDetails} = this.state;
        let componentToRender = null;

        if (loadingRecipes) {
            // display loader if loading recipes
            componentToRender = (<Preloader message="Fetching Recipes......"/>)
        } else if (errorOccured) {
            // display this message if an error occured
            componentToRender = "Error occured"
        } else {
            if (recipes.length <= 0) {
                // diplay this message if user has no errors
                componentToRender = <div className="card-panel center-align">No recipes yet</div>
            } else {
                // display list of user recipes
                componentToRender = <RecipesList
                    recipes={recipes}
                    deleteRecipe={this.deleteRecipe}
                    viewRecipe={this.viewRecipe}/>
            }
        }

        return (
            <div className="row">
                <div className="col s12 m4">
                    <SideBar />
                </div>
                <div className="col s12 m8">
                    <div className="card orange-text center-align">
                        <div className="card-title">Recipes</div>
                    </div>
                    {componentToRender}
                    {
                        // display modal if user chooses to view recipe details
                        displayRecipe
                        ?<RecipeModel recipe={recipeDetails} />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default Recipes;
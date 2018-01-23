import React, {Component} from 'react';
import RecipesRequest from '../../helpers/Recipes';

import Preloader from '../Utilities';
import RecipesList from './RecipeList';

class Recipes extends Component {
    state = {
        recipes: [],
        loadingRecipes: true,
        errorOccured: false,
        errors: []
    }

    deleteRecipe = (event, id)=>{
        event.preventDefault();
        alert('Delete '+ id);
    }

    viewRecipe = (event, id)=>{
        event.preventDefault();
        alert('View '+ id)
    }

    componentDidMount() {
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

    render() {

        const {loadingRecipes, errorOccured, recipes} = this.state;
        let componentToRender = null;

        if (loadingRecipes) {
            componentToRender = (<Preloader message="Fetching Recipes......"/>)
        } else if (errorOccured) {
            componentToRender = "Errors occures"
        } else {
            console.log(recipes)
            if(recipes.length <= 0){
                componentToRender = "No Recipes Yet"
            }else{
            componentToRender = <RecipesList recipes={recipes} deleteRecipe={this.deleteRecipe} viewRecipe={this.viewRecipe}/>
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
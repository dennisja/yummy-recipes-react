import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import FormCard from '../forms/FormCard';
import EditRecipeForm from '../forms/EditRecipeForm';
import PreLoader, {displayError} from '../Utilities';
import RecipesRequest from '../../helpers/Recipes';
import SideBar from '../SideBar';

class EditRecipe extends Component {
    state = {
        loadedRecipe: false,
        recipeData: null,
    }

    componentDidMount(){
        const { recipeId } = this.props.match.params;
        
        RecipesRequest.getSingleRecipe(recipeId)
        .then(response=>{
            this.setState({
                loadedRecipe: true,
                recipeData: response.data.recipe,
            })
        })
        .catch(error=>{
            displayError(error);
        })
    }

    render() {
        const { loadedRecipe, recipeData } = this.state;

        if(!loadedRecipe){
            return(<PreLoader 
                message="Checking Recipe information. Please wait...."/>);
        }

        return (
            <div className="row">
                <div className="col m4">
                    <SideBar />
                </div>
                <div className="col m8">
                    <FormCard form={< EditRecipeForm {...recipeData} />} title={`Edit ${recipeData.name}`}/>
                </div>
            </div>
        );
    }
}

EditRecipe = withRouter(EditRecipe);
export default EditRecipe;
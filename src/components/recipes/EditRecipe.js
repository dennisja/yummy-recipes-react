import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import FormCard from '../forms/FormCard';
import EditRecipeForm from '../forms/EditRecipeForm';
import PreLoader from '../Utilities';
import RecipesRequest from '../../helpers/Recipes';

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
            if(error.response){
                console.log('error')
            }else if(error.request){
                console.log('response')
            }
        })
    }

    render() {
        const { loadedRecipe, recipeData } = this.state;

        if(!loadedRecipe){
            return(<PreLoader message="Checking Recipe information. Please wait...."/>)
        }

        return (
            <div className="row">
                <div className="col m4">
                    Side bar menu here
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
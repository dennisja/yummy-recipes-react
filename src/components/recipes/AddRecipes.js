import React, {Component} from 'react';
import FormCard from '../forms/FormCard';
import AddRecipeForm from '../forms/RecipeForm';

class CreateRecipe extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m4">
                    Side bar menu here
                </div>
                <div className="col m8">
                    <FormCard form={< AddRecipeForm />} title="Add New Recipe"/>
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
import React from 'react';
import FormCard from '../forms/FormCard';
import AddRecipeForm from '../forms/RecipeForm';
import SideBar from '../SideBar';

const CreateRecipe = props => (
  <div className="row">
    <div className="col m4">
      <SideBar />
    </div>
    <div className="col m8">
      <FormCard form={<AddRecipeForm {...props} />} title="Add New Recipe" />
    </div>
  </div>
 );

export default CreateRecipe;

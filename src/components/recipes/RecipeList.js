import React from 'react';
import TimeAgo from 'react-timeago';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultRecipeImage from '../../images/defaultRecipeImage.png';

const RecipeSteps = props => (
  <div>
    <p><strong>Category:</strong> {props.category}</p>
    <div className="card-title">Steps</div>
    <div>

      <pre>{props.steps}</pre>
    </div>
  </div>
    );

const Recipe = (props) => {
    const {
        id,
        name,
        created,
        steps,
        ingredients,
        category,
    } = props.recipe;

    return (
      <div className="col s12 m6 xl4 recipe-card-holder">
        <div className="card sticky-action">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator recipe-image"
              src={defaultRecipeImage}
              alt={`${name}`}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {name}<i className="fa fa-info right" />
            </span>
            <p>
              {ingredients}
            </p>
            <p>
                        Owner: {`${category.owner_details.firstname} ${category.owner_details.lastname}`}
            </p>
            <p>
                        Created: <TimeAgo date={`${created}+3`} />
            </p>
            <div className="card-action center-align">
              <NavLink
                to={`edit-recipe/${id}`}
                className="btn btn-small orange"
                title={`Edit ${name}`}
              ><i className="fa fa-edit" />
              </NavLink>
              <NavLink
                to={`delete-recipe/${id}`}
                onClick={e => props.deleteRecipe(e, id)}
                className="btn btn-small red"
                title={`Delete ${name}`}
              >
                <i className="fa fa-trash-o" />
              </NavLink>
              <NavLink
                to="#recipeModal"
                onClick={e => props.viewRecipe(e, id)}
                className="btn btn-small green waves-effect waves-light modal-trigger"
                title={`View ${name}`}
              >
                <i className="fa fa-eye" />
              </NavLink>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {name}<i className="fa fa-close right" />
            </span>
            <RecipeSteps steps={steps} category={category.name} />
          </div>
        </div>
      </div>
    );
};

const RecipesList = (props) => {
    const { recipes } = props;
    const recipeItems = recipes.map(recipe => (
      <Recipe
        recipe={recipe}
        key={recipe.id}
        deleteRecipe={props.deleteRecipe}
        viewRecipe={props.viewRecipe}
      />
    ));
    return (
      <div className="row">
        {recipeItems}
      </div>
    );
};

const commonPropTypes = {
    deleteRecipe: PropTypes.func.isRequired,
    viewRecipe: PropTypes.func.isRequired,
};

RecipesList.propTypes = {
    ...commonPropTypes,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        category: PropTypes.object,
        edited: PropTypes.string,
        created: PropTypes.string,
        steps: PropTypes.string,
        ingredients: PropTypes.string,
    }).isRequired,
    ...commonPropTypes,
};

RecipeSteps.propTypes = {
    steps: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default RecipesList;

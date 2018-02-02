import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';

import CategoryRequest from '../../helpers/Categories';
import RecipesRequest from '../../helpers/Recipes';
import PreLoader, {displayError} from '../Utilities';

const CategoryOptions = (props) => {
    const {categories} = props;
    const options = categories.map(category => (
        <option value={category.id} key={category.id}>
            {category.name}
        </option>
    ))
    return options;
}

class EditRecipeForm extends Component {
    static initialState = {
        name: "",
        steps: "",
        ingredients: "",
        category: "",
        categories: [],
        loading: true,
        redirectToRecipes: false
    }

    state = EditRecipeForm.initialState;

    componentDidMount() {
        const {
            name,
            steps,
            ingredients,
            category: {
                id: category
            }
        } = this.props;
        CategoryRequest
            .fetchUserCategories()
            .then(response => {
                this.setState({
                    category,
                    steps,
                    ingredients,
                    name,
                    categories: response.data.recipe_cats,
                    loading: false
                })

                //initialize materialize select and overcome the select pain
                const el = ReactDOM.findDOMNode(this.refs.cat);
                $('select').material_select();
                $(el).on('change', this.handleInputChange)
            })
            .catch(error => {
                displayError(error);
            })
    }

    componentDidUpdate() {
        if (!this.state.loading) {
            const el = ReactDOM.findDOMNode(this.refs.cat);
            $('select').material_select();
            $(el).on('change', this.handleInputChange)
        }
    }

    handleRecipeSubmit = (event) => {
        event.preventDefault();
        const {
            categories,
            loading,
            ...recipeData
        } = this.state;

        RecipesRequest
            .editRecipe(this.props.id, recipeData)
            .then(response => {
                window
                    .Materialize
                    .toast(response.data.message, 4000);
                this.setState({redirectToRecipes: true})
            })
            .catch(error => {
                displayError(error);
            })
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {
            name,
            steps,
            ingredients,
            category,
            categories,
            loading,
            redirectToRecipes
        } = this.state;

        if (loading) {
            return (<PreLoader message="Please wait....."/>)
        }

        if (redirectToRecipes) {
            return <Redirect to="/recipes"/>
        }

        return (
            <form onSubmit={this.handleRecipeSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        value={ingredients}
                        onChange={this.handleInputChange}/>
                </div>
                {/* Edit textarea for steps */}
                <div className="input-field">
                    <textarea
                        value={steps}
                        onChange={this.handleInputChange}
                        name="steps"
                        id="steps"
                        className="materialize-textarea"/>
                    <label htmlFor="steps">Steps</label>
                </div>
                {/* Edit select field for category */}
                <div className="input-field">
                    <select
                        name="category"
                        ref="cat"
                        id="category"
                        value={category}
                        onChange={this.handleInputChange}>
                        <CategoryOptions categories={categories}/>
                    </select>
                    <label htmlFor="category">Category</label>
                </div>
                <div className="center-align">
                    <input type="submit" value="Edit Recipe" className="btn btn-small orange"/>
                </div>
            </form>
        );
    }
}

export default EditRecipeForm;
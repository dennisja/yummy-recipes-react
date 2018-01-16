import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const CategoryOptions = (props) => {
    const {categories} = props;
    const options = categories.map(category => (
        <option value={category.name} key={category.id}>
            {category.name}
        </option>
    ))
    return options;
}

class AddRecipeForm extends Component {
    static initialState = {
        name: "",
        steps: "",
        ingredients: "",
        category: "",
        categories: [
            {
                name: "Category 1",
                id: 1
            }, {
                name: "Category 2",
                id: 2
            }, {
                name: "Category3",
                id: 3
            }
        ]
    }

    state = AddRecipeForm.initialState;

    componentDidMount(){
        //initialize materialize select and overcome the select pain
        const el = ReactDOM.findDOMNode(this.refs.cat);
        $('select').material_select();
        $(el).on('change', this.handleInputChange)
    }

    handleRecipeSubmit = (event) => {
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }

    render() {
        const {name, steps, ingredients, category, categories} = this.state;
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
                {/* add textarea for steps */}
                <div className="input-field">
                    <textarea value={steps} onChange={this.handleInputChange} name="steps" id="steps" className="materialize-textarea"/>
                    <label htmlFor="steps">Steps</label>
                </div>
                {/* add select field for category */}
                <div className="input-field">
                    <select  name="category" ref="cat" id="category" value={category} onChange={this.handleInputChange} >
                        <CategoryOptions categories={categories} />
                    </select>
                    <label htmlFor="category">Category</label>
                </div>
                <div className="center-align">
                    <input type="submit" value="Add Recipe" className="btn btn-small orange" /> 
                </div>
            </form>
        );
    }
}

export default AddRecipeForm;
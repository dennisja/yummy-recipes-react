import React, {Component} from 'react';
import CategoryRequest from '../../helpers/Categories';
import { PropTypes } from 'prop-types';

class AddCategoryForm extends Component {
    static initialState = {
        cat_name: ''
    }

    static defaultProps = {
        role: 'add'
    }

    state = AddCategoryForm.initialState

    componentDidMount () {
        if(this.props.role === 'edit'){
            //fetch details of category
            //update state with the current name of the category to fill up the category name
            //if cateogory doent exist, redirect and flag an error
        }
    }
    
    handleInputChange = (event)=>{
        const target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }


    handleCategorySubmit = (event)=>{
        event.preventDefault();
        const {role} = this.props;

        if(role === 'add'){
            //add recipe 
            CategoryRequest.addCategory(this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }

    render() {
        const {cat_name} = this.state;
        const {role} = this.props;

        return (
            <form onSubmit={this.handleCategorySubmit}>
                <div className="input-field">
                    <label htmlFor="cat_name">Category Name:</label>
                    <input type="text" name="cat_name" id="cat_name" value={cat_name} onChange={this.handleInputChange} required/>
                </div>
                <div className="center-align">
                    <input
                        type='submit'
                        id='submit_category'
                        className="btn btn-small orange"
                        name="submit_category"
                        value={`${role === 'add' ? 'Add' : 'Edit'} Category`}/>
                </div>
            </form>
        );
    }
}

AddCategoryForm.propTypes = {
    role: PropTypes.string,
}

export default AddCategoryForm;
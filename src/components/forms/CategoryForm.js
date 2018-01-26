import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

import CategoryRequest from '../../helpers/Categories';


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
            CategoryRequest.getCategory(this.props.categoryId)
            .then((response)=>{
                //update state with the current name of the category to fill up the category name
                this.setState({
                    cat_name: response.data.recipe_cat.name,
                })
            })
            .catch((error)=>{
                //if cateogory doent exist, redirect and flag an error
                if(error.response){
                    console.log(error.response)
                }else if(error.request){
                    console.log(error.request)
                }
            });
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

        if(role==='edit'){
            //edit category
            CategoryRequest.editCategory(this.props.categoryId, this.state)
            .then(response=>{
                window.Materialize.toast("Successfully Edited category", 4000);
                this.props.history.push('/categories')
                console.log(response)
            })
            .catch(error=>{
                if(error.response){
                    console.log(error);
                }else if(error.request){
                    console.log(error);
                }
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
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-toast';

import CategoryRequest from '../../helpers/Categories';
import {displayError} from '../Utilities';

class AddCategoryForm extends Component {
    static initialState = {
        cat_name: ''
    }

    static propTypes = {
        role: PropTypes.string,
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
                displayError(error);
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
                notify.show(response.data.message,'success',4000);

                if(this.props.location.state){
                    this.props.history.push(this.props.location.state.from.pathname);
                    return;
                }
                this.props.history.push('/categories')
            })
            .catch(error=>{
                displayError(error);
            })
        }

        if(role==='edit'){
            //edit category
            CategoryRequest.editCategory(this.props.categoryId, this.state)
            .then(response=>{
                window.Materialize.toast("Successfully Edited category", 4000);
                this.props.history.push('/categories')
            })
            .catch(error=>{
                displayError(error);
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

export default AddCategoryForm;
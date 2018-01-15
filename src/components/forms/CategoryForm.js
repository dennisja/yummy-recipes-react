import React, {Component} from 'react';

class AddCategoryForm extends Component {
    state = {
        cat_name: ''
    }

    handleInputChange = (event)=>{
        const target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }


    handleCategorySubmit = (event)=>{
        event.preventDefault();
        alert(this.state.cat_name)
    }

    render() {
        const {cat_name} = this.state;

        return (
            <form onSUbmit={this.handleCategorySubmit}>
                <div classsName="input-field">
                    <label htmlFor="cat_name">Category Name:</label>
                    <input type="text" name="cat_name" id="cat_name" value={cat_name} onChange={this.handleInputChange} required/>
                </div>
                <div className="center-align">
                    <input
                        type='submit'
                        id='submit_category'
                        className="btn btn-small orange"
                        name="submit_category"
                        value="Add Category"/>
                </div>
            </form>
        );
    }
}

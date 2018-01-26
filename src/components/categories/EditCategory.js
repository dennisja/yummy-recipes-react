import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AddCategoryForm from '../forms/CategoryForm';
import FormCard from '../forms/FormCard';
import CategoryRequest from '../../helpers/Categories';

class EditCategory extends Component {
    
    render() {
        const {categoryId} = this.props.match.params;
        return (
            <div className="row">
                <div className="col m4">
                    side bar component here
                </div>
                <div className="col m8">
                    <FormCard
                        form={< AddCategoryForm role = "edit" 
                                    categoryId = {categoryId } {...this.props}/>}
                        title="Edit Category"/>
                </div>
            </div>
        );
    }
}

EditCategory = withRouter(EditCategory);
export default EditCategory;
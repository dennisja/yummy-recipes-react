import React from 'react';
import { withRouter } from 'react-router-dom';
import AddCategoryForm from '../forms/CategoryForm';
import FormCard from '../forms/FormCard';

const EditCategoryWithNoRouter = (props) => {
        const { categoryId } = this.props.match.params;
        return (
          <div className="row">
            <div className="col m4">
                    side bar component here
            </div>
            <div className="col m8">
              <FormCard
                form={<AddCategoryForm role="edit" categoryId={categoryId} {...props} />}
                title="Edit Category"
              />
            </div>
          </div>
        );
};

const EditCategory = withRouter(EditCategoryWithNoRouter);
export default EditCategory;

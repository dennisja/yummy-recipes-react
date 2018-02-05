import React from 'react';
import { withRouter } from 'react-router-dom';
import AddCategoryForm from '../forms/CategoryForm';
import FormCard from '../forms/FormCard';
import SideBar from '../SideBar';

const EditCategory = withRouter((props) => {
    const { categoryId } = props.match.params;
    return (
      <div className="row">
        <div className="col m4">
          <SideBar />
        </div>
        <div className="col m8">
          <FormCard
            form={<AddCategoryForm role="edit" categoryId={categoryId} {...props} />}
            title="Edit Category"
          />
        </div>
      </div>
    );
});

export default EditCategory;

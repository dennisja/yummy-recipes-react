import React from 'react';
import { withRouter } from 'react-router-dom';
import AddCategoryForm from './forms/CategoryForm';
import FormCard from './forms/FormCard';

const CreateCategory = () => (
  <div className="row">
    <div className="col m4">
        side bar component here
    </div>
    <div className="col m8">
      <FormCard form={<AddCategoryForm />} title="Add New Category" />
    </div>
  </div>
);

// const CreateCategoryWithRouter = withRouter(CreateCategory);
export default CreateCategory;

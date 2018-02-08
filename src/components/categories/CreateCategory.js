import React from 'react';
import { withRouter } from 'react-router-dom';
import AddCategoryForm from '../forms/CategoryForm';
import FormCard from '../forms/FormCard';
import SideBar from '../SideBar';

const CreateCategory = props => (
  <div className="row">
    <div className="col m4">
      <SideBar />
    </div>
    <div className="col m8">
      <FormCard form={<AddCategoryForm {...props} />} title="Add New Category" />
    </div>
  </div>
);

export default CreateCategory;

import React from 'react';
import PropTypes from 'prop-types';

import AddCategoryForm from '../forms/CategoryForm';
import FormCard from '../forms/FormCard';
import SideBar from '../SideBar';

const EditCategory = (props) => {
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
};

EditCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default EditCategory;

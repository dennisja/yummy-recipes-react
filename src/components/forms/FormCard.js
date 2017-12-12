import React from 'react';
import PropTypes from 'prop-types';

const FormCard = (props) => {
   const { title, form } = props;
   return (
     <div className="card">
       <div className="card-content">
         <div className="card-title center-align"><i className="fa fa-unlock" />{ title }</div>
         <hr />
         <div>
           { form }
         </div>
       </div>
     </div>
    );
};

FormCard.propTypes = {
    title: PropTypes.string.isRequired,
    form: PropTypes.element.isRequired,
};

export default FormCard;

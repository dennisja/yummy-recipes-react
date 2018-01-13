import React from 'react';
import PropTypes from 'prop-types';

const FormCard = (props) => {
   const { title, form, iconClass } = props;
   return (
     <div className="card">
       <div className="card-content">
         <div className="card-title center-align">
           { iconClass ? (<i className={iconClass} />) : ''}
           { title }
         </div>
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
    iconClass: PropTypes.string,
};

FormCard.defaultProps = {
    iconClass: null,
};

export default FormCard;

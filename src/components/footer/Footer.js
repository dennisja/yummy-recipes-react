import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const iconStyles = {
  fontSize: '10px',
  textAlign: 'center',
};

export const ShortCutsButton = () => (
  <div className="fixed-action-btn horizontal">
    <button className="btn-floating btn-large red">
      <i className="fa fa-plus" />
    </button>
    <ul>
      <li>
        <Link to="/add-category" className="btn-floating green" style={iconStyles}>
          <i className="fa fa-tags" />
        </Link>
      </li>
      <li>
        <Link to="/add-recipe" className="btn-floating yellow darken-1">
          <i className="fa fa-cutlery" />
        </Link>
      </li>
    </ul>
  </div>
);

const Footer = props => (
    props.isLoggedIn
    ? (
      <ShortCutsButton />
    )
    : null
);

Footer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Footer;

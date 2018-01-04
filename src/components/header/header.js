import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const ProfileDropDown = () => (
  <ul id="dropdown1" className="dropdown-content">
    <li>
      <Link to="/"> <i className="fa fa-user" /> Profile</Link>
    </li>
    <li>
      <Link to="/"> <i className="fa fa-sign-out" /> Logout </Link>
    </li>
  </ul>
);

const MenuItems = (props) => {
    const { loggedIn } = props;
    if (loggedIn) {
        return (
          <div>
            <li>
              <NavLink to="/">
                <i className="fa fa-home" activeClassName="active-nav-link" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active-nav-link">
                <i className="fa fa-cutlery" /> Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active-nav-link">Categories</NavLink>
            </li>
            <li>
              <NavLink
                to="#!"
                className="dropdown-button"
                data-activates="dropdown1"
                id="pdrop"
              >
                <i className="fa fa-user" /> Profile Changed
              </NavLink>
            </li>
          </div>);
    }
    return null;
};

MenuItems.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

const Header = props => (
  <div>
    <ProfileDropDown />
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Yummy Recipes</a>
        <NavLink to="/" data-activates="mobile-demo" className="button-collapse">
          <i className="fa fa-bars" />
        </NavLink>
        <ul className="right hide-on-med-and-down" >
          <MenuItems loggedIn={props.loggedIn} />
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <MenuItems loggedIn={props.loggedIn} />
        </ul>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

export default Header;

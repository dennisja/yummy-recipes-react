import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ProfileCard from '../profile/ProfileCard';

const MenuItems = (props) => {
    const { loggedIn, logoutUser } = props;
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
              <NavLink to="/" activeClassName="active-nav-link">
                <i className="fa fa-tags" /> Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="active-nav-link"
                id="pdrop"
              >
                <i className="fa fa-user" /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={logoutUser}
              > <i className="fa fa-sign-out" /> Logout
              </NavLink>
            </li>
          </div>);
    }
    return null;
};

MenuItems.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
};

const Header = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Yummy Recipes</a>
        <NavLink to="/" data-activates="mobile-demo" className="button-collapse">
          <i className="fa fa-bars" />
        </NavLink>
        <ul className="right hide-on-med-and-down" >
          <MenuItems loggedIn={props.loggedIn} logoutUser={props.logoutUser} />
        </ul>
        <ul className="side-nav" id="mobile-demo">
          {/* render the profile preview on mobile */}
          {
            props.loggedIn
            ? <ProfileCard userData={props.userData} />
            : null
          }
          <MenuItems loggedIn={props.loggedIn} logoutUser={props.logoutUser} />
        </ul>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ProfileCard from '../profile/ProfileCard';

export const MenuItems = (props) => {
    const {
            loggedIn, logoutUser, userName, activeClass,
          } = props;
    if (loggedIn) {
        return (
          <div>
            <li>
              <NavLink to={loggedIn ? '/home' : '/'} activeClassName={activeClass} >
                <i className="fa fa-home" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipes" activeClassName={activeClass}>
                <i className="fa fa-cutlery" /> Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" activeClassName={activeClass}>
                <i className="fa fa-tags" /> Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeClassName={activeClass}
                id="pdrop"
              >
                <i className="fa fa-user" /> {userName}
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
    userName: PropTypes.string.isRequired,
    activeClass: PropTypes.string,
};

MenuItems.defaultProps = {
  activeClass: 'active-nav-link',
};

const Header = props => (
  <header>
    <nav>
      <div className="nav-wrapper orange">
        <NavLink to={props.loggedIn ? '/home' : '/'} className="brand-logo">
        Yummy Recipes
        </NavLink>
        <NavLink to="/" data-activates="mobile-demo" className="button-collapse">
          <i className="fa fa-bars" />
        </NavLink>
        <ul className="right hide-on-med-and-down" >
          <MenuItems
            loggedIn={props.loggedIn}
            logoutUser={props.logoutUser}
            userName={props.userData ? props.userData.firstname : 'Profile'}
          />
        </ul>
        <ul className="side-nav" id="mobile-demo">
          {/* render the profile preview on mobile */}
          {
            props.loggedIn
            ? <ProfileCard userData={props.userData} />
            : null
          }
          <MenuItems
            loggedIn={props.loggedIn}
            logoutUser={props.logoutUser}
            userName={props.userData ? props.userData.firstname : 'Profile'}
            activeClass="active-sidebar-link"
          />
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    userData: PropTypes.object,
};

Header.defaultProps = {
  userData: null,
};

export default Header;

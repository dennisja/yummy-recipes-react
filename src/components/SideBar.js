import React from 'react';
import {NavLink} from 'react-router-dom';
import {activeStyles} from './profile/Profile';

const SideBar = () => (
    <div className="collection">
        <NavLink
            exact
            to='/home'
            className="collection-item active-profile-item"
            activeStyle={activeStyles}><i className="fa fa-home"/> Home
        </NavLink>
        <NavLink
            exact
            to='/recipes'
            className="collection-item active-profile-item"
            activeStyle={activeStyles}><i className="fa fa-cutlery"/> Recipes
        </NavLink>
        <NavLink
            to='/categories'
            className="collection-item"
            activeStyle={activeStyles}><i className="fa fa-tags"/> Categories
        </NavLink>
        <NavLink
            to='/profile'
            className="collection-item"
            activeStyle={activeStyles}><i className="fa fa-user"/> Profile
        </NavLink>
    </div>
);

export default SideBar;
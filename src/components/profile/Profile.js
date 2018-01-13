import React from 'react';
import { withRouter, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserInfo } from './ProfileCard';
import EditProfileForm from '../forms/EditProfileForm';
import ChangePasswordForm from '../forms/ChangePasswordForm';

const propTypes = {
    match: PropTypes.object.isRequired,
};

const activeStyles = {
    backgroundColor: '#ff9800',
    color: 'white',
};

const ProfileMenu = ({ match }) => (
  <div className="collection">
    <NavLink
      exact
      to={`${match.url}`}
      className="collection-item active-profile-item"
      activeStyle={activeStyles}
    >Profile
    </NavLink>
    <NavLink
      to={`${match.url}/edit`}
      className="collection-item"
      activeStyle={activeStyles}
    >Edit Profile
    </NavLink>
    <NavLink
      to={`${match.url}/change-password`}
      className="collection-item"
      activeStyle={activeStyles}
    >Change Password
    </NavLink>
  </div>
);

const ProfileOption = ({ match }) => {
    const { option } = match.params;
    return (
      <div>
        {
            option === 'change-password'
            ? <ChangePasswordForm />
            : <EditProfileForm />
            }
      </div>
    );
};

const Profile = (props) => {
    const { match, userData } = props;
  return (
    <div className="row">
      {/* visible on mobile only */}
      <div className="col s10 hide-on-med-and-up offset-s1">
        <ProfileMenu match={match} />
      </div>
      {/* visible on medium and large devices */}
      <div className="col m4 hide-on-small-only offset-s1">
        <ProfileMenu match={match} />
      </div>
      <div className="col s10 m8 offset-s1">
        <Route path={`${match.url}/:option`} component={ProfileOption} />
        <Route exact path={match.url} render={() => (<UserInfo {...userData} />)} />
      </div>
    </div>);
};

ProfileMenu.propTypes = propTypes;

Profile.propTypes = propTypes;


export const ProfileWithRouter = withRouter(Profile);

export default Profile;


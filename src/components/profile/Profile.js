import React from 'react';
import { withRouter, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserInfo } from './ProfileCard';
import EditProfileForm from '../forms/EditProfileForm';
import ChangePasswordForm from '../forms/ChangePasswordForm';
import FormCard from '../forms/FormCard';
import defaultpicture from '../../images/defaultpicture.jpg';

// define proptypes comment to more than one components here
const propTypes = {
    match: PropTypes.object.isRequired,
};

// styles to be applied to the active class
export const activeStyles = {
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
    ><i className="fa fa-user" /> Profile
    </NavLink>
    <NavLink
      to={`${match.url}/edit`}
      className="collection-item"
      activeStyle={activeStyles}
    ><i className="fa fa-pencil" /> Edit Profile
    </NavLink>
    <NavLink
      to={`${match.url}/change-password`}
      className="collection-item"
      activeStyle={activeStyles}
    ><i className="fa fa-edit" /> Change Password
    </NavLink>
  </div>
);

const ProfileOption = ({ match }) => {
    const { option } = match.params;
    return (
      <div>
        {
            option === 'change-password'
            ? <FormCard
              form={<ChangePasswordForm />}
              title="Change Password"
              iconClass="fa fa-edit"
            />
            : <FormCard
              form={<EditProfileForm />}
              title="Edit Profile"
              iconClass="fa fa-pencil"
            />
            }
      </div>
    );
};

const UserIntro = (props) => {
    const { userData } = props;
    return (
      <div className="card horizontal">
        <div className="card-image">
          <img src={defaultpicture} alt="DJ" className="circle" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{`${userData.firstname} ${userData.lastname}`}</p>
            <p>User&#39;s Biography here</p>
          </div>
        </div>
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
        <UserIntro userData={userData} />
        <Route path={`${match.url}/:option`} component={ProfileOption} />
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="card center-align">
              <div className="card-content">
                <div className="card-title orange white-text">
                  {`${userData.lastname} ${userData.firstname}'s Profile`}
                </div>
                <UserInfo {...userData} />
              </div>
            </div>)}
        />
      </div>
    </div>);
};

ProfileMenu.propTypes = propTypes;

Profile.propTypes = propTypes;


export const ProfileWithRouter = withRouter(Profile);

export default Profile;


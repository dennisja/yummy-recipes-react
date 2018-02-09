import React from 'react';
import PropTypes from 'prop-types';

import defaultpicture from '../../images/defaultpicture.jpg';


export const UserInfo = props => (
  <table id={props.stylesId}>
    <tbody>
      <tr>
        <td className="truncate">First Name:</td>
        <td>{props.firstname}</td>
      </tr>
      <tr>
        <td className="truncate">Last Name:</td>
        <td>{props.lastname}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{props.email}</td>
      </tr>
    </tbody>
  </table>
);

const ProfileCard = (props) => {
    const { firstname, lastname } = props.userData;
    const name = `${firstname} ${lastname}`;
    const cardStyles = {
        margin: 0,
        backgroundColor: '#FF9800',
        maxHeight: '300px',
    };
    const imageStyles = {
        maxWidth: '250px',
        maxHeight: '250px',
        borderRadius: '50%',
    };

    return (
      <div className="card" style={cardStyles}>
        <div className="row">
          <div className="card-image waves-effect waves-block waves-light col s8 offset-s2">
            <img className="activator" src={defaultpicture} alt={`${firstname} ${lastname}`} style={imageStyles} />
          </div>
        </div>
        <div className="card-content">
          <span
            className="card-title activator grey-text text-darken-4"
          >
            {name}  <i className="fa fa-info right" />
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 truncate">
            {name} <i className="fa fa-close right" />
          </span>
          <div>
            <UserInfo {...props.userData} />
          </div>
        </div>
      </div>
    );
};


ProfileCard.propTypes = {
    userData: PropTypes.object.isRequired,
};

UserInfo.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    stylesId: PropTypes.string,
};

UserInfo.defaultProps = {
    stylesId: 'user-info',
};

export default ProfileCard;

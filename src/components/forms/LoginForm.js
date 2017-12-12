import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
    const { onLoginSubmit, onInputChange } = props;
    return (
      <form onSubmit={onLoginSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" onChange={onInputChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="center-align">
          <input type="submit" className="btn" name="login" id="login" value="Login" />
        </div>
      </form>
    );
};

LoginForm.propTypes = {
    onLoginSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default LoginForm;

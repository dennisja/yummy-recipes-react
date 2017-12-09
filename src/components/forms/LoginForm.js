import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
    const { onLoginSubmit, onInputChange } = props;
    return (
      <form onSubmit={onLoginSubmit}>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </form>
    );
};

LoginForm.propTypes = {
    onLoginSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default LoginForm;

/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';
import messages from './messages';
import LoginPage from 'components/LoginPage';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{height:'100%'}}>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <LoginPage/>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

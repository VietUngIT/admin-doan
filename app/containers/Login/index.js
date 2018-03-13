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
import messages from './messages';
import LoginPage from 'components/LoginPage';
import {withRouter} from 'react-router' ;

import {
  loginPhone,
} from './actions';
import {
  selectLoginSuccess,
  selectPhone,
  selectPassword,
} from './selectors';

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
        <LoginPage loginPhone={this.props.loginPhone} email={this.props.email} password={this.props.password}/>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  password: selectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginPhone: (phone,password)=> dispatch(loginPhone(phone,password)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

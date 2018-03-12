/**
*
* LoginPage
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles';

class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.page}>
          <img src={require('./bg.jpg')} width='100%' height='100%'/>
      </div>
    );
  }
}

LoginPage.propTypes = {

};

export default LoginPage;

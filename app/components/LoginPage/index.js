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
import styled from 'styled-components';
import { Input,Button,Icon,Row,Col,Checkbox,message,Form } from 'antd';
const Input_ = styled.input`
  color: black ;
  height : 35px;
  width : 100%;
  borderRadius : 5px;
  border : 1px solid #1A237E;
  fontSize : 15px;
  paddingLeft:8%;
  &:focus {
    box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
    outline: 0;
    color :#5c4646 ;
  },
`;


class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.page}>
          <img src={require('./bg.jpg')} style={styles.imageBG}/>
          <div style={styles.content}>
            <div style={styles.formLogin}>
              <div style={styles.innerformLogin}>
                <div style={{padding: 10}}>
                  <div style={{textAlign: "right"}}>
                    <span style={{fontSize:30,fontWeight:"bold"}}>ADMIN LOGIN</span>
                  </div>
                  <div style={{height: 3,background:"#1A237E",marginBottom: 3}}></div>
                  <div style={{height: 6,background:"#1A237E"}}></div>
                </div>
                <div style={{padding: 10}}>
                  <div style={{marginBottom: 20,marginTop: 30}}>
                    <div style={{width:'20px',height:'100%'}}>
                      <Icon type="user" style={styles.icon} />
                    </div>
                    <Input_ placeholder="Email"  ref="email" autoComplete = "off" />
                  </div>
                  <div style={{marginBottom: 10,marginTop: 10}}>
                    <div style={{width:'20px',height:'100%'}}>
                      <Icon type="lock" style={styles.icon} />
                    </div>
                    <Input_ placeholder="Pass"  ref="pass" autoComplete = "off"/>
                  </div>
                  <div>
                    <Button style={styles.btnLogin} onClick={this.loginEmail} > ĐĂNG NHẬP </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

LoginPage.propTypes = {

};

export default LoginPage;

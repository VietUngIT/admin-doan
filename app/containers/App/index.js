/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';

export  class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let content = null;
    let sessionKey = localStorage.getItem('sessionkey');
    let userInfo = sessionStorage.getItem('userInfo');
    if(sessionKey && userInfo){
      if(location.pathname=='/login'){
        browserHistory.push('/home')
      }
      content = (
        <div style={{height:'100%'}}>
          {React.Children.toArray(this.props.children)}
        </div>
      )
    }else{
      if(location.pathname!='/login'){
        browserHistory.push('/login')
      }
      content = (
        <div style={{height:'100%'}}>
          {React.Children.toArray(this.props.children)}
        </div>
      )
    }
    return (
      <div style={{height:'100%'}}>
        
        {content}
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
};
export default App;

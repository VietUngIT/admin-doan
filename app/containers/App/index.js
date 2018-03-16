import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import {Icon} from 'antd';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import NavigationBar from 'components/NavigationBar'
import ResizeAware from 'react-resize-aware';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  height: 100%;
`;

export  class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        widthNavigation: 3,
      };
  }
  clickIconButton =()=>{
    if(this.state.widthNavigation === 3){
      this.setState({ widthNavigation : 18 });
    }else{
      this.setState({ widthNavigation : 3 });
    }
  }
  handleResize = ({ width, height }) => {
    if(width<980 ){
      this.setState({ 
        widthNavigation : 3,
      });
    }
    if(width>980){
      if(this.state.widthNavigation === 18){
        this.setState({ 
          widthNavigation : 18,
         });
      }
    }
  };
  render() {
    let content = null;

    let userInfo = null;
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo == null){
      userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    }
    if(userInfo){
      console.log("userInfo "+userInfo)
      if(location.pathname=='/login'){
        browserHistory.push('/')
      }
      content = (
        <AppWrapper>
          <ResizeAware style={{height:'100%',display: "flex",minHeight: "100%",width: "100%"}} 
            onlyEvent 
            onResize={this.handleResize}
          >
            <div style={{width: `${this.state.widthNavigation}%`,minWidth: 60,background:'#1E88E5',overflow: 'hidden',transition: 'width 0.5s',}}>
              <NavigationBar widthNavigation={this.state.widthNavigation} changeNavigationBar={()=>this.clickIconButton()}/>
            </div>
            <div style={{width: `${100-this.state.widthNavigation}%`,display: 'flex', flexDirection: 'column'}}>
              <div style={{height: 50, background:"#FFFFFF"}}>
                <div style={{display:"inline-block",float:"right",padding: 5,marginRight: 10}}>
                  <span style={{fontSize: 18,fontWeight: 600, color: "#1E88E5", marginRight: 10,verticalAlign: "bottom"}}>{userInfo.name}</span>
                  <img src={require('./maxresdefault.jpg')} width='40' height='40' style={{borderRadius:50,border: "2px solid #1A237E"}}/>
                </div>
              </div>
              <div style={{flex: 1,background: "#F5F5F5"}}>
                {React.Children.toArray(this.props.children)}
              </div>
            </div>
          </ResizeAware>
        </AppWrapper>
      )
    }else{
      if(!(location.pathname==='/login')){
        browserHistory.push('/login')
      }
      content = (
        <div style={{height:'100%'}}>
          {React.Children.toArray(this.props.children)}
        </div>
      )
    }
    return (
      <div style={{height:'100%',borderBottom:"2px solid #37474F",borderTop:"2px solid #37474F",borderRight:"2px solid #37474F"}}>
        {content}
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
};
export default App;

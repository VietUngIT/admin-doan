import React from 'react';
import styled from 'styled-components';
import {Icon} from 'antd';
import { Link, } from 'react-router';
import styles from './styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { active } from 'glamor';

const SpanStyled = styled.span`
  fontSize: 18,
  marginTop: 11,
  fontWeight: 600,
`;
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  changeNavigationBar=(width)=>{
    if(width===18){
      this.props.changeNavigationBar();
    }else{
      this.props.changeNavigationBar();
    }
  }
  componentDidMount(){
    if(location.pathname.toUpperCase().indexOf("/")>-1){
      this.setState({active: 1}); 
    }
  }
  
  render() {
    
    var icon = null;
    if(this.props.widthNavigation==18){
      icon = (<Icon type="close" style={{color:'#FFFFFF',fontSize:'25px',marginLeft: 10}} onClick={this.changeNavigationBar}/>);
    }else{
      icon = (<Icon type="menu-unfold" style={{color:'#FFFFFF',fontSize:'25px',margin:"auto",width: "100%"}} onClick={this.changeNavigationBar}/>);
    }
    return (
      <div style={{background: "#283593",height:'100%'}}>
        <div style={{height: 50,background: "#1A237E",paddingTop: 10}}>
          {icon}
        </div>
        <div style={{paddingTop: 15,paddingLeft:10,paddingRight:10,marginBottom: 7}}>
          <Link style={{textDecoration: 'none'}} to='/'>
            <div style={{background:this.state.active===1?"#00B8D4":"#1A237E", width:"100%",height: 40}}>
              <Icon type="appstore" style={{width:this.props.widthNavigation===18?"25%":"100%",fontSize: 18,color: "#ffffff",marginTop: 11,}}/>
              <SpanStyled style={{display:this.props.widthNavigation===18?"":"none",color:"#FFF",fontSize:"16px"}}>Home</SpanStyled>
            </div>
          </Link>
        </div>
        <div style={{paddingTop: 15,paddingLeft:10,paddingRight:10,marginBottom: 7}}>
          <Link style={{textDecoration: 'none'}} to='/'>
            <div style={{background:"#1A237E", width: "100%",height: 40}}>
              <Icon type="copy" style={{width:this.props.widthNavigation===18?"25%":"100%",fontSize: 18,color: "#ffffff",marginTop: 11,}}/>
              <SpanStyled style={{display:this.props.widthNavigation===18?"":"none",color:"#FFF",fontSize:"16px"}}>News</SpanStyled>
            </div>
          </Link>
        </div>
        <div style={{paddingTop: 15,paddingLeft:10,paddingRight:10,marginBottom: 7}}>
          <Link style={{textDecoration: 'none'}} to='/'>
            <div style={{background:"#1A237E", width: "100%",height: 40}}>
              <Icon type="line-chart" style={{width:this.props.widthNavigation===18?"25%":"100%",fontSize: 18,color: "#ffffff",marginTop: 11,}}/>
              <SpanStyled style={{display:this.props.widthNavigation===18?"":"none",color:"#FFF",fontSize:"16px"}}>Giá cả thị trường.</SpanStyled>
            </div>
          </Link>
        </div>
        <div style={{paddingTop: 15,paddingLeft:10,paddingRight:10,marginBottom: 7}}>
          <Link style={{textDecoration: 'none'}} to='/'>
            <div style={{background:"#1A237E", width: "100%",height: 40}}>
              <Icon type="edit" style={{width:this.props.widthNavigation===18?"25%":"100%",fontSize: 18,color: "#ffffff",marginTop: 11,}}/>
              <SpanStyled style={{display:this.props.widthNavigation===18?"":"none",color:"#FFF",fontSize:"16px"}}>Bình luận</SpanStyled>
            </div>
          </Link>
        </div>
        <div style={{paddingTop: 15,paddingLeft:10,paddingRight:10,marginBottom: 7}}>
          <Link style={{textDecoration: 'none'}} to='/'>
            <div style={{background:"#1A237E", width: "100%",height: 40}}>
              <Icon type="solution" style={{width:this.props.widthNavigation===18?"25%":"100%",fontSize: 18,color: "#ffffff",marginTop: 11,}}/>
              <SpanStyled style={{display:this.props.widthNavigation===18?"":"none",color:"#FFF",fontSize:"16px"}}>Thông tin người dùng</SpanStyled>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;

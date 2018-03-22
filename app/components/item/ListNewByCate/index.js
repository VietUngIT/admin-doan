/**
*
* ListNewByCate
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ItemNews from '../../item/ItemNews'
class ListNewByCate extends React.Component { 
  render() {
    let name = null;
    let listItem = null;
    if(this.props.listNews && this.props.listNews.size>0){
      listItem = this.props.listNews.map((item,index) => {
        return (<ItemNews key={index} data={item}/>);
      });
    }
    if(this.props.nameCateGetNews){
      name = this.props.nameCateGetNews;
    }else{
      name = "";
    }
    return (
      <div style={{width: `${this.props.widthListNew}%`,}}>
        <div style={{paddingTop: 26, width: '90%',margin:'auto',maxWidth:690}}>
          <div style={{height: '36px',background: '#c5e5fb',textAlign: 'center',paddingTop: "4px",width:"100%"}}>
            <div style={{fontSize: '18px',marginBottom:5}}>Danh sách tin tức {name} </div>
          </div>
          <div style={{paddingTop:5,}}>
            {listItem}
          </div>
        </div>
      </div>
    );
  }
}

ListNewByCate.propTypes = {

};

export default ListNewByCate;

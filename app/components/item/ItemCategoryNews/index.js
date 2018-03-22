/**
*
* ItemCategoryNews
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import {message,} from 'antd';
import { Tooltip, Icon } from 'antd'

class ItemCategoryNews extends React.Component {
  viewDetail=()=>{
    if(this.props.data){
      this.props.getListNewsByCate(this.props.data.id,this.props.data.name)
    }
    
  }
  onClickEdit=()=>{
    console.log("onClickEdit: "+this.refs.categoryedit.value)
    if(this.refs.categoryedit.value==null || this.refs.categoryedit.value.trim()===""){
      message.error("Nhập đầy đủ thông tin.")
    }else{
      if(this.props.data){
        this.props.editCateNews(this.props.data.id,this.refs.categoryedit.value);
      }
    }
    
  }
  onClickDelete=()=>{
    if(this.props.data){
      this.props.delCateNews(this.props.data.id)
    }
    
  }
  render() {
    let name = null;
    if(this.props.data){
      name = this.props.data.name;
    }
    return (
      <tr style={{display:"flex"}}>
        <td style={{border: "1px solid #dddddd", flex: 1}}>
          <input ref="categoryedit" type="text" name="firstname" defaultValue={name} style={{height: "100%",padding: 3,width: "100%"}}/>
        </td>
        <td style={{border: "1px solid #dddddd",paddingTop: 2, height: 32,flexBasis: 80}}>
          <Tooltip placement="leftTop" title="Lưu">
            <Icon onClick={()=>this.onClickEdit()} style={{fontSize: 20,fontWeight: 600,padding: 3}} type="save" />
          </Tooltip>
          <Tooltip placement="top" title="Xóa">
            <Icon onClick={()=>this.onClickDelete()} style={{fontSize: 20,fontWeight: 600,padding: 3}} type="delete" />
          </Tooltip>
          <Tooltip placement="rightTop" title="Xem danh sách tin tức">
            <Icon onClick={()=>this.viewDetail()} style={{fontSize: 20,fontWeight: 600,padding: 3}} type="bars" />
          </Tooltip>
        </td>
      </tr>
    );
  }
}

ItemCategoryNews.propTypes = {

};

export default ItemCategoryNews;

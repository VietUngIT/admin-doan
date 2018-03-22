/**
*
* ItemNews
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button, Icon } from 'antd'

class ItemNews extends React.Component { 
  viewDetailNews(){
    console.log("viewDetailNews")
  }
  render() {
    let title = "";
    let desc = "";
    let image = require('containers/App/maxresdefault.jpg');
    let date = "";
    let view = 0;
    let comment = 0;
    let like = 0;
    if(this.props.data){
      title = this.props.data.title;
      desc = this.props.data.shortDescription;
      image = this.props.data.image;
      date = this.props.data.timeCreate;
      view = this.props.data.views;
      comment = this.props.data.comments;
      like = this.props.data.likes;
    }
    return (
      <div style={{flexDirection:"row",border: "1px solid #1A237E",display:'flex',marginBottom:7}}>
        <div style={{display:"inline-block"}}>
          <img src={image} id="imgstore" width='140px' height='120px' />
        </div>
        <div style={{height:120,flex:1}}>
          <div style={{width:'90%',margin:'auto',borderBottom:"1px solid",padding:5}}>
            <div style={{fontSize:16,fontWeight:600,color:'#448aff',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: "ellipsis"}}>
              {title}
            </div>
          </div>
          <div style={{textAlign:'left',width: '90%',margin: 'auto',paddingTop: 5,overflow: 'hidden',textOverflow: "ellipsis"}}>
            {desc}
          </div> 
          <div style={{flexDirection: 'row',display: 'flex',width: '90%',margin: 'auto',paddingTop:5}}>
            <div style={{flex: 6,textAlign: 'left',fontStyle:"italic"}}>
              Ngày cập nhật: {date}
            </div>
            <div style={{flex: 4,display:'flex',flexDirection:"row"}}>
              <div style={{flex:1}}>
                <Icon type="message" style={{color:'#00B0FF',verticalAlign: 'text-bottom',marginRight: 2,fontSize: 14}}/>
                <span>{comment}</span>
              </div>
              <div style={{flex:1}}>
                <Icon type="eye" style={{color:'#00B0FF',verticalAlign: 'text-bottom',marginRight: 2,fontSize: 14}}/>
                <span>{view}</span>
              </div>
              <div style={{flex:1}}>
                <Icon type="heart" style={{color:'#D81B60',verticalAlign: 'text-bottom',marginRight: 2,fontSize: 14}}/>
                <span>{like}</span>
              </div>
            </div>
            <div style={{flexBasis: 70}}>
              <div style={{textDecoration: 'underline',color: '#1976D2'}} onClick={()=>this.viewDetailNews()}>Chi tiết >></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ItemNews.propTypes = {

};

export default ItemNews;

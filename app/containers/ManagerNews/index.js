/*
 *
 * ManagerNews
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import CmanagerNews from 'components/CmanagerNews'
import {
  getListCateNews,
  addCateNews,
  delCateNews,
  editCateNews,
  getListNewsByCate,
} from './actions';
import {
  selectCategoryNewsName,
  selectCategoryNewsList,
  selectidCateGetNews,
  selectshowNameCate,
  selectlistNewsByCate,
} from './selectors';

export class ManagerNews extends React.Component { 
  componentWillMount(){
    this.props.getListCateNews();
    if(this.props.idCateGetNews && this.props.nameCateGetNews){
      this.props.getListNewsByCate(this.props.idCateGetNews,this.props.nameCateGetNews);
    }
  }
  render() {
    return (
      <div style={{height:'100%'}}>
        <Helmet
          title="ManagerNews"
          meta={[
            { name: 'description', content: 'Description of ManagerNews' },
          ]}
        />
        <CmanagerNews listCategoryNews={this.props.listCategoryNews} addCateNews={this.props.addCateNews} delCateNews={this.props.delCateNews}
          editCateNews={this.props.editCateNews} getListNewsByCate={this.props.getListNewsByCate} nameCateGetNews={this.props.nameCateGetNews}
          listNews={this.props.listNews}/>
      </div>
    );
  }
}

ManagerNews.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listCategoryNews: selectCategoryNewsList(),
  nameCategoryNews: selectCategoryNewsName(),
  idCateGetNews: selectidCateGetNews(),
  nameCateGetNews: selectshowNameCate(),
  listNews: selectlistNewsByCate(),
});

function mapDispatchToProps(dispatch) {
  return {
    getListCateNews: ()=> dispatch(getListCateNews()),
    addCateNews: (categoryNews)=> dispatch(addCateNews(categoryNews)),
    delCateNews: (id)=> dispatch(delCateNews(id)),
    editCateNews: (id,nameCate)=> dispatch(editCateNews(id,nameCate)),
    getListNewsByCate: (id,name)=> dispatch(getListNewsByCate(id,name)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerNews);

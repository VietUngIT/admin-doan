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
} from './actions';
import {
  selectCategoryNewsName,
  selectCategoryNewsList,
} from './selectors';

export class ManagerNews extends React.Component { 
  componentWillMount(){
    this.props.getListCateNews();
  }
  render() {
    return (
      <div>
        <Helmet
          title="ManagerNews"
          meta={[
            { name: 'description', content: 'Description of ManagerNews' },
          ]}
        />
        <CmanagerNews listCategoryNews={this.props.listCategoryNews} addCateNews={this.props.addCateNews} delCateNews={this.props.delCateNews}
          editCateNews={this.props.editCateNews}/>
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
});

function mapDispatchToProps(dispatch) {
  return {
    getListCateNews: ()=> dispatch(getListCateNews()),
    addCateNews: (categoryNews)=> dispatch(addCateNews(categoryNews)),
    delCateNews: (id)=> dispatch(delCateNews(id)),
    editCateNews: (id,nameCate)=> dispatch(editCateNews(id,nameCate)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerNews);

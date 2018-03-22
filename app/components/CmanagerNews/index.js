/**
*
* CmanagerNews
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CategoryNews from '../item/CategoryNews'

class CmanagerNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widthCategoryNew: 40,
      widthListNew: 70,
    };
  }
  render() {
    return (
      <div>
        <CategoryNews widthCategoryNew={this.state.widthCategoryNew} listCategoryNews={this.props.listCategoryNews} addCateNews={this.props.addCateNews} delCateNews={this.props.delCateNews}
          editCateNews={this.props.editCateNews}/>
      </div>
    );
  }
}

CmanagerNews.propTypes = {

};

export default CmanagerNews;

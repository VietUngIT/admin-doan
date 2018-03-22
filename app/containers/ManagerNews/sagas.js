import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';

import { 
  GET_LIST_CATE_NEWS_ACTION,
  ADD_CATE_NEWS_ACTION,
  DEL_CATE_NEWS_ACTION,
  EDIT_CATE_NEWS_ACTION,
  GET_LIST_NEWS_BY_CATE_ACTION,
} from './constants';
import { 
  getListCateNewsSuccess,
  addCateNewsSuccess,
  delCateNewsSuccess,
  editCateNewsSuccess,
  getListNewsByCateSuccess,
} from './actions';
import {message,} from 'antd';
import {
  callAPIGetListCategoryNews,
  callAPIAddCategoryNews,
  callAPIDelCategoryNews,
  callAPIEditCategoryNews,
  callAPIGetListNewsByCate,
} from 'utils/request';
import {
  selectCategoryNewsName,
  selectIdCategoryNewsDel,
  selectIdCategoryNewsEdit,
  selectNameCategoryNewsEdit,
  selectidCateGetNews,
} from './selectors';

export function* getListCategoryNews() {
  let userInfo = null;
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo == null){
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  const response = yield call(callAPIGetListCategoryNews,userInfo.phone,userInfo.password);
  try{
    console.log("response.data.data.array: \n"+response.data.data.array.toString())
    if (response.data.data.e==0) {
        yield put(getListCateNewsSuccess(response.data.data.array));
    } else {
      message.error(response.data.data.msg);
    }
  } catch(error){
          message.error(response.data.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* getListCategoryNewsWatcher() {
  while (yield take(GET_LIST_CATE_NEWS_ACTION)) {
    yield call(getListCategoryNews);
  }
}

export function* addCategoryNews() {
  let userInfo = null;
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo == null){
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  const name = yield select(selectCategoryNewsName());
  const response = yield call(callAPIAddCategoryNews,userInfo.phone,userInfo.password,name);
  try{
    if (response.data.data.e==0) {
        yield put(addCateNewsSuccess(response.data.data.data));
        message.success("Thêm thành công.")
    } else {
      message.error(response.data.data.msg);
    }
  } catch(error){
          message.error(response.data.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* addCategoryNewsWatcher() {
  while (yield take(ADD_CATE_NEWS_ACTION)) {
    yield call(addCategoryNews);
  }
}

export function* delCategoryNews() {
  let userInfo = null;
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo == null){
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  const id = yield select(selectIdCategoryNewsDel());
  const response = yield call(callAPIDelCategoryNews,userInfo.phone,userInfo.password,id);
  try{
    if (response.data.data.e==0) {
        yield put(delCateNewsSuccess(id));
        message.success("Xóa thành công.")
    } else {
      message.error(response.data.data.msg);
    }
  } catch(error){
          message.error(response.data.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* delCategoryNewsWatcher() {
  while (yield take(DEL_CATE_NEWS_ACTION)) {
    yield call(delCategoryNews);
  }
}

export function* editCategoryNews() {
  let userInfo = null;
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo == null){
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  const id = yield select(selectIdCategoryNewsEdit());
  const name = yield select(selectNameCategoryNewsEdit());
  const response = yield call(callAPIEditCategoryNews,userInfo.phone,userInfo.password,id,name);
  try{
    if (response.data.data.e==0) {
        yield put(editCateNewsSuccess(response.data.data.data));
        message.success("Sửa thành công.")
    } else {
      message.error(response.data.data.msg);
    }
  } catch(error){
          message.error(response.data.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* editCategoryNewsWatcher() {
  while (yield take(EDIT_CATE_NEWS_ACTION)) {
    yield call(editCategoryNews);
  }
}

export function* getListNewsByCate() {
  let userInfo = null;
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(userInfo == null){
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  const id = yield select(selectidCateGetNews());
  const response = yield call(callAPIGetListNewsByCate,userInfo.phone,userInfo.password,id,0);
  try{
    if (response.data.data.e==0) {
        yield put(getListNewsByCateSuccess(response.data.data.array));
    } else {
      message.error(response.data.data.msg);
    }
  } catch(error){
          message.error(response.data.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* getListNewsByCateWatcher() {
  while (yield take(GET_LIST_NEWS_BY_CATE_ACTION)) {
    yield call(getListNewsByCate);
  }
}

export function* newsData() {
  const watchergetListCategoryNews = yield fork(getListCategoryNewsWatcher);
  const watcheraddCategoryNews = yield fork(addCategoryNewsWatcher);
  const watcherdelCategoryNews = yield fork(delCategoryNewsWatcher);
  const watchereditCategoryNews = yield fork(editCategoryNewsWatcher);
  const watchergetListNewsByCate = yield fork(getListNewsByCateWatcher);
  if(yield take(LOCATION_CHANGE)){
    yield cancel(watchergetListCategoryNews);
    yield cancel(watcheraddCategoryNews);
    yield cancel(delCategoryNews);
    yield cancel(watchereditCategoryNews);
    yield cancel(watchergetListNewsByCate);
  }
}

export default [
  newsData,
];

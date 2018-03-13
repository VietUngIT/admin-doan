import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { LOGIN_PHONE } from './constants';
import { 
  loginSuccess,
  loginError,
} from './actions';
import {message,} from 'antd';
//import {callAPILogin,callAPIResetPassStep1} from 'utils/request';
import {
  selectPhone,
  selectPassword,
} from './selectors';
// import {callAPILoginEmail} from 'utils/request';

export function* loginPhone() {
  const phone = yield select(selectPhone());
  const password =(yield select(selectPassword()));
  // const response = yield call(callAPILoginEmail,phone,password);
  
  try{
    if (response.data.e==0) {
        yield put(loginSuccess());
        localStorage.setItem('userInfo',(JSON.stringify(response.data.data)));
        message.info('Xin chào ' + response.data.data.name);

    } else {
      message.error(response.data.msg);
    }
  } catch(error){
          message.error(response.data.e);
          message.error('Lỗi đăng nhập !');
  }
  
}

export function* loginPhoneWatcher() {
  while (yield take(LOGIN_PHONE)) {
    yield call(loginEmail);
  }
}

export function* loginData() {
  const watcher = yield fork(loginWatcher);
  if(yield take(LOCATION_CHANGE)){
    yield cancel(watcher);

  }
}

export default [
  loginData,
];

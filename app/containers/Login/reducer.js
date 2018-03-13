/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PHONE,
} from './constants';

const initialState = fromJS({
  phone: false,
  password: false,
  loginSuccess: false,
  err: false,
  user: false,
  onLogOutFb: false,
  isLogedin: false,
  isLogOut: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_PHONE:
      return state
        .set('err',false)
        .set('loginSuccess',false)
        .set('password',action.password)
        .set('phone',actionphone)
    case LOGIN_SUCCESS:
      return state
        .set('loginSuccess',true)
        .set('password',false)
        .set('email',false)
        .set('user',action.user)
        .set('err',false)
    case LOGIN_ERROR:
      return state
        .set('err',action.error);
    default:
      return state;
  }
}

export default loginReducer;

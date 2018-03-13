/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PHONE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loginPhone(phone,password) {
  return {
    type: LOGIN_PHONE,
    phone,
    password,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

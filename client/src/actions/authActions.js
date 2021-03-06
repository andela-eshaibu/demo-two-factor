import Syncano from 'syncano-client';
import * as actionTypes from '../constants/actionTypes';
import history from '../utils/history';
import handle401 from '../utils/helpers';

const s = new Syncano('winter-morning-7464');

/**
 * @param {object} userDetails
 * @return {void}
 */
const loginAction = userDetails => (dispatch) => {
  s.post('rest-auth/login', userDetails)
    .then((user) => {
      sessionStorage.setItem('token', user.token);
      sessionStorage.setItem('username', user.username);
      dispatch({ type: actionTypes.LOGIN_SUCCESSFUL, payload: user });
      history.push('/');
    })
    .catch((err) => {
      console.log(err.response.data, '<<<<<<<<<');
      dispatch({ type: actionTypes.LOGIN_UNSUCCESSFUL });
      dispatch({ type: actionTypes.ALERT_ERROR, payload: err.response.data.message });
    });
};

/**
 * @param {object} userDetails
 * @return {void}
 */
const registerAction = userDetails => (dispatch) => {
  s.post('rest-auth/register', userDetails)
    .then((user) => {
      sessionStorage.setItem('token', user.token);
      sessionStorage.setItem('username', user.email);
      dispatch({ type: actionTypes.REGISTER_SUCCESSFUL });
      dispatch({ type: actionTypes.LOGIN_SUCCESSFUL, payload: user });
      history.push('/');
    })
    .catch((err) => {
      dispatch({ type: actionTypes.REGISTER_SUCCESSFUL });
      dispatch({ type: actionTypes.ALERT_ERROR, payload: err.response.data.username });
    });
};

/**
 * On logout refresh user token then clear sessionStorage
 * @return {void}
 */
const logoutAction = () => (dispatch) => {
  s.post('rest-auth/refresh', {
    username: sessionStorage.getItem('username'),
    token: sessionStorage.getItem('token')
  })
    .then(() => {
      dispatch({ type: actionTypes.LOGOUT });
      handle401();
    });
};

export {
  loginAction,
  registerAction,
  logoutAction
};

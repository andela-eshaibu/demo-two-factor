import { LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, LOGOUT } from '../constants/actionTypes';

const initialState = {
  success: false,
  userDetails: null
};

/**
 * @param {object} state
 * @param {object} action
 * @return {object} state - the new state
 */
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      state = {
        ...state,
        success: !!window.sessionStorage.token,
        userDetails: action.payload
      };
      break;
    case LOGIN_UNSUCCESSFUL:
      state = {
        ...state,
        success: false,
      };
      break;
    case LOGOUT:
      state = {};
      break;
    default:
      return state;
  }
  return state;
};
export default loginReducer;

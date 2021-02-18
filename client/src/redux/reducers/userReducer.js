import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS,
  } from '../constantes/actionType'
  
  const initialState = {
      
    token: localStorage.getItem('token'), //null
    user: null,
    isAuth: false,
    isLoading: true,
    msg: null,
    admin:false
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case REGISTER_USER:
      case LOGIN_USER:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          msg: payload.msg,
          ...payload,
        };
      case GET_AUTH_USER:
        localStorage.getItem('token')
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          admin:payload.user.admin,
          ...payload,
        };
      case AUTH_ERRORS:
      case LOGOUT_USER:
        localStorage.removeItem('token');

        return {
          ...state,
          token: null,
          isAuth: false,
          user: null,
          isLoading: false,
          admin:false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;

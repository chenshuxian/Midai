import { FETCH_USERS } from "./users.actions";
import {
  USER_LOGIN_STATE,
  USER_LOGOUT_STATE,
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SHOW_USER_MODAL,
  HIDE_USER_MODAL,
  SHOW_REG_MODAL,
  HIDE_REG_MODAL,
  SHOW_REG_PHONE_MODAL,
  HIDE_REG_PHONE_MODAL,
  SHOW_REG_WELCOME_MODAL,
  HIDE_REG_WELCOME_MODAL,
  SHOW_REG_PHOTO_MODAL,
  HIDE_REG_PHOTO_MODAL,
  SET_REG_STATE,
  SET_USER_BIRTHDAY,
} from "../actionTypes";

const initState = {
  users: {
    birthday: '2021-2-17'
  },
  views: {
    loginModal: false,
    userModal: false,
    regModal: false,
    regWelcomeModal: false,
    regPhoneModal: false,
    regPhotoModal: false
  },
  userLoginState: false,
  userRegState: false
};

const reducer = (state = initState, action) => {

  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        views: {
          ...state.views, loginModal: action.login
        }
      };
    case HIDE_LOGIN_MODAL:
      return {
        ...state,
        views: {
          ...state.views, loginModal: action.login
        }
      };
    case SHOW_USER_MODAL:
      return {
        ...state,
        views: {
          ...state.views, userModal: action.user
        }
      };
    case HIDE_USER_MODAL:
      return {
        ...state,
        views: {
          ...state.views, userModal: action.user
        }
      };
    case SHOW_REG_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regModal: action.reg
        }
      };
    case HIDE_REG_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regModal: action.reg
        }
      };
    case SHOW_REG_WELCOME_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regWelcomeModal: action.open
        }
      };
    case HIDE_REG_WELCOME_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regWelcomeModal: action.open
        }
      };
    case SHOW_REG_PHONE_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regPhoneModal: action.open
        }
      };
    case HIDE_REG_PHONE_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regPhoneModal: action.open
        }
      };
    case SHOW_REG_PHOTO_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regPhotoModal: action.open
        }
      };
    case HIDE_REG_PHOTO_MODAL:
      return {
        ...state,
        views: {
          ...state.views, regPhotoModal: action.open
        }
      };
    case USER_LOGIN_STATE:
      return {
        ...state,
        userLoginState: action.login
      };
    case USER_LOGOUT_STATE:
      return {
        ...state,
        userLoginState: action.login
      };
    case SET_REG_STATE:
      return {
        ...state,
        userRegState: action.already
      };
    case SET_USER_BIRTHDAY:
      let key = action.payload.key;
      return {
        ...state,
        users: {
          ...state.users, [key]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export default reducer;

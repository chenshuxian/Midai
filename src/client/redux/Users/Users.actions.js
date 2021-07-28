import { FlashOffRounded, FormatColorReset } from "@material-ui/icons";
import axios from "axios";
import {
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
  USER_LOGIN_STATE,
  USER_LOGOUT_STATE,
  SET_REG_STATE,
  SET_USER_BIRTHDAY
} from "../actionTypes";

export function showLoginModal() {
  console.log('showlogin');
  return { type: SHOW_LOGIN_MODAL, login: true }
}

export function hideLoginModal() {
  return { type: HIDE_LOGIN_MODAL, login: false }
}

export function showUserModal() {
  console.log('showlogin');
  return { type: SHOW_USER_MODAL, user: true }
}

export function hideUserModal() {
  return { type: HIDE_USER_MODAL, user: false }
}

export function showRegModal() {
  console.log('showlogin');
  return { type: SHOW_REG_MODAL, reg: true }
}

export function hideRegModal() {
  return { type: HIDE_REG_MODAL, reg: false }
}


export function showRegWelcomeModal() {
  return { type: SHOW_REG_WELCOME_MODAL, open: true }
}

export function hideRegWelcomeModal() {
  return { type: HIDE_REG_WELCOME_MODAL, open: false }
}


export function showRegPhoneModal() {
  console.log('showlogin');
  return { type: SHOW_REG_PHONE_MODAL, open: true }
}

export function hideRegPhoneModal() {
  return { type: HIDE_REG_PHONE_MODAL, open: false }
}


export function showRegPhotoModal() {
  console.log('showlogin');
  return { type: SHOW_REG_PHOTO_MODAL, open: true }
}

export function hideRegPhotoModal() {
  return { type: HIDE_REG_PHOTO_MODAL, open: false }
}


export function userLoginState() {
  return { type: USER_LOGIN_STATE, login: true }
}

export function userLogoutState() {
  return { type: USER_LOGOUT_STATE, login: false }
}

export function setRegState() {
  return { type: SET_REG_STATE, already: true }
}

export function setUserBirthday(birthday) {
  return { type: SET_USER_BIRTHDAY, payload: { key: 'birthday', value: birthday } }
}

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("https://reqres.in/api/users?page=2");

  dispatch({
    type: FETCH_USERS,
    payload: res.data.data,
  });
};

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

import CMenu from '../CMenu/CMenu';
import LoginModal from '../Modal/loginModal';

import { useSelector, useDispatch } from "react-redux";
import {
  showLoginModal,
  hideLoginModal,
  showUserModal,
  hideUserModal,
  showRegModal,
  hideRegModal,
  showRegWelcomeModal,
  userLoginState,
  userLogoutState,
  setRegState
} from "../../redux/Users/Users.actions";


export default function LoginBtn() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.userLoginState);
  const regState = useSelector((state) => state.userRegState);


  const handleClickOpen = (event) => {
    if (loginState) {
      // 登入狀態
      setAnchorEl(event.currentTarget);
      dispatch(showUserModal());
      dispatch(showRegWelcomeModal());
    } else {
      // 登出狀態
      dispatch(showLoginModal());
    }

  };
  const handleClose = () => {

    if (loginState) {
      // 登入狀態
      setAnchorEl(null);
      dispatch(hideUserModal());
    } else {
      // 登出狀態
      dispatch(hideLoginModal());
    }
  };

  const handleLogin = () => {

    //if (regState)
    dispatch(userLoginState());
    dispatch(hideLoginModal());
    if (!regState) {
      // 未完成註冊
      dispatch(showRegModal());
      // dispatch(setRegState());
    }

  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(hideUserModal());
    dispatch(userLogoutState());
  };

  return (
    <div>
      <IconButton color="primary" aria-label="upload picture" onClick={handleClickOpen} >
        {
          loginState ? <Avatar>J</Avatar> : <AccountCircleIcon fontSize="large" />
        }
      </IconButton>
      <CMenu anchorEl={anchorEl} handleClose={handleClose} handleLogout={handleLogout} />
      <LoginModal handleClose={handleClose} handleLogin={handleLogin} />
    </div>
  );
}

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';

import { useSelector, useDispatch } from "react-redux";
import { DialogContent, DialogTitle, Transition } from './ModalCommon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginModal = (props) => {
  const classes = useStyles();
  const showLoginModal = useSelector((state) => state.views.loginModal);
  return (
    <Dialog aria-labelledby="customized-dialog-title" open={showLoginModal} TransitionComponent={Transition}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        登入或註冊
      </DialogTitle>
      <DialogContent dividers>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FacebookIcon />}
              onClick={props.handleLogin}
            >
              使用 Facebook 登入
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FacebookIcon />}
            >
              使用 Facebook 登入
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FacebookIcon />}
            >
              使用 Facebook 登入
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>)
}

export default LoginModal;
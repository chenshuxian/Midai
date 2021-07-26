import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from "react-redux";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    alignSelf: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 500,
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const LoginModal = (props) => {
  const classes = useStyles();
  const showLoginModal = useSelector((state) => state.user.views.loginModal);
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
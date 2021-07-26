import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from "react-redux";
import Slide from '@material-ui/core/Slide';
import DateP from './DateP';
import RegForm from './RegForm';

import { hideRegModal, setRegState } from '../../../redux/Users/Users.actions';

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
        minWidth: 500
    },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const RegModal = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showRegModal = useSelector((state) => state.user.views.regModal);
    const handleClose = () => {
        dispatch(hideRegModal());
    }
    const degree = () => {
        dispatch(setRegState());
        handleClose();
    }

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={showRegModal} TransitionComponent={Transition}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                完成註冊
            </DialogTitle>
            <DialogContent dividers>
                <RegForm />
                {/* <Grid
                    container
                    direction="column"
                    justifyContent="center"
                >
                    <Grid>
                        <TextField
                            id="outlined-full-width"
                            label="名字"
                            placeholder="Placeholder"
                            defaultValue=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            id="outlined-full-width"
                            label="姓名"
                            placeholder="Placeholder"
                            defaultValue=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid container>
                        <DateP />
                    </Grid>
                    <Grid>
                        <Button fullWidth variant="contained" color="secondary" onClick={degree}>
                            同意並繼續
                        </Button>
                    </Grid>
                </Grid> */}
            </DialogContent>
        </Dialog>)
}

export default RegModal;
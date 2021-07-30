import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        alignSelf: 'center'
    },
    closeButton: {
        position: 'absolute',
        left: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

export const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, onBack, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : onBack ? (
                <IconButton aria-label="back" className={classes.closeButton} onClick={onBack}>
                    <ArrowBackIosIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        minWidth: 500
    },
}))(MuiDialogContent);

export const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Dialog, Button } from '@material-ui/core';

import { DialogContent, DialogTitle, Transition } from '../ModalCommon';
import { useSelector, useDispatch } from "react-redux";
import { hideRegWelcomeModal, showRegPhoneModal } from '../../../redux/Users/Users.actions';


const WelcomeModal = () => {
    const dispatch = useDispatch();
    const showWelcomeModal = useSelector((state) => state.views.regWelcomeModal);
    const handleClose = () => {
        dispatch(hideRegWelcomeModal());
    }
    const next = () => {
        dispatch(hideRegWelcomeModal());
        dispatch(showRegPhoneModal());
    }

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={showWelcomeModal} TransitionComponent={Transition}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                建立個人資料
            </DialogTitle>
            <DialogContent dividers>
                <Typography align="center" variant='h5'>歡迎使用 Midai</Typography>
                <Typography align="center" variant='h6'>探索在地，掌握資訊，享受生活，盡在 Midai</Typography>
                <Button style={{ marginTop: '8' }} fullWidth variant="contained" color="secondary" onClick={next}>
                    繼續
                </Button>
            </DialogContent>
        </Dialog>)
}

export default WelcomeModal;
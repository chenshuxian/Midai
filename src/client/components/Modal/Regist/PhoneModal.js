import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Dialog, Button, TextField } from '@material-ui/core';

import { DialogContent, DialogTitle, Transition } from '../ModalCommon';
import { useSelector, useDispatch } from "react-redux";
import { hideRegWelcomeModal, showRegWelcomeModal, showRegPhotoModal, hideRegPhoneModal } from '../../../redux/Users/Users.actions';


const PhoneModal = () => {
    const dispatch = useDispatch();
    const showPhoneModal = useSelector((state) => state.views.regPhoneModal);
    const handleBack = () => {
        dispatch(hideRegPhoneModal());
        dispatch(showRegWelcomeModal());
    }
    const handleClose = () => {
        dispatch(hideRegPhoneModal());
    }
    const next = () => {
        dispatch(hideRegPhoneModal());
        dispatch(showRegPhotoModal());
    }

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={showPhoneModal} TransitionComponent={Transition}>
            <DialogTitle id="customized-dialog-title" onBack={handleBack}>
                建立個人資料
            </DialogTitle>
            <DialogContent dividers>
                <Typography align="center" >步驟2之1</Typography>
                <Typography align="center" variant='h5'>請確認你的電話號碼</Typography>
                <Typography align="center" variant='h6'>以便日後購物聯絡</Typography>
                <TextField
                    label="手機"
                    name="phone"
                    placeholder="例: 0932123456"
                    required={true}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    label="手機驗證碼"
                    name="phoneAuth"
                    required={true}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button style={{ marginTop: '8' }} fullWidth variant="contained" color="secondary" onClick={next}>
                    繼續
                </Button>
                <Button style={{ marginTop: '8' }} fullWidth variant="contained" onClick={handleClose}>
                    稍後再完成
                </Button>
            </DialogContent>
        </Dialog>)
}

export default PhoneModal;
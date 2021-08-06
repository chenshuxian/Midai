import React from "react";
import { Typography, Dialog, Button, Grid } from "@material-ui/core";

import { DialogContent, DialogTitle, Transition } from "../ModalCommon";
import { useSelector, useDispatch } from "react-redux";
import {
  showRegPhoneModal,
  showRegPhotoModal,
  hideRegPhotoModal,
  hideRegPhoneModal,
} from "../../../redux/Users/Users.actions";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const PhotoModal = () => {
  const dispatch = useDispatch();
  const showPhotoModal = useSelector((state) => state.user.views.regPhotoModal);
  const handleBack = () => {
    dispatch(hideRegPhotoModal());
    dispatch(showRegPhoneModal());
  };
  const handleClose = () => {
    dispatch(hideRegPhotoModal());
  };
  const next = () => {
    dispatch(hideRegPhoneModal());
    dispatch(showRegPhotoModal());
  };

  return (
    <Dialog
      aria-labelledby="photoModal"
      open={showPhotoModal}
      TransitionComponent={Transition}
    >
      <DialogTitle id="photoModal" onBack={handleBack}>
        建立個人資料
      </DialogTitle>
      <DialogContent dividers>
        <Typography align="center">步驟2之2</Typography>
        <Typography align="center" variant="h6">
          新增個人資料照片
        </Typography>
        <Grid container justifyContent="center">
          <AccountCircleOutlinedIcon style={{ fontSize: "200" }} />
        </Grid>
        <Button
          style={{ marginTop: "8" }}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={next}
        >
          上傳照片
        </Button>
        <Button
          style={{ marginTop: "8" }}
          fullWidth
          variant="contained"
          onClick={handleClose}
        >
          使用Facebook相片
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;

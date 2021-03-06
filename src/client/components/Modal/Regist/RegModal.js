import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useSelector, useDispatch } from "react-redux";
import RegForm from "./RegForm";
import { DialogContent, DialogTitle, Transition } from "../ModalCommon";

import { hideRegModal } from "../../../redux/Users/Users.actions";

const RegModal = () => {
  const dispatch = useDispatch();
  const showRegModal = useSelector((state) => state.user.views.regModal);
  const handleClose = () => {
    dispatch(hideRegModal());
  };

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={showRegModal}
      TransitionComponent={Transition}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        完成註冊
      </DialogTitle>
      <DialogContent dividers>
        <RegForm />
      </DialogContent>
    </Dialog>
  );
};

export default RegModal;

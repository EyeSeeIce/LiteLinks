import React from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {CloseOutlined} from "@material-ui/icons";
import Login from "../Login";
import Dialog from "@material-ui/core/Dialog";

const Modal = ({open, close}) => {
    return (
        <Dialog open={open} onClose={close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent>
                <DialogActions>
                    <CloseOutlined onClick={close} />
                </DialogActions>
                <Login/>
            </DialogContent>
            <DialogActions />
        </Dialog>
    );
};

export default Modal;

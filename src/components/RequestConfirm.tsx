import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          width: 400,
          height: 250,
          borderRadius: 5,
          padding: 5,
        },
      }}
    >
      <DialogTitle style={{ textAlign: "center" }}>
        <HelpIcon />
      </DialogTitle>
      <DialogContent style={{ textAlign: "center" }}>
        <p>휴가를 신청하시겠습니까?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>네, 신청할래요</Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          아니요
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;

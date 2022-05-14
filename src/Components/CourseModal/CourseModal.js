import React from "react";
import { Modal, Box } from "@mui/material";
import EnrollForm from "../EnrollForm/EnrollForm";

function AppModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <EnrollForm />
      </Box>
    </Modal>
  );
}

export default AppModal;

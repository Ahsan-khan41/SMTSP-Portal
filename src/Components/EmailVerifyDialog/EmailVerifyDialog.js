import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import OtpInput from "react-otp-input-rc-17";

const EmailVerifyDialog = ({
  title,
  open,
  handleOpen,
  handleClose,
  verifyHandler,
  otp,
  setOtp,
  loading,
}) => {
  return (
    <Box display="inline" ml={2}>
      <Button variant="contained" size="small" onClick={handleOpen}>
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          display="flex"
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "bold" }}
          >
            Enter the Security Code send to you via email
          </Typography>
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <OtpInput
              value={otp}
              onChange={(val) => setOtp(val)}
              numInputs={6}
              isInputNum={true}
              hasErrored={true}
              inputStyle={{
                padding: "1vw",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            disableElevation
            autoFocus
          >
            Close
          </Button>
          <LoadingButton
            variant="contained"
            onClick={verifyHandler}
            loading={loading}
            disabled={!otp}
            disableElevation
            autoFocus
          >
            Verify
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmailVerifyDialog;

import React from "react";
import { Box, Typography, Input, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

function ResetPassword() {
  const SubmitHandler = async () => {
    console.log("submitted");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "25vw",
          textAlign: "center",
          padding: "3vh 3vh",
          border: "2px solid #1976d2",
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Reset Password
          </Typography>
        </Box>
        <Stack spacing={1}>
          <Input placeholder="Old Password" autoComplete="off" />
          <Input placeholder="New Password" autoComplete="off" />
        </Stack>
        <LoadingButton
          title="Submit"
          onClick={SubmitHandler}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add New Admin
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default ResetPassword;

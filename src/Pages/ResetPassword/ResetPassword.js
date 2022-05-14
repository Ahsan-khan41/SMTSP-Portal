import React, { useState } from "react";
import { Box, Typography, Input, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

function ResetPassword() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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
        <Box sx={{ color: "red" }}>{error}</Box>
        <Stack spacing={1}>
          <Input
            placeholder="Old Password"
            autoComplete="off"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            placeholder="New Password"
            autoComplete="off"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Stack>
        <LoadingButton
          title="Submit"
          onClick={SubmitHandler}
          variant="contained"
          loading={loading}
          sx={{ mt: 2 }}
        >
          Add New Admin
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default ResetPassword;

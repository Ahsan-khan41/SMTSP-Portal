import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Input, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
// firebase
import { UploadButton } from "../../Components";

// firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [TheError, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async () => {
    setLoading(true);
    // firebase login
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        enqueueSnackbar("Login Successfull!", {
          variant: "success",
        });
        localStorage.setItem("role", "admin");
        navigate("/smtsp-admin/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    setLoading(false);
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
          <Typography variant="h5" sx={{ m: 2 }}>
            SMTSP Admin Login
          </Typography>
        </Box>
        <Box sx={{ color: "red", my: 2 }}>{TheError}</Box>
        <Stack spacing={1}>
          <Input
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <Input
            type={"password"}
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <UploadButton
          title="Submit"
          onClick={SubmitHandler}
          variant="contained"
          loading={loading}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default AdminLogin;

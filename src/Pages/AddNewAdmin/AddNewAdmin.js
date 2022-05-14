import React, { useState } from "react";
import { Box, Typography, Input, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// uuid
import uuid from "react-uuid";
// firebase
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { useSnackbar } from "notistack";
import { db } from "src/utils/firebase_config";

function AddNewAdmin() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkPreExistingAdmin = async (email) => {
    setDuplicate(false);
    const q = query(collection(db, "admin"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().email === email) {
        setDuplicate(true);
        enqueueSnackbar("Admin already exists", {
          variant: "error",
        });
      }
    });
  };

  const SubmitHandler = async () => {
    setLoading(true);
    const randomId = uuid();
    await checkPreExistingAdmin(email);
    console.log(duplicate);
    if (duplicate === false) {
      await setDoc(doc(db, "admin", randomId), {
        email,
        password,
        role: "admin",
        uid: randomId,
      })
        .then(() => {
          enqueueSnackbar("Admin Added Successfull!", {
            variant: "success",
          });
        })
        .catch((error) => {
          enqueueSnackbar(error.message, {
            variant: "error",
          });
          console.log(error);
        });
    }

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
          <Typography variant="h5" sx={{ mb: 2 }}>
            Add New Admin
          </Typography>
        </Box>
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

export default AddNewAdmin;

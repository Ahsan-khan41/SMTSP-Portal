import React from "react";
import { Box, Modal, Stack, Input } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/utils/firebase_config";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function LoginModal({ open, handleClose }) {
  const [name, setName] = React.useState("");
  const [rollNo, setRollNo] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const getCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
      setCourses((courses) => [...courses, doc.data()]);
    });
  };

  const findStudent = (list) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].students.length; j++) {
        if (
          list[i].students[j].name === name &&
          list[i].students[j].rollNo === Number(rollNo)
        ) {
          return list[i].students[j];
        }
      }
    }
  };

  const navigate = useNavigate();

  const loginHandler = async () => {
    setLoading(true);
    await getCourses();
    const matched = findStudent(courses);
    if (matched) {
      localStorage.setItem("role", "student");
      localStorage.setItem("student", JSON.stringify(matched));
      navigate("dashboard");
      enqueueSnackbar("Login Successfull!", {
        variant: "success",
      });
      handleClose();
    } else {
      enqueueSnackbar("Login Failed, Student does not Exists!", {
        variant: "error",
      });
    }
    setLoading(false);
  };

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
          width: 400,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={1}>
          <Input
            type="text"
            placeholder="Name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Roll No"
            autoComplete="off"
            onChange={(e) => setRollNo(e.target.value)}
          />
        </Stack>
        <LoadingButton
          title="Login"
          onClick={loginHandler}
          variant="contained"
          loading={loading}
          sx={{ mt: 2 }}
          disabled={name === "" || rollNo === ""}
        >
          Login
        </LoadingButton>
      </Box>
    </Modal>
  );
}

export default LoginModal;

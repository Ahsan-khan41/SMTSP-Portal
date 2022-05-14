import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// uuid
import uuid from "react-uuid";
// firebase
import { doc, setDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { db } from "src/utils/firebase_config";

function AddCourse() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [criteria, setCriteria] = useState("");
  const [status, setStatus] = React.useState("");

  const statusHandler = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };

  const { enqueueSnackbar } = useSnackbar();

  const SubmitHandler = async () => {
    setLoading(true);
    const randomId = uuid();
    await setDoc(doc(db, "courses", randomId), {
      title,
      desc,
      criteria,
      status,
      id: randomId,
      students: [],
    })
      .then(() => {
        enqueueSnackbar("Course Added Successfull!", {
          variant: "success",
          exit: 1000,
        });
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
        setLoading(false);
      });
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
          width: "60vw",
          padding: "5vh 5vh",
          border: "2px solid #1976d2",
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Add New Course
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "25ch" },
          }}
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Course title"
            variant="outlined"
            sx={{ mr: 2 }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Course Description"
            variant="outlined"
            sx={{ mr: 2 }}
            onChange={(e) => setDesc(e.target.value)}
            multiline
          />
          <TextField
            id="outlined-basic"
            label="Eligibility Criteria"
            variant="outlined"
            sx={{ mr: 2 }}
            onChange={(e) => setCriteria(e.target.value)}
          />
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Course Status"
            onChange={statusHandler}
            sx={{ mr: 2 }}
          >
            <MenuItem value={"starting-soon"}>Starting Soon</MenuItem>
            <MenuItem value={"admission-open"}>Admission Open</MenuItem>
            <MenuItem value={"closed"}>Closed</MenuItem>
          </Select>
        </Box>
        <LoadingButton
          title="Submit"
          onClick={SubmitHandler}
          variant="contained"
          loading={loading}
          sx={{ mt: 2 }}
          disabled={
            title === "" || desc === "" || criteria === "" || status === ""
          }
        >
          Add Course
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default AddCourse;

import React, { useState } from "react";
import { Box, Stack, Button, Grid, Modal } from "@mui/material";
import { StudentTable } from "src/Components";
import { styled } from "@mui/material/styles";
import readXlsxFile from "read-excel-file";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "src/utils/firebase_config";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "100vh",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  overflow: "auto",
  p: 4,
};

function AddStudentsModal({ open, handleClose, courseId }) {
  const [students, setStudents] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const Input = styled("input")({
    display: "none",
  });

  const fileHandler = (e) => {
    readXlsxFile(e.target.files[0]).then((rows) => {
      //   setStudents(rows);
      formatData(rows);
    });
  };
  const formatData = (data) => {
    data.shift();
    const res = data.map((item) =>
      createData(item[0], item[1], item[2], item[3])
    );
    setStudents(res);
  };

  const createData = (name, rollNo, course, cnic) => {
    return { name, rollNo, course, cnic };
  };

  const uploadHandler = async () => {
    const docRef = doc(db, "courses", courseId);
    await updateDoc(docRef, {
      students: students,
    })
      .then(() => {
        enqueueSnackbar("Students Added Successfully!", {
          variant: "success",
          exit: 1000,
        });
      })
      .catch((error) => {
        enqueueSnackbar("Error Adding Students!", {
          variant: "error",
          exit: 1000,
        });
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ m: 4 }}>
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Stack sx={{ float: "right" }}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="multiple"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={fileHandler}
                  />
                  <Button variant="outlined" component="span">
                    Add Students Data
                  </Button>
                </label>
              </Stack>
            </Grid>
          </Grid>
          {/* Students Data Table */}
          {students && (
            <>
              <StudentTable data={students} />
              <Button
                variant="contained"
                sx={{ mt: 3, float: "right" }}
                onClick={uploadHandler}
              >
                Upload Data
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default AddStudentsModal;

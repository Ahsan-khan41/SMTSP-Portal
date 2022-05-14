import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { AddStudentsModal } from "src/Components";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/utils/firebase_config";

function AddStudents() {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState("");

  const getCourses = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
      setCourses((courses) => [...courses, doc.data()]);
    });
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleOpen = (id) => {
    setOpen(true);
    setCourseId(id);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ m: 6, backgroundColor: "#ccd8e3", p: 3, borderRadius: 3 }}>
        <Box>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: "5vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ width: "100%" }}>
              {courses.map((course, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 3,
                    mb: 2,
                    backgroundColor: "#fff",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6">{course.title}</Typography>
                  <Stack direction="row" spacing={4}>
                    <Button variant="outlined">Status</Button>
                    <Button
                      variant="contained"
                      onClick={() => handleOpen(course.id)}
                    >
                      Add Students
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Button variant="contained" sx={{ mt: 3 }}>
          Save Changes
        </Button>
      </Box>
      <AddStudentsModal
        open={open}
        handleClose={handleClose}
        courseId={courseId}
      />
    </>
  );
}

export default AddStudents;

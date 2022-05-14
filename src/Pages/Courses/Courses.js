import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { CourseCard } from "src/Components";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/utils/firebase_config";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return loading ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "20vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ fontWeight: 800 }} variant="h6">
        All Courses
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          flexWrap: "wrap",
        }}
      >
        {courses.map((course, index) => (
          <Box key={index} sx={{ mx: 2, my: 2 }}>
            <CourseCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Courses;

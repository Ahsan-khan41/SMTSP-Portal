import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { CourseCard } from "src/Components";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/utils/firebase_config";

function StudentCourses() {
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
      setCourses((courses) => [...courses, doc.data()]);
    });
    findMyCourse(courses);
  };

  useEffect(() => {
    setLoading(true);
    getCourses();
    console.log(myCourses);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findMyCourse = (courses) => {
    const student = JSON.parse(localStorage.getItem("student"));
    for (let i = 0; i < courses.length; i++) {
      for (let j = 0; j < courses[i].students.length; j++) {
        if (
          courses[i].students[j].name === student.name &&
          courses[i].students[j].rollNo === Number(student.rollNo)
        ) {
          console.log(courses[i]);
          setMyCourses((myCourses) => [...myCourses, courses[i]]);
        }
      }
    }
  };

  return loading ? (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     mt: "2vh",
    //   }}
    // >
    <CircularProgress />
  ) : (
    // </Box>
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ fontWeight: 800 }} variant="h6">
        My Courses
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
        {myCourses?.map((course, index) => (
          <Box key={index} sx={{ mx: 2, my: 2 }}>
            <CourseCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default StudentCourses;

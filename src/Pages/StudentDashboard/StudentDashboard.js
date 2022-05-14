import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  CardActionArea,
  Button,
} from "@mui/material";

function StudentDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const student = localStorage.getItem("student");
    if (role !== "student" || !student) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("student");
    navigate("/");
  };

  const cardhandler = (key) => {
    if (key === "my-courses") {
      navigate("/dashboard/my-courses");
    }
  };

  return (
    <Box sx={{ m: 6, display: "flex", flexDirection: "column" }}>
      <Box>
        <Button
          variant="contained"
          onClick={signOutHandler}
          sx={{ mb: 2, float: "right" }}
        >
          Logout
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Check my Card */}
        <Card sx={{ width: 300, height: 200, backgroundColor: "#e1e2e3" }}>
          <CardActionArea
            sx={{ height: 200 }}
            onClick={() => cardhandler("my-courses")}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="subtitle1"
                component="div"
              >
                Check my courses
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                You can check your courses here
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

export default StudentDashboard;

import React, { useEffect, useState } from "react";
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
// firebase
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/smtsp-admin");
      }
    });
  }, [auth, navigate]);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/smtsp-admin");
        localStorage.removeItem("role");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardhandler = (key) => {
    if (key === "add-new-admin") {
      navigate("/smtsp-admin/add-new-admin");
    } else if (key === "reset-password") {
      navigate("/smtsp-admin/reset-password");
    } else if (key === "add-course") {
      navigate("/smtsp-admin/add-course");
    } else if (key === "add-students") {
      navigate("/smtsp-admin/add-students");
    }
  };

  return (
    user && (
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
          {/* Add new Admin Card */}
          <Card sx={{ width: 300, height: 200, backgroundColor: "#e1e2e3" }}>
            <CardActionArea
              sx={{ height: 200 }}
              onClick={() => cardhandler("add-new-admin")}
            >
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  component="div"
                >
                  Add New Admin
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  You can add new admin and assign them credentials here
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Reset Password Card */}
          <Card
            sx={{ width: 300, height: 200, ml: 4, backgroundColor: "#e1e2e3" }}
          >
            <CardActionArea
              sx={{ height: 200 }}
              onClick={() => cardhandler("reset-password")}
            >
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  component="div"
                >
                  Reset your Password
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  You can reset and change your password here
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Add Course Card */}
          <Card
            sx={{ width: 300, height: 200, ml: 4, backgroundColor: "#e1e2e3" }}
          >
            <CardActionArea
              sx={{ height: 200 }}
              onClick={() => cardhandler("add-course")}
            >
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  component="div"
                >
                  Add New Course
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  You can add New Courses here
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Add Students Card */}
          <Card
            sx={{ width: 300, height: 200, ml: 4, backgroundColor: "#e1e2e3" }}
          >
            <CardActionArea
              sx={{ height: 200 }}
              onClick={() => cardhandler("add-students")}
            >
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  component="div"
                >
                  Add Students List
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  You can Students list via xls file here
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    )
  );
};

export default AdminDashboard;

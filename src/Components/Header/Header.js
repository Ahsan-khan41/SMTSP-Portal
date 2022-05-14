import React, { useState, useEffect } from "react";
import { AppBar, Typography, Box, Button, Divider } from "@mui/material";
import BackpackIcon from "@mui/icons-material/Backpack";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//icons
import LoginModal from "../LoginModal/LoginModal";

const Header = () => {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleOpen = () => setLoginModal(true);
  const handleClose = () => setLoginModal(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setAdmin(true);
    }
  }, []);

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "1vw 2.5vw 1vw 2.5vw" }}
        >
          <Box sx={{ mb: "2vh" }}>
            <Typography variant="h4" sx={{ color: "#000", fontWeight: "bold" }}>
              <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                SMTSP Portal
              </Link>
            </Typography>
          </Box>
          <Box display="flex" direction="row">
            {!admin && (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ marginLeft: "1vw" }}
                  onClick={handleOpen}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  startIcon={<BackpackIcon />}
                  sx={{ marginLeft: "1vw" }}
                  onClick={() => navigate("/courses")}
                >
                  Check Courses
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#D9D9D9", width: "100%" }} />
      </AppBar>
      {/* Login Modal */}
      <LoginModal open={loginModal} handleClose={handleClose} />
    </>
  );
};

export default Header;

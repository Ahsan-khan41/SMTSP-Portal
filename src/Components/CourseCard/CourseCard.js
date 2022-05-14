import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { CourseModal } from "../index";

function CourseCard({ course }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="subtitle1"
            component="div"
          >
            {course.title}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography sx={{ fontWeight: 600 }} variant="overline">
            Description
          </Typography>
          <Typography variant="body2" color="#999999">
            {course.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={handleOpen}
            disableElevation
          >
            Enroll Now
          </Button>
        </CardActions>
      </Card>
      {/* enroll modal form */}
      <CourseModal open={open} handleClose={handleClose} />
    </>
  );
}

export default CourseCard;

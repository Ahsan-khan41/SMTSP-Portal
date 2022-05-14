import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function EnrollForm() {
  const enrollHandler = async () => {};
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
        Enroll Now for Web and Mobile Development
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Father Name" variant="outlined" />
        <TextField id="outlined-basic" label="NIC" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
      </Box>
      <Box>
        <LoadingButton
          variant="contained"
          onClick={enrollHandler}
          disableElevation
          autoFocus
          sx={{ ml: 1, mt: 2 }}
        >
          Submit
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default EnrollForm;

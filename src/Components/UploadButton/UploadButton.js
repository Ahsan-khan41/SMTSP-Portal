import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const UploadButton = ({ title, onClick, loading, variant }) => {
  return (
    <>
      <LoadingButton
        size="small"
        disableElevation
        onClick={onClick}
        loading={loading}
        variant={variant}
        sx={{ mt: 2, width: "100%" }}
      >
        {title}
      </LoadingButton>
    </>
  );
};

export default UploadButton;

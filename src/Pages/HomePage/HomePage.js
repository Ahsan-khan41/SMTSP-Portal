import React from "react";
import { Box } from "@mui/material";
import { PostCard } from "src/Components";
import { POSTS_DATA } from "src/MockData";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#efefef",
        }}
      >
        {POSTS_DATA.map((post, index) => (
          <Box key={index} sx={{ my: 4 }}>
            <PostCard post={post} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;

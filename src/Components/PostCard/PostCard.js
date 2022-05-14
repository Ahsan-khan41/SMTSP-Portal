import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function PostCard({ post }) {
  return (
    <Card sx={{ maxWidth: 600, height: 620 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={post.image}
          alt="feed posts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;

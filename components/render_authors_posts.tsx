"use client";
import { PostContext } from "@/contexts/post_context";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import PostCard from "./post_card";
import { Box } from "@mui/material";

const RenderAuthorsPosts = () => {
  const { postItems } = useContext(PostContext);
  const { author } = useParams();

  const authorPosts = postItems.filter(
    (post) => post.author === decodeURIComponent(author as string)
  );

  return (
    <div>
      <h1>Author: {decodeURIComponent(author as string)}</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        {authorPosts.map((p) => (
          <PostCard post={p} />
        ))}
      </Box>
    </div>
  );
};

export default RenderAuthorsPosts;

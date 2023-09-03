"use client";
import { PostContext } from "@/contexts/post_context";
import React, { useContext } from "react";
import PostCard from "./post_card";
import AddPostButton from "./buttons/add_post_button";
import { Box } from "@mui/material";
import { AuthContext } from "@/contexts/auth_context";

const RenderPosts = () => {
  const { postItems } = useContext(PostContext);
  const { selectedRole } = useContext(AuthContext);

  return (
    <div>
      <h1>General Page: {selectedRole}</h1>
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
        {postItems.map((r) => (
          <PostCard post={r} />
        ))}
      </Box>
      {selectedRole === "Author" ? <AddPostButton /> : <></>}
    </div>
  );
};

export default RenderPosts;

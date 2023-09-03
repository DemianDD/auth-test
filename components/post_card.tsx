"use client";
import { AuthContext } from "@/contexts/auth_context";
import { PostContext } from "@/contexts/post_context";
import { IPost } from "@/types/IPost";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

interface IProps {
  post: IPost;
}

const PostCard = (props: IProps) => {
  const { selectedRole } = useContext(AuthContext);
  const [commentInput, setCommentInput] = useState("");
  const { addComment } = useContext(PostContext);

  const handleCommentInputChange = (event: any) => {
    setCommentInput(event.target.value);
  };

  const handleAddComment = (postId: any) => {
    console.log(postId);
    addComment(postId, commentInput);
    setCommentInput("");
  };

  return (
    <Card
      sx={{
        width: 325,
        padding: 1,
        backgroundColor: "#fff",
        zIndex: 1,
        overflow: "auto",
        margin: 2,
      }}
      key={props.post.id}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.post.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Box
          sx={{ mb: 1.5, display: "flex", alignItems: "center" }}
          color="text.secondary"
        >
          {props.post.author}
          <Box sx={{ fontSize: 10, marginLeft: 0.5 }}>
            <Link href={`/author/${props.post.author}`}>
              More posts from Author
            </Link>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          {props.post.text}
        </Typography>
        {props.post.comments && props.post.comments.length > 0 ? (
          <div>
            <Box>Comments:</Box>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontSize: 14,
                backgroundColor: "#E3F2FD",
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 0.5,
                paddingBottom: 0.5,
                borderRadius: 2,
                marginTop: 0.5,
              }}
            >
              {props.post.comments.map((commment, id) => {
                return <Box key={id}>{commment.text}</Box>;
              })}
            </Typography>
          </div>
        ) : (
          <Box></Box>
        )}
      </CardContent>

      {selectedRole === "Commentator" ? (
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <TextField
            id="standard-basic"
            label="Write here your comment"
            variant="outlined"
            sx={{ width: "100%", marginBottom: 1 }}
            size="small"
            value={commentInput}
            onChange={handleCommentInputChange}
          />
          <Button
            size="small"
            variant="contained"
            onClick={() => handleAddComment(props.post.id)}
          >
            Add comment
          </Button>
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default PostCard;

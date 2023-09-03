'use client'
import { PostContext } from "@/contexts/post_context";
import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useContext } from "react";

type InputField = {
  id: string;
  label: string;
  variant: "standard" | "outlined" | "filled"; // Valid TextFieldVariants
  name: string;
};

const inputFields: InputField[] = [
  {
    id: "author",
    label: "Enter Author",
    variant: "outlined",
    name: "author",
  },
  {
    id: "title",
    label: "Enter Title",
    variant: "outlined",
    name: "title",
  },
  {
    id: "text",
    label: "Enter Text",
    variant: "outlined",
    name: "text",
  },
];

const CreateCard = () => {
  const { handleInputChange, postData, handleAddPost } =
    useContext(PostContext);

  return (
    <Card
      sx={{
        width: 325,
        padding: 1,
        backgroundColor: "#fff",
        zIndex: 1,
        overflow: "auto",
      }}
    >
      <CardContent>
        {inputFields.map((field) => (
          <TextField
            name={field.name}
            key={field.id}
            id={field.id}
            label={field.label}
            variant={field.variant}
            sx={{ width: "100%", margin: 1 }}
            size="small"
            onChange={handleInputChange}
            value={postData[field.id]}
          />
        ))}
      </CardContent>
      <Button variant="contained" onClick={handleAddPost}>
        Create
      </Button>
    </Card>
  );
};

export default CreateCard;

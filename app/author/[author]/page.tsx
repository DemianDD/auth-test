import RenderAuthorsPosts from "@/components/render_authors_posts";
import { Box } from "@mui/material";

export default function AuthorId() {
  return (
    <Box sx={{ padding: 5 }}>
      <RenderAuthorsPosts />
    </Box>
  );
}

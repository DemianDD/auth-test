import RenderPosts from "@/components/render_posts";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box sx={{padding: 5}}>
        <RenderPosts/>
      </Box>
    </main>
  )
}

import { Box, CardContent, Typography, IconButton } from "@mui/material";
import { Card } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import { useState } from "react";
import { grey, red } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function Post({ post, onFavorite }) {
  const [loading, setLoading] = useState(false);

  const handleFavorite = async () => {
    setLoading(true);
    try {
      await onFavorite(post.id); // Executa a lógica de favoritar recebida por prop
    } catch (error) {
      console.error("Erro ao favoritar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ marginBottom: '1em', width: '100%' }}>
      <Link to={`/posts/${post.id}`}>
        <CardContent>
          <Typography component="div">
            <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1rem', color: 'GrayText' }}>
              Publicado por {post.author}
            </Box>
            <Box sx={{ fontWeight: 'regular', color: grey[700] }}>
              {post.content}
            </Box>
          </Typography>
        </CardContent>
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
        <IconButton
          onClick={handleFavorite}
          disabled={loading}
          sx={{ color: red[500] }}
        >
          <Favorite />
        </IconButton>
        <Typography>{post.starsCount} favoritos</Typography>
      </Box>
    </Card>
  );
}

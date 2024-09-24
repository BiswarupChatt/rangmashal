// Blog.js
import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';

export default function Blog() {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/resources/blog/${postId}`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        Blog
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onClick={() => handlePostClick(post.id)}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {post.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                {post.date}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

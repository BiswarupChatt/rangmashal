import React from 'react';
import { Box, Typography, Grid, Container, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';

export default function Blog() {
    const navigate = useNavigate();

    const handleClick = (postId) => {
        navigate(`/resources/blog/${postId}`);
    };

    const previewContent = (content) => {
        return content.replace(/<[^>]*>/g, '').substring(0, 200).concat('.....');
    };

    return (
        <Container sx={{ py: 4 }}>
        

            <Grid container spacing={4} justifyContent="center">
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                transition: 'transform 0.3s ease-in-out',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                            onClick={() => handleClick(post.id)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={post.image}
                                    alt={post.title}
                                    sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {previewContent(post.content)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

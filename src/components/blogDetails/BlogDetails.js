// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import { blogPosts } from '../blog/blogData';

export default function BlogDetails() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <Container sx={{ py: 4 }}>
                <Typography variant="h4">Blog Post Not Found</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                {post.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                {post.date}
            </Typography>
            <Box
                dangerouslySetInnerHTML={{ __html: post.content }}
                sx={{ fontSize: '1rem', lineHeight: 1.7 }}
            />
        </Container>
    );
}

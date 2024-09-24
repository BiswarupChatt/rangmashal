import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Divider } from '@mui/material';
import { blogPosts } from '../blog/blogData';
import PageNotFound from '../../pages/PageNotFound';
import parse from 'html-react-parser'

export default function BlogDetails() {
    const { id } = useParams();
    const post = blogPosts.find((ele) => ele.id === parseInt(id));

    return (
        <Container sx={{ py: 4 }}>


            {post ? (
                <>
                    <Box sx={{ position: 'relative', mb: 4 }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                        />
                    </Box>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            textAlign: 'center',
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        {post.title}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        sx={{
                            mb: 4,
                            textAlign: 'center',
                            color: 'text.secondary',
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                        }}
                    >
                        {post.date}
                    </Typography>

                    <Divider />

                    <Box
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                            textAlign: 'justify',
                            lineHeight: 1.7,
                            color: 'text.primary',
                            maxWidth: '800px',
                            margin: '0 auto',
                        }}
                    >
                        {parse(post.content)}
                    </Box>
                </>
            ) : (
                <Box>
                    <Typography variant="h4" align="center" fontWeight='bold' color='textSecondary'>
                        Blog Post Not Found
                    </Typography>
                    <PageNotFound />
                </Box>
            )}
        </Container>
    );
}

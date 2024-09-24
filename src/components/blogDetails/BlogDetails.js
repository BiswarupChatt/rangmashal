import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Divider, Button } from '@mui/material';
import { blogPosts } from '../blog/blogData';
import PageNotFound from '../../pages/PageNotFound';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import parse from 'html-react-parser';
import moment from 'moment';

export default function BlogDetails() {
    const { id } = useParams();
    const post = blogPosts.find((ele) => ele.id === parseInt(id));
    const navigate = useNavigate();

    return (
        <Container sx={{ py: 4 }}>


            <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                sx={{ mb: 4 }}
            >
                Back
            </Button>

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
                            ml: 1,
                            textAlign: 'left',
                            color: 'text.secondary',
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                        }}
                    >
                        {moment(post.date).format('Do MMMM YYYY')}
                    </Typography>

                    <Divider />

                    <Box
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                            textAlign: 'justify',
                            lineHeight: 1.7,
                            color: 'text.primary',
                            maxWidth: '850px',
                            margin: '0 auto',
                        }}
                    >
                        {parse(post.content)}
                    </Box>

                    <Divider sx={{ mt: 4 }} />
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

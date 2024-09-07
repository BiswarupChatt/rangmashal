import { Box, Typography, Grid, Container } from '@mui/material';

export default function Vision() {
    return (
        <Box sx={{ backgroundColor: 'rgba(50, 191, 194, 0.1)', width: '100%' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', display: 'inline-block', }}>
                            <Box
                                sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'primary.main', transform: 'rotate(-5deg)', zIndex: 1, borderRadius: '20px', boxShadow: 20 }}
                            />
                            <Box sx={{ position: 'relative', zIndex: 2 }} >
                                <img src="/images/background2.png" alt="Kids Learning" style={{ width: '100%', borderRadius: '20px', }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: '20px 0', md: '0 20px' } }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Our Vision
                            </Typography>
                            <Typography variant="body1">
                                Our vision is to create a world where all children and women have equal opportunities, regardless of their background. We believe that proper education, better living conditions, and access to healthcare are key to empowering them to reach their full potential and break the cycle of poverty that they were not born to live in.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
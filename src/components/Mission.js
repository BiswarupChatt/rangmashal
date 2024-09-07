import { Box, Typography, Grid, Container } from '@mui/material';

export default function Mission() {
    return (
        <Box sx={{ width: '100%' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: '20px 0', md: '0 20px' } }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Our Story
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam perspiciatis, assumenda illo nemo cupiditate. Aperiam illum maxime nesciunt perferendis quos. Doloribus consequatur beatae accusamus incidunt, totam laborum quos similique reiciendis eligendi ipsam, maxime molestias corrupti dolorem fuga autem! Perferendis quam ea tempora possimus quo nostrum expedita porro placeat aperiam omnis qui officia iure fuga iste, beatae corporis illum autem, consequatur veniam, natus necessitatibus! Autem minima amet mollitia distinctio numquam placeat, ut, animi accusamus voluptatibus nisi ipsa vero itaque tenetur enim vitae porro cumque modi corrupti voluptate perferendis sapiente consequatur cupiditate dolor. Magnam, quibusdam dolor alias veniam quas nesciunt blanditiis.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', display: 'inline-block', }}>
                            <Box
                                sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'primary.main', transform: 'rotate(-5deg)', zIndex: 1, borderRadius: '20px', boxShadow: 20 }}
                            />
                            <Box sx={{ position: 'relative', zIndex: 2 }} >
                                <img src="/images/background1.png" alt="Kids Learning" style={{ width: '100%', borderRadius: '20px', }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
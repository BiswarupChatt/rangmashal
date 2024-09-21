import React from 'react';
import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from '@mui/material';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { Fade, Slide } from 'react-awesome-reveal';

const reportData = [
    { year: '2022-2023', auditReports: 'https://drive.google.com/file/d/1xRiFVA_LjeHFQA7Lei_GQzDP9p0ZnCA0/view?usp=sharing', annualReports: 'https://drive.google.com/file/d/1esJblclcr1W4IeIoEcW-bGheWIrwlBn6/view?usp=sharing', },
    { year: '2021-2022', auditReports: 'https://drive.google.com/file/d/1NJfnqYLFPxagkT52RoGeD5B5Q7jWxNj1/view?usp=sharing', annualReports: 'https://drive.google.com/file/d/1tc27JTOhWPb2Z-o7zUFm1LGes3_5T_BY/view?usp=sharing', },
    { year: '2020-2021', auditReports: '', annualReports: 'https://drive.google.com/file/d/1KTjzM0BuaG9qKViqug32F3XiOKr9ZrIt/view?usp=sharing', },
];


export default function Reports() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Container sx={{ py: { xs: '30px', md: '50px' } }}>
                    <Slide direction="up" cascade damping={1} triggerOnce>
                        <Fade cascade triggerOnce>
                            <Typography
                                variant="h4"
                                marginBottom={5}
                                sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main', textTransform: 'uppercase', fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', }}}
                            >
                                Yearly <span style={{ color: '#FFD041' }}>Reports</span>
                            </Typography>

                            <Grid container spacing={4} alignItems="center">

                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'inline-block', padding: 2 }}>
                                        <Box sx={{ transform: 'rotate(-2deg)' }}>
                                            <img src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg" alt="Kids Learning" style={{ width: '100%', borderRadius: '20px', }} />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TableContainer sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent', borderRadius: '12px' }}>
                                        <Table sx={{ backgroundColor: 'transparent', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>YEAR</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>ANNUAL REPORTS</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>AUDIT REPORTS</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {reportData.map((ele, index) => (
                                                    <TableRow key={index} sx={{ backgroundColor: 'transparent' }}>
                                                        <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center', alignItems: 'center' }}>
                                                            {ele.year}
                                                        </TableCell>
                                                        <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                                                            {ele.annualReports ? (
                                                                <IconButton href={ele.annualReports} target="_blank">
                                                                    <PictureAsPdfIcon />
                                                                </IconButton>
                                                            ) : (
                                                                <>NA</>
                                                            )}
                                                        </TableCell>
                                                        <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                                                            {ele.auditReports ? (
                                                                <IconButton href={ele.auditReports} target="_blank">
                                                                    <PictureAsPdfIcon />
                                                                </IconButton>
                                                            ) : (
                                                                <Typography variant='body1'>N/A</Typography>
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


                                </Grid>

                            </Grid>
                        </Fade>
                    </Slide>
                </Container>
            </Box>
        </>
    )
}
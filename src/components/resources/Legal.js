import React from 'react';
import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { Fade, Slide } from 'react-awesome-reveal';

const documentData = [
    { name: 'Corporate Social Responsibility', date: '03-01-2023', documentLink: 'https://drive.google.com/file/d/1zakAxeoZrPkCXiC5EDQg0Jn8n8zIgR-N/view?usp=sharing', registration: 'SRN-F55749006' },
    { name: 'Registered as Society', date: '10-02-2021', documentLink: 'https://drive.google.com/file/d/1rF183MPq6kDRKII5RU93gD9N13CsvZO8/view?usp=sharing', registration: 'S0017003 of 2020-2021' },
    { name: 'PAN', date: '24-09-202', documentLink: 'https://drive.google.com/file/d/1kO9yzSSrBSMh06BfnOEftpdIn-B9h4dO/view?usp=sharing', registration: 'AAETR7992J' },
    { name: '12A', date: '01-12-2022', documentLink: 'https://drive.google.com/file/d/1vcuVPubXA_Zz7zo0sAbfCuG5BGzjKaKp/view?usp=sharing', registration: 'AAETR7992JE2022101' },
    { name: '80-G', date: '03-12-2022', documentLink: 'https://drive.google.com/file/d/1JAD3sW69NkIeWwn6cXsmusk1trEWLr4f/view?usp=sharing', registration: 'AAETR7992JF2022101' },
];



export default function Legal() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ py: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Grid>
                            <Typography
                                variant="h4"
                                sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main', mb: 4 }}
                            >
                                LEGAL <span style={{ color: '#FFD041' }}>DOCUMENTS</span>
                            </Typography>

                            <TableContainer component={Paper} elevation='4' sx={{ borderRadius: '12px' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: 'primary.main', color: '#fff' }}>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'left' }}>NAME</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>DATE</TableCell>
                                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>DOCUMENT</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {documentData.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
                                                    {row.name} <br /> {row.registration}
                                                </TableCell>
                                                <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>{row.date}</TableCell>
                                                <TableCell sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                                                    <IconButton href={row.documentLink} target="_blank">
                                                        <PictureAsPdfIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Fade>
                </Slide>
            </Container>
        </Box>
    );
}
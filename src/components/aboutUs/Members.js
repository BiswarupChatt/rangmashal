import React, { useState } from 'react';
import { Grid, Box, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, Link, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Fade, Slide } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { membersData } from './membersData';

const AllMembers = membersData

function TeamSection() {
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState({});

    const handleClickOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            {
                AllMembers.map((ele, index) => (
                    <Box sx={{ backgroundColor: index % 2 === 0 ? 'rgba(50, 191, 194, 0.1)' : 'rgba(255, 208, 65, 0.2)', width: '100%', py: 5 }}>
                        <Container>
                            <Slide direction="up" cascade damping={1} triggerOnce key={index}>
                                <Fade cascade triggerOnce>
                                    <Grid container spacing={4} alignItems="center">
                                        <Grid item xs={12} md={3} sx={{ order: { xs: 1, md: index % 2 === 0 ? 1 : 2 } }}>
                                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }} textAlign="center">
                                                {ele.categoryName}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={9} sx={{ order: { xs: 2, md: index % 2 === 0 ? 2 : 1 } }}>
                                            <Box sx={{ width: '100%', padding: 4 }}>
                                                <Swiper
                                                    modules={[Navigation, Pagination, Autoplay]}
                                                    spaceBetween={15}
                                                    // navigation
                                                    pagination={{ clickable: true }}
                                                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                                                    effect={'coverflow'}
                                                    grabCursor={true}
                                                    loop={true}
                                                    speed={1500}
                                                    breakpoints={{
                                                        640: { slidesPerView: 1 },
                                                        768: { slidesPerView: 2 },
                                                        1024: { slidesPerView: 3 },
                                                    }}
                                                >
                                                    {ele.members.map((member, index) => (
                                                        <SwiperSlide key={index}>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    textAlign: 'center',
                                                                    padding: 2,
                                                                    mb: 2
                                                                }}
                                                                onClick={() => handleClickOpen(member)}
                                                            >
                                                                <Avatar
                                                                    src={member.imageUrl || '/default-avatar.png'}
                                                                    alt={member.name}
                                                                    sx={{ width: 90, height: 90, mb: 2 }}
                                                                />
                                                                <Typography variant="h6">{member.name}</Typography>
                                                                <Typography variant="body2" color="textSecondary">
                                                                    {member.position}
                                                                </Typography>
                                                            </Box>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>

                                                {selectedMember && (
                                                    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                                        <DialogTitle textAlign="center">
                                                            {selectedMember.name} - {selectedMember.position}
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                                                <Grid item>
                                                                    <Avatar
                                                                        src={selectedMember.imageUrl || '/default-avatar.png'}
                                                                        alt={selectedMember.name}
                                                                        sx={{ width: 120, height: 120, mx: 'auto' }}
                                                                    />
                                                                </Grid>
                                                                <Grid item>
                                                                    <DialogContentText textAlign="justify">
                                                                        {selectedMember.description}
                                                                    </DialogContentText>
                                                                    <Box display="flex" justifyContent="center" mt={2}>
                                                                        {selectedMember.linkedIn && (
                                                                            <Link href={selectedMember.linkedIn} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                                                                <LinkedInIcon fontSize="large" color="primary" />
                                                                            </Link>
                                                                        )}
                                                                        {selectedMember.facebook && (
                                                                            <Link href={selectedMember.facebook} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                                                                <FacebookIcon fontSize="large" color="primary" />
                                                                            </Link>
                                                                        )}
                                                                        {selectedMember.instagram && (
                                                                            <Link href={selectedMember.instagram} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                                                                <InstagramIcon fontSize="large" color="primary" />
                                                                            </Link>
                                                                        )}
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </DialogContent>
                                                    </Dialog>
                                                )}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Slide>
                        </Container>
                    </Box >
                ))
            }
        </>
    );
}

export default TeamSection;

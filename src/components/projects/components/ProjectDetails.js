import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Dialog, DialogTitle, DialogContent, IconButton, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import DonateButton from '../../reusable/DonateButton';
import { Slide, Fade } from 'react-awesome-reveal';

const truncateText = (text, limit) => {
    return text.split(" ").slice(0, limit).join(" ") + "...";
};

export default function ProjectDetails({ events, order }) {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleOpen = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedEvent(null);
    };

    const backgroundColor = order % 2 === 0 ? 'rgba(50, 191, 194, 0.1)' : 'rgba(255, 208, 65, 0.2)';

    const gridOrder = {
        xsFirst: order % 2 === 0 ? 1 : 2,
        xsSecond: order % 2 === 0 ? 1 : 2,
        mdFirst: order % 2 === 0 ? 2 : 1,
        mdSecond: order % 2 === 0 ? 1 : 2,
    }

    return (
        <Box sx={{ backgroundColor: backgroundColor, width: '100%' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Grid container spacing={4} alignItems="center">

                            <Grid item xs={12} md={6} sx={{ order: { xs: gridOrder.xsFirst, md: gridOrder.mdFirst } }}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    loop={true}
                                    speed={1500}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                >
                                    {events.subEvents.map((subEvent, index) => (
                                        <SwiperSlide key={index} onClick={() => handleOpen(subEvent)}>
                                            <Box sx={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
                                                <img src={subEvent.images[0]} alt={subEvent.subTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
                                                        color: 'white',
                                                        zIndex: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-end',
                                                    }}
                                                >
                                                    <Box sx={{ padding: 5 }}>
                                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                                                            {subEvent.subTitle}
                                                        </Typography>

                                                        <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' }, textAlign: 'justify' }}>
                                                            {truncateText(subEvent.subDescription, 20)}
                                                        </Typography>

                                                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                                            {subEvent.date}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ order: { xs: gridOrder.xsSecond, md: gridOrder.mdSecond } }}>
                                <Box sx={{ padding: { xs: '20px 0', md: '0 20px' } }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        {events.title}
                                    </Typography>
                                    <Typography variant="body1" textAlign="justify">
                                        {events.description}
                                    </Typography>
                                    <DonateButton label='I Want to Contribute' bgColor='secondary.main' bgColorHover='primary.main' sx={{ marginTop: 2 }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Fade>
                </Slide>
            </Container>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                {selectedEvent && (
                    <>
                        <DialogTitle>
                            {selectedEvent.subTitle}
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                speed={1500}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                loop={true}
                            >
                                {selectedEvent.images.map((image, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={image}
                                            alt={`Event Image ${idx + 1}`}
                                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                                {selectedEvent.date}
                            </Typography>
                            <Typography variant="body1" textAlign="justify" marginTop={1}>
                                {selectedEvent.subDescription}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                                <DonateButton label='Yes! I want to donate.' />
                            </Box>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
}

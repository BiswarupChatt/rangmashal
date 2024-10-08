import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Dialog, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import { Slide, Fade } from 'react-awesome-reveal';

const galleryImages = [
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', },
    { image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClickOpen = (index) => {
        setActiveIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 208, 65, 0.2)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                                Snap From <Box component='span' sx={{ color: 'primary.main' }}>Blood Donation</Box>
                            </Typography>

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={15}
                                navigation
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
                                {galleryImages.map((ele, index) => (
                                    <SwiperSlide key={index}>
                                        <Box
                                            onClick={() => handleClickOpen(index)}
                                            sx={{
                                                width: '100%',
                                                height: '200px',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                mb: 5
                                            }}
                                        >
                                            <img
                                                src={ele.image}
                                                alt={ele.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    color: 'white',
                                                    zIndex: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Fade>
                </Slide >

                <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                            zIndex: 999,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            src={galleryImages[activeIndex].image}
                            alt={galleryImages[activeIndex].title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Dialog>
            </Container>
        </Box>
    );
}

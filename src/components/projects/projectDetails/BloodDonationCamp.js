import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import DonateButton from '../../reusable/DonateButton';

const events = [
    {
        title: 'Blood Donation Camp: Part 1',
        description: 'On the occasion of International Mother Language Day to pay homage to our brave martyrs, we organized a blood donation camp in association with Ashok Laboratory at Subodhpark Saptarshi Friend’s Association club. This was our very first project after Government registration as Rangmashal Foundation.',
        date: '21st February, 2021',
        image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
    },
    {
        title: 'Blood Donation Camp: Part 2',
        description: 'Rangmashal Foundation organized a blood donation camp in association with Baruipur Sub-divisional Hospital at Garfa North Star Association. It was our second Blood Donation Camp after the first on 21st February 2021.',
        date: '16th October',
        image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
    },
];


const truncateText = (text, limit) => {
    return text.split(" ").slice(0, limit).join(" ") + "...";
};


export default function BloodDonationCamp() {
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

    return (
        <Box sx={{ backgroundColor: 'rgba(50, 191, 194, 0.1)', width: '100%' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Grid container spacing={4} alignItems="center">

                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: '20px 0', md: '0 20px' } }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Blood Donation
                            </Typography>
                            <Typography variant="body1" textAlign="justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque voluptates, corrupti iusto quos dolore voluptatum eaque reprehenderit dolores sequi nisi minima, dolorum expedita consectetur incidunt, corporis quidem eveniet delectus libero non pariatur excepturi nulla minus illo? Amet veritatis iusto harum, quibusdam recusandae non! Iure nemo corrupti exercitationem doloremque debitis?
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={6}>
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
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                        >
                            {events.map((event, index) => (
                                <SwiperSlide key={index} onClick={() => handleOpen(event)}>
                                    <Box
                                        sx={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}
                                    >
                                        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        mb: 1,
                                                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                                                    }}
                                                >
                                                    {event.title}
                                                </Typography>


                                                <Typography
                                                    variant="body1"
                                                    sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' }, textAlign: 'justify' }}
                                                >
                                                    {truncateText(event.description, 20)}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                                                    }}
                                                >
                                                    {event.date}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Grid>
                </Grid>
            </Container>


            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                {selectedEvent && (
                    <>
                        <DialogTitle>
                            {selectedEvent.title}
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
                        <DialogContent dividers>
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }}
                            />
                            <Typography variant="body2" sx={{ fontWeight: 'bold', }} color='textSecondary'>
                                {selectedEvent.date}
                            </Typography>
                            <Typography variant="body1" textAlign="justify" marginTop={1}>
                                {selectedEvent.description}
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

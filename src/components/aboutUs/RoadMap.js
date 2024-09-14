import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const roadmapData = [
    {
        year: '2020',
        description:
            'Commencing on February 14th, Rangmashal Foundation launched its humanitarian journey with blanket distributions in Kolkata. Shortly after, the foundation shifted its focus to dedicated COVID-19 relief efforts during the initial wave, directly aiding those affected.',
    },
    {
        year: '2021',
        description:
            'Following society registration, Rangmashal Foundation intensified its efforts, primarily focusing on aiding those affected by the second wave of COVID-19. Noteworthy projects like "Asomoye Tomader Pashe," " Sharadiyar Parash," " Sundarban-e Rangmashal," and "Untouched Mandarmani" were successfully executed during this period.',
    },
    {
        year: '2022',
        description:
            'Rangmashal Foundation achieved trust registration along with obtaining 80G and 12A certifications. The focus was on implementing impactful projects such as "Sharadiyar Parash 3.0" and "Swapno ki Ashiyana." These initiatives marked significant strides in the foundation\'s ongoing commitment to its mission.',
    },
    {
        year: '2023',
        description:
            'Establishing educational centers in Garfa and Garia marked the inception of uplifting underprivileged children. Simultaneously, the foundation collaborated on CSR projects with Kidzee, Worly, Apsara, Nataraj, contributing to its commitment to community development.',
    },
];

export default function RoadMap() {
    return (
        <Container sx={{ py: 8, position: 'relative' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5, position: 'relative', }}>
                Our Journey So Far
            </Typography>

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={40}
                grabCursor={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                speed={1500}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.custom-swiper-button-next', prevEl: '.custom-swiper-button-prev' }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                style={{
                    padding: '10px 30px 60px 20px'
                }}
            >
                {roadmapData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                border: '2px solid rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                padding: '30px',
                                backgroundColor: '#fff',
                                boxShadow: index % 2 === 0 ? '10px 10px 0 #32BFC2' : '10px 10px 0 #FFD041',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                },
                                height: '100%',
                                minHeight: '300px', // Ensure minimum height
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    mb: 2,
                                    background: index % 2 === 0 ? '#32BFC2' : '#FFD041',
                                    color: '#fff',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    width: 'fit-content',
                                    margin: '0 auto',
                                }}
                            >
                                {item.year}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: 'justify',
                                    color: '#333',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="custom-swiper-button-next"
                style={{
                    color: '#333',
                    fontSize: '4rem',
                    right: '20px',
                    top: '50%',
                    position: 'absolute',
                    zIndex: 10,
                    cursor: 'pointer',
                }}
            >
                &#8250;
            </div>
            <div
                className="custom-swiper-button-prev"
                style={{
                    color: '#333',
                    fontSize: '4rem',
                    left: '20px',
                    top: '50%',
                    position: 'absolute',
                    zIndex: 10,
                    cursor: 'pointer',
                }}
            >
                &#8249;
            </div>
        </Container >
    );
}

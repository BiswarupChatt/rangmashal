import React from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';  // Import the quote icon
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
    {
        name: 'Trisha Das',
        review: "They are doing a very wonderful job with full honesty which is very much needed in today's society. They are always active and completely dedicated to their work which makes them unique to me. More power to you Rangmashal Jadavpur✊❤️",
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjWYsZ9xBKUYxM3eqN8ECQh-VTdYqQNDqdnHs2QiwgpMAuBsi0MC=w60-h60-p-rp-mo-br100',
    },
    {
        name: 'Ankita Chatterjee',
        review: "It is indeed a great initiative and i am very proud of them.... They are flourishing day by day... And i hope they will reach to the peak of success..... Will love to participate in this organization any day if possible.",
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjUBUCzg_uVxGYlipWkEty07XMktDg77y9NrVd8ab2WtqgbUET2v=w60-h60-p-rp-mo-br100',
    },
    {
        name: 'Sourav Biswas',
        review: "This group has done tremendous service in the locality during the corona pandemic... specially during the lockdown... wheather it's arranging oxygen or medicine...call them they were there.... big shoutout to them ❤️❤️",
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjU9OPH_hOL1CHeyGTEr10aNnWh9Fs-_Z3ESNNrgvbNfi6DY99mC=w60-h60-p-rp-mo-br100',
    },
    {
        name: 'Pallabi Majee',
        review: 'Rangmashal Jadavapur is doing great work towards the upliftment of needy people in Society. Members are very co operative and they are easy to reach out. May God Bless Them! ..',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVS_9HwNv7HqLUgbdP5pZV1mHsYrZFjR9zn5j66OiKx30qk91JcaA=w60-h60-p-rp-mo-br100',
    },
    {
        name: 'Upamanyu Bhattacharya',
        review: 'Very good organisation for social work. Rangmashal helps many financially backward families, especially children. Keep up the good work.',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVS_9HwNv7HqLUgbdP5pZV1mHsYrZFjR9zn5j66OiKx30qk91JcaA=w60-h60-p-rp-mo-br100',
    },
];

export default function Testimonials() {
    return (
        <Box sx={{ width: '100%', py: 6, backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container>
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Testimonials
                </Typography>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
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
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    p: 4,
                                    margin: '0 5px 40px 0',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    backgroundColor: '#fff',
                                    boxShadow: index % 2 === 0 ? '5px 5px 0 #32BFC2' : '5px 5px 0 #FFD041',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >

                                <FormatQuoteIcon
                                    sx={{
                                        fontSize: 60,
                                        color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                        position: 'absolute',
                                        top: '5%',
                                        left: '5%',
                                        transform: 'rotate(180deg)',
                                        opacity: 1,
                                    }}
                                />
                                <FormatQuoteIcon
                                    sx={{
                                        fontSize: 60,
                                        color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                        position: 'absolute',
                                        bottom: '5%',
                                        right: '5%',
                                        opacity: 1,
                                    }}
                                />

                                <Avatar
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    sx={{ width: 80, height: 80, mb: 3, zIndex: 2 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {testimonial.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', fontStyle: 'italic', maxWidth: '350px', zIndex: 3, textAlign:'justify' }}
                                >
                                    {testimonial.review}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
}

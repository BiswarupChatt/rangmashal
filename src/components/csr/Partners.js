import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Box, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Autoplay } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";


export default function Partners() {

    const sponsors = [
        { id: 1, img: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725902228/Website/partners-logo/axzyxacnw7h0y7bcg7th.png", alt: "Canara-bank", url: "https://canarabank.com/" },
        { id: 2, img: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1726316341/Website/partners-logo/z9ywprk1xgfsu1lfwlcu.png", alt: "Abzooba", url: "https://abzooba.com/" },
        { id: 3, img: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1726317505/Website/partners-logo/hkqdwm9h8irlsldnxybz.png", alt: "Worly", url: "https://www.worley.com/" },
        { id: 4, img: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1726316042/Website/partners-logo/sqm12ut28vuikb5aygtv.png", alt: "Mouth-melto", },
    ];

    const isMediumScreen = useMediaQuery("(max-width:650px)");
    const isSmallScreen = useMediaQuery("(max-width:350px)");

    return (
        <Box sx={{ backgroundColor: 'rgba(255, 208, 65, 0.2)', padding: '10px' }}>

            <Container sx={{ my: '30px', }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box>
                            <Typography variant="h4" marginBottom={3} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                Our Partners
                            </Typography>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                speed={1500}
                            >
                                {sponsors.map((sponsor) => (
                                    <SwiperSlide key={sponsor.id}>
                                        <a
                                            href={sponsor.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <img
                                                    src={sponsor.img}
                                                    alt={sponsor.alt}
                                                    style={{
                                                        width: '100px',
                                                        height: 'auto',
                                                        margin: '0 10px',
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                            </Box>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Fade>
                </Slide>

            </Container>
        </Box>
    )
}
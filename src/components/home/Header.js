import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import LazyLoad from "react-lazyload";
import { Autoplay } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";
import DonateButton from "../reusable/DonateButton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {

    const backgroundImages = [
        { src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg", alt: "Background 1" },
        { src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg", alt: "Background 2" },
    ];

    const isMediumScreen = useMediaQuery("(max-width:650px)");
    const isSmallScreen = useMediaQuery("(max-width:350px)");

    return (
        <Box
            position="relative"
            top="15px"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, }}
                loop={true}
                speed={1500}
                modules={[Autoplay]}
            >
                {backgroundImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
                            <LazyLoadImageWithBlur src={image.src} alt={image.alt} />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    padding: '0 20px',
                    maxWidth: '90vw',
                }}
            >
                <Container>
                    <Box>
                        <img
                            src="/images/logo.png"
                            alt="Organization Logo"
                            style={{
                                width: isSmallScreen ? '150px' : isMediumScreen ? '250px' : '350px',
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            variant={isMediumScreen ? 'h4' : 'h2'}
                            fontWeight={isMediumScreen ? 'bold' : 'medium'}
                            gutterBottom
                            sx={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
                        >
                            <span style={{ color: '#32BFC2' }}>Together we rise, {' '}</span>
                            for a future that&#39;s wise.
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mb: 3,
                                fontSize: isMediumScreen ? '1rem' : '1.2rem',
                                textAlign: 'justify',
                                textAlignLast: "center",
                                whiteSpace: 'normal',
                            }}
                        >
                            Welcome to Rangmashal Foundation, a youth-driven NGO empowering underprivileged children and women across India since 2020.
                        </Typography>

                        <DonateButton label="Donate Now" />
                    </Box>


                </Container>

            </Box>
        </Box>

    );
}

const LazyLoadImageWithBlur = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <LazyLoad height={100} once>
            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    filter: isLoaded ? "none" : "blur(20px)",
                    transition: "filter 1s ease",
                }}
            />
        </LazyLoad>

    );
};

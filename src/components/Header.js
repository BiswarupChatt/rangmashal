import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Box, Button, Container, Typography, } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
    const sponsors = [
        { id: 1, img: "/images/sponsor1.png", alt: "Sponsor 1" },
        { id: 2, img: "/images/sponsor2.png", alt: "Sponsor 2" },
        { id: 3, img: "/images/sponsor3.png", alt: "Sponsor 3" },
        { id: 4, img: "/images/sponsor4.png", alt: "Sponsor 4" },
        { id: 5, img: "/images/sponsor5.png", alt: "Sponsor 5" },
        { id: 6, img: "/images/sponsor6.png", alt: "Sponsor 6" },
    ];

    const backgroundImages = [
        { src: "/images/background1.png", alt: "Background 1" },
        { src: "/images/background2.png", alt: "Background 2" },
    ];

    const isSmallScreen = useMediaQuery("(max-width:650px)");

    return (
        <Box position="relative" sx={{ height: "100vh", overflow: "hidden" }}>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                speed={1500}
                className="background-swiper"
            >
                {backgroundImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="div"
                            sx={{
                                backgroundImage: `url(${image.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100vh",
                                position: "relative",
                                "::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
                                    zIndex: 1,
                                },
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box
                sx={{
                    position: "absolute",
                    top: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                }}
            >
                <img
                    src="/images/logo.png"
                    alt="Organization Logo"
                    style={{
                        width: isSmallScreen ? "200px" : "350px",
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    textAlign: "center",
                    color: "white",
                    padding: "0 20px",
                    maxWidth: "90vw",
                }}
            >
                <Container>
                    <Box>
                        <Typography
                            variant={isSmallScreen ? "h4" : "h2"}
                            fontWeight={isSmallScreen ? "bold" : "medium"}
                            gutterBottom
                            sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                            Join the fight for a{" "}
                            <span style={{ color: "#32BFC2" }}>better world</span>
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mb: 3,
                                fontSize: isSmallScreen ? "1rem" : "1.2rem",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                            }}
                        >
                            Welcome to Rangmashal Foundation, India’s leading NGO that has
                            been empowering underprivileged children and women across India
                            since 2020.
                        </Typography>

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ padding: isSmallScreen ? "8px 16px" : "10px 20px" }}
                        >
                            Donate Now
                        </Button>
                    </Box>
                </Container>

                <Container sx={{ mt: 10 }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={isSmallScreen ? 2 : 4}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        speed={1500}
                    >
                        {sponsors.map((sponsor) => (
                            <SwiperSlide key={sponsor.id}>
                                <img
                                    src={sponsor.img}
                                    alt={sponsor.alt}
                                    style={{
                                        width: "100px",
                                        height: "auto",
                                        margin: "0 10px",
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Box>
        </Box>
    );
}

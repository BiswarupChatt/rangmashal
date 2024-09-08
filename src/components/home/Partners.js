import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Box, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Autoplay } from "swiper/modules";


export default function Partners() {

    const sponsors = [
        { id: 1, img: "/images/kidzee.png", alt: "Kidzee", url: "https://www.kidzee.com/" },
        { id: 2, img: "/images/canara-bank.png", alt: "Canara Bank", url: "https://canarabank.com/" },
        { id: 3, img: "/images/apsara.png", alt: "Apsara", url: "https://www.hindustanpencils.com/category/products/apsara/apsara-pencils/" },
        { id: 4, img: "/images/kidzee.png", alt: "Kidzee", url: "https://www.kidzee.com/" },
        { id: 5, img: "/images/canara-bank.png", alt: "Canara Bank", url: "https://canarabank.com/" },
        { id: 6, img: "/images/apsara.png", alt: "Apsara", url: "https://www.hindustanpencils.com/category/products/apsara/apsara-pencils/" },
    ];

    const isMediumScreen = useMediaQuery("(max-width:650px)");
    const isSmallScreen = useMediaQuery("(max-width:350px)");

    return (
        <Container sx={{ mt: 10 }}>
            <Typography variant="body1" marginBottom={3}>
                Our Partners
            </Typography>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
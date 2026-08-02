import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import LazyLoad from "react-lazyload";
import { Autoplay } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";
import DonateButton from "../../../shared/components/DonateButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../../../shared/theme/theme";

export default function Header() {
  const slides = [
    {
      src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg",
      alt: "Children learning together",
      accent: "Lighting Lives.",
      title: "Building Stronger Communities.",
      description:
        "Rangmashal Foundation is a registered public charitable trust dedicated to sustainable development, humanitarian service, education, and social welfare.",
    },
    {
      src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg",
      alt: "Community support activity",
      accent: "Compassion in action,",
      title: "opportunity with dignity.",
      description:
        "We empower children, women, senior citizens, and vulnerable communities through education, healthcare awareness, livelihood support, and community-led development.",
    },
  ];

  const isMediumScreen = useMediaQuery("(max-width:650px)");
  const isSmallScreen = useMediaQuery("(max-width:350px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
        style={{ width: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
              <LazyLoadImageWithBlur src={slide.src} alt={slide.alt} />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  textAlign: "center",
                  color: "white",
                  width: { xs: "90%", md: "70%", lg: "50%" },
                }}
              >
                <Container sx={{ marginTop: 5 }}>
                  <Box>
                    <img
                      src="/images/logo-only.png"
                      alt="Organization Logo"
                      style={{
                        width: isSmallScreen
                          ? "150px"
                          : isMediumScreen
                          ? "200px"
                          : "300px",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      variant="h2"
                      fontSize={isMediumScreen ? "1.8rem" : "2.8rem"}
                      fontWeight="medium"
                      gutterBottom
                      sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                    >
                      <span style={{ color: theme.palette.primary.main }}>
                        {slide.accent}{" "}
                      </span>
                      {slide.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        fontSize: isMediumScreen ? "1rem" : "1.2rem",
                        textAlign: "center",
                        textAlignLast: "center",
                        whiteSpace: "normal",
                      }}
                    >
                      {slide.description}
                    </Typography>

                    <DonateButton label="Donate Now" />
                  </Box>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
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

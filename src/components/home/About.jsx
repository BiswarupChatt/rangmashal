import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Fade, Slide } from "react-awesome-reveal";
import { Link as RouterLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { theme } from "../../global/theme";

const imageCards = [
  {
    src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg",
    alt: "Children learning in a classroom",
    sx: {
      top: 0,
      right: 0,
      width: { md: "82%", lg: "78%" },
      height: { md: 340, lg: 370 },
      objectPosition: "center",
    },
  },
  {
    src: "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg",
    alt: "Community members participating in a support activity",
    sx: {
      bottom: 0,
      left: 0,
      width: { md: "58%", lg: "52%" },
      height: { md: 250, lg: 285 },
      objectPosition: "center",
    },
  },
];

export default function About() {
  const isCompactScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ padding: { xs: "20px", sm: "30px", md: "50px" } }}>
      <Slide direction="up" triggerOnce>
        <Fade triggerOnce>
          <Box>
            <Typography
              variant="h4"
              marginBottom={{ xs: 2.5, sm: 3.5 }}
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: theme.palette.primary.main,
                mt:3
              }}
            >
              About Us
            </Typography>

            <Grid container spacing={{ xs: 4, sm: 5, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                      lineHeight: { xs: 1.2, sm: 1.15 },
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Building brighter futures for children and women.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1.75, sm: 2 },
                      lineHeight: { xs: 1.75, sm: 1.9 },
                    }}
                  >
                    Since 2020, Rangmashal Foundation has worked with
                    underserved communities to expand access to education,
                    strengthen support systems for women, and respond with
                    practical care when families need it most.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1.25,
                      mb: { xs: 3.5, sm: 4.5 },
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to="/who-we-are/about"
                      underline="none"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        transition: "transform 0.2s ease, color 0.2s ease",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Read More
                      <EastIcon sx={{ fontSize: 18 }} />
                    </Link>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                {isCompactScreen ? (
                  <Box
                    sx={{
                      // maxWidth: { xs: 290, sm: 360 },
                      mx: "auto",
                    }}
                  >
                    <Swiper
                      spaceBetween={14}
                      slidesPerView={1}
                      loop
                      autoplay={{ delay: 3200, disableOnInteraction: false }}
                      modules={[Autoplay]}
                    >
                      {imageCards.map((image) => (
                        <SwiperSlide key={image.alt}>
                          <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            sx={{
                              display: "block",
                              width: "100%",
                              height: { xs: 310, sm: 350 },
                              objectFit: "cover",
                              border: "5px solid #ffffff",
                              borderRadius: 2,
                              boxShadow: "0 18px 32px rgba(13, 39, 58, 0.16)",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 560,
                      minHeight: { md: 520, lg: 560 },
                      mx: "auto",
                      pt: 3,
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: { md: 24, lg: 28 },
                        left: { md: 36, lg: 48 },
                        width: { md: "72%", lg: "68%" },
                        height: { md: 370, lg: 410 },
                        borderRadius: "22px",
                        backgroundColor: theme.palette.secondary.light,
                      }}
                    />

                    {imageCards.map((image, index) => (
                      <Box
                        key={image.alt}
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        sx={{
                          position: "absolute",
                          zIndex: index + 1,
                          display: "block",
                          objectFit: "cover",
                          border: "8px solid #ffffff",
                          borderRadius: 1,
                          boxShadow: "0 28px 55px rgba(13, 39, 58, 0.2)",
                          ...image.sx,
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Slide>
    </Container>
  );
}

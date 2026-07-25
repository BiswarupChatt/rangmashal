import { Box, Container, Grid, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ElderlyIcon from "@mui/icons-material/Elderly";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InsightsIcon from "@mui/icons-material/Insights";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import SpaIcon from "@mui/icons-material/Spa";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { theme } from "../../global/theme";

const philosophy = [
  {
    title: "Every Action Matters",
    description:
      "Every meaningful action, no matter how small, can transform lives, strengthen communities, and inspire future generations.",
    icon: <FavoriteIcon />,
  },
  {
    title: "Education Strengthens Families",
    description:
      "A child's education strengthens an entire family and creates opportunities that continue across generations.",
    icon: <AutoStoriesIcon />,
  },
  {
    title: "Empowered Women Transform Communities",
    description:
      "An empowered woman transforms a community through confidence, leadership, livelihood, and equal opportunity.",
    icon: <GroupsIcon />,
  },
  {
    title: "Respect Preserves Wisdom",
    description:
      "A respected senior citizen preserves wisdom, culture, and social harmony within families and communities.",
    icon: <ElderlyIcon />,
  },
  {
    title: "Volunteerism Inspires Change",
    description:
      "A dedicated volunteer inspires collective action and helps communities move from concern to meaningful service.",
    icon: <VolunteerActivismIcon />,
  },
  {
    title: "Resilience Builds The Nation",
    description:
      "A resilient community builds a stronger nation through dignity, compassion, equality, and shared responsibility.",
    icon: <PublicIcon />,
  },
];

const values = [
  ["Compassion", "We serve humanity with empathy, kindness, and respect.", <FavoriteIcon />],
  ["Integrity", "We uphold honesty, ethics, accountability, and responsible governance.", <VerifiedIcon />],
  ["Inclusivity", "We design programmes so no person or community is excluded from development.", <Diversity3Icon />],
  ["Empowerment", "We equip people with knowledge, skills, confidence, and opportunity.", <PsychologyIcon />],
  ["Transparency", "We maintain openness in governance, finances, implementation, and decisions.", <VisibilityIcon />],
  ["Collaboration", "We work with volunteers, institutions, government agencies, corporate organizations, civil society groups, and communities.", <HandshakeIcon />],
  ["Sustainability", "We strengthen local capacity, community ownership, and long-term impact.", <SpaIcon />],
  ["Excellence", "We improve governance, programme quality, innovation, and measurable social impact.", <TrendingUpIcon />],
];

const approach = [
  ["Identify", "We understand the needs, aspirations, and challenges of the communities we serve through direct engagement and field assessment.", <SearchIcon />],
  ["Empower", "We provide education, skills, resources, and opportunities so individuals and communities can become self-reliant.", <LightbulbIcon />],
  ["Collaborate", "We build partnerships with volunteers, communities, institutions, government agencies, corporate organizations, and social partners.", <HandshakeIcon />],
  ["Sustain", "We design programmes to strengthen local capacity and create outcomes that continue beyond the project period.", <InsightsIcon />],
];

export default function Principles() {
  const sliderBreakpoints = {
    0: { slidesPerView: 1, spaceBetween: 18 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 28 },
  };

  const philosophyCardSx = {
    height: "100%",
    minHeight: 235,
    p: { xs: 3, sm: 3.5 },
    borderRadius: "8px 42px 8px 42px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(243,251,251,0.96) 100%)",
    border: "1px solid rgba(47, 185, 190, 0.28)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    transition:
      "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      borderColor: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
    "&:hover .principles-icon": {
      transform: "scale(1.08)",
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  };

  const approachCardSx = {
    height: "100%",
    minHeight: 230,
    p: 3,
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    borderTop: `6px solid ${theme.palette.secondary.main}`,
    borderRight: "1px solid rgba(255, 199, 48, 0.35)",
    borderBottom: "1px solid rgba(255, 199, 48, 0.35)",
    borderLeft: "1px solid rgba(255, 199, 48, 0.35)",
    position: "relative",
    transition:
      "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      borderTopColor: theme.palette.primary.main,
      backgroundColor: "rgba(255,255,255,0.92)",
    },
    "&:hover .approach-icon": {
      transform: "translateX(4px)",
      backgroundColor: theme.palette.primary.light,
      color: "primary.main",
    },
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.light }}>
      <Container sx={{ padding: { xs: "20px", md: "50px" } }}>
        <Fade triggerOnce>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 1.5, textAlign: "center" }}
            >
              Our Philosophy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 760,
                mx: "auto",
                mb: 2.5,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              Our beliefs guide how we serve, partner, and create lasting
              community change.
            </Typography>
            <Swiper
              modules={[Autoplay, Pagination]}
              breakpoints={sliderBreakpoints}
              autoplay={{ delay: 4200, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              style={{ padding: "16px 4px 44px", marginBottom: "32px" }}
            >
              {philosophy.map(({ title, description, icon }) => (
                <SwiperSlide key={title}>
                  <Box sx={philosophyCardSx}>
                    <Box
                      sx={{
                        width: 68,
                        height: 68,
                        mb: 2,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        transition:
                          "transform 0.25s ease, background-color 0.25s ease, color 0.25s ease",
                        "& svg": { fontSize: 34 },
                      }}
                      className="principles-icon"
                    >
                      {icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "primary.main" }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

          </Box>
        </Fade>

        <Slide direction="up" triggerOnce>
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 1.5, textAlign: "center" }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 760,
                mx: "auto",
                mb: 3,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              These values shape every decision, programme, and partnership we
              build.
            </Typography>
            <Fade cascade damping={0.12} triggerOnce>
              <Grid container spacing={2.5}>
                {values.map(([title, description, icon], index) => {
                  const isPrimary = index % 2 === 0;

                  return (
                    <Grid item xs={12} md={6} key={title}>
                      <Box
                        sx={{
                          height: "100%",
                          p: { xs: 2.25, sm: 2.75 },
                          backgroundColor: "#fff",
                          borderRadius: "6px",
                          border: "1px solid rgba(13, 39, 58, 0.08)",
                          borderLeft: `6px solid ${
                            isPrimary
                              ? theme.palette.primary.main
                              : theme.palette.secondary.main
                          }`,
                          display: "flex",
                          gap: 2,
                          alignItems: "flex-start",
                          transition:
                            "transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
                          "&:hover": {
                            transform: "translateX(5px)",
                            backgroundColor: isPrimary
                              ? "rgba(47, 185, 190, 0.06)"
                              : "rgba(255, 199, 48, 0.1)",
                          },
                          "&:hover .value-icon": {
                            transform: "rotate(-5deg) scale(1.08)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 46,
                            height: 46,
                            flexShrink: 0,
                            borderRadius: "50%",
                            backgroundColor: isPrimary
                              ? "rgba(47, 185, 190, 0.13)"
                              : "rgba(255, 199, 48, 0.22)",
                            color: isPrimary ? "primary.main" : "secondary.main",
                            display: "grid",
                            placeItems: "center",
                            transition: "transform 0.25s ease",
                            "& svg": { fontSize: 26 },
                          }}
                          className="value-icon"
                        >
                          {icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              mb: 0.75,
                              color: "text.primary",
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography variant="body2">{description}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Fade>
          </Box>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 1.5, textAlign: "center" }}
            >
              Our Approach
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 760,
                mx: "auto",
                mb: 3,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              We follow a practical process that starts with listening and ends
              with sustainable community ownership.
            </Typography>
            <Swiper
              modules={[Autoplay, Pagination]}
              breakpoints={sliderBreakpoints}
              autoplay={{ delay: 4600, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              style={{ padding: "4px 4px 44px" }}
            >
              {approach.map(([title, description, icon], index) => (
                <SwiperSlide key={title}>
                  <Box sx={approachCardSx}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "16px",
                          backgroundColor: theme.palette.secondary.light,
                          color: "secondary.main",
                          display: "grid",
                          placeItems: "center",
                          transition:
                            "transform 0.25s ease, background-color 0.25s ease, color 0.25s ease",
                          "& svg": { fontSize: 30 },
                        }}
                        className="approach-icon"
                      >
                        {icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "rgba(0,0,0,0.08)",
                          fontWeight: "bold",
                          lineHeight: 1,
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "secondary.main" }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
}

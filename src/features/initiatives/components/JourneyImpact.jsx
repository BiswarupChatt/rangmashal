import React, { useMemo, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import {
  categoryNav,
  flagshipInitiatives,
  heroImage,
  initiativeSections,
  sharodiyarTimeline,
} from "../data/initiativesData";

const sectionSx = {
  py: { xs: 6, md: 9 },
};

const sliderSx = {
  pb: 1,
  minWidth: 0,
  overflow: "hidden",
  "& .swiper-slide": {
    height: "auto",
    display: "flex",
    minWidth: 0,
  },
  "& .swiper": {
    pb: 5,
    width: "100%",
    overflow: "hidden",
  },
  "& .swiper-wrapper": {
    alignItems: "stretch",
  },
  "& .swiper-pagination": {
    bottom: 6,
  },
  "& .swiper-pagination-bullet-active": {
    bgcolor: "primary.main",
  },
};

function SectionReveal({ children, direction = "up" }) {
  return (
    <Slide direction={direction} cascade damping={0.18} triggerOnce>
      <Fade cascade triggerOnce>
        {children}
      </Fade>
    </Slide>
  );
}

const revealDirections = ["up", "left", "right"];

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <Box sx={{ maxWidth: 850, mb: { xs: 3, md: 5 } }}>
      {eyebrow && (
        <Typography
          component="p"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            mb: 1,
            textTransform: "uppercase",
            fontSize: "0.78rem",
            letterSpacing: 0,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        variant="h4"
        sx={{
          fontWeight: 900,
          mb: 1.5,
          fontSize: { xs: "1.75rem", md: "2.35rem" },
        }}
      >
        {title}
      </Typography>
      {intro && (
        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {intro}
        </Typography>
      )}
    </Box>
  );
}

function CategoryNavigation() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const resumeTimer = useRef(null);

  const pauseMarquee = () => {
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
    }
    setIsMarqueePaused(true);
  };

  const resumeMarqueeSoon = () => {
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
    }
    resumeTimer.current = window.setTimeout(() => {
      setIsMarqueePaused(false);
    }, 1800);
  };

  const handlePointerStart = (event) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      pauseMarquee();
    }
  };

  const handlePointerEnd = (event) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      resumeMarqueeSoon();
    }
  };

  const renderChip = (item, index, isDuplicate = false) => (
    <Chip
      key={`${item.id}-${index}-${isDuplicate ? "copy" : "main"}`}
      component="div"
      label={item.label}
      clickable={false}
      aria-hidden={isDuplicate ? "true" : undefined}
      sx={{
        minHeight: 40,
        borderRadius: "10px",
        bgcolor: "primary.light",
        color: "#123",
        fontWeight: 700,
        flexShrink: 0,
      }}
    />
  );

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderBlock: "1px solid",
        borderColor: "divider",
        position: { md: "sticky" },
        top: { md: 72 },
        zIndex: 4,
      }}
    >
      <Container sx={{ py: 1.5, px: { xs: 0, sm: 3 }, overflow: "hidden" }}>
        <Box
          onPointerDown={handlePointerStart}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
          sx={{
            overflowX: "auto",
            scrollbarWidth: "none",
            cursor: { xs: "grab", lg: "default" },
            touchAction: "pan-x",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": { display: "none" },
            "&:active": { cursor: { xs: "grabbing", lg: "default" } },
          }}
          aria-label="Initiative categories"
        >
          <Stack
            className="initiative-marquee-track"
            direction="row"
            gap={1}
            sx={{
              width: "max-content",
              pr: 1,
              animation: "initiativeCategoryMarquee 32s linear infinite",
              animationPlayState: isMarqueePaused ? "paused" : "running",
              "@keyframes initiativeCategoryMarquee": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
              },
            }}
          >
            <Stack direction="row" gap={1} sx={{ flexShrink: 0 }}>
              {categoryNav.map((item, index) => renderChip(item, index))}
            </Stack>
            <Stack
              direction="row"
              gap={1}
              sx={{ flexShrink: 0 }}
              aria-hidden="true"
            >
              {categoryNav.map((item, index) =>
                renderChip(item, index, true)
              )}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 560, md: 620 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.74), rgba(0,0,0,0.44)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 7, md: 4 } }}>
        <Box sx={{ maxWidth: 780 }}>
          <Chip
            label="Our Initiatives"
            sx={{
              bgcolor: "secondary.main",
              fontWeight: 900,
              mb: 2,
              borderRadius: "8px",
            }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 900,
              lineHeight: 1.08,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              mb: 2,
            }}
          >
            Our Journey of Impact
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              mb: 2.5,
              fontSize: { xs: "1.2rem", md: "1.65rem" },
            }}
          >
            Lighting Lives with Compassion, Hope and Humanity
          </Typography>
          <Typography sx={{ maxWidth: 670, lineHeight: 1.85, mb: 3 }}>
            From emergency relief and healthcare to education, festive dignity,
            and community partnerships, Rangmashal Foundation brings people
            together to serve underprivileged communities across West Bengal.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function JourneyIntro() {
  return (
    <Box id="journey-introduction" sx={{ ...sectionSx, bgcolor: "#fff" }}>
      <Container>
        <SectionReveal>
          <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <SectionHeading
              eyebrow="A foundation built on service"
              title="Small acts of kindness, organised into lasting change"
            />
            <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
              Rangmashal Foundation was established with a simple belief:
              meaningful change begins when individuals come together with
              compassion and a commitment to serve society.
            </Typography>
            <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
              Over the years, that belief has grown from small acts of kindness
              into structured community initiatives across humanitarian
              assistance, education, healthcare, disaster relief, child welfare,
              women's empowerment, and community development.
            </Typography>
            <Typography sx={{ lineHeight: 1.9 }}>
              Every initiative reflects integrity, transparency, empathy,
              collective responsibility, and active participation from
              volunteers, supporters, donors, and partners.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "10px",
                bgcolor: "secondary.light",
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.08)",
              }}
            >
              <FavoriteIcon
                sx={{ color: "primary.main", fontSize: 42, mb: 2 }}
              />
              <Typography
                component="blockquote"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.45rem" },
                  lineHeight: 1.55,
                  fontWeight: 800,
                }}
              >
                "Restore hope, preserve dignity, and empower communities to
                build a better future."
              </Typography>
            </Paper>
          </Grid>
          </Grid>
        </SectionReveal>
      </Container>
    </Box>
  );
}

function ExpandableContent({ details, title }) {
  if (!details?.length) return null;
  return (
    <Accordion
      elevation={0}
      sx={{
        mt: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "8px !important",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-details`}
        id={`${title}-summary`}
      >
        <Typography sx={{ fontWeight: 800 }}>
          Read more about this initiative
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map((item) => (
          <Typography
            key={item}
            sx={{ mb: 1.5, lineHeight: 1.8, color: "text.secondary" }}
          >
            {item}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

function HighlightList({ items }) {
  if (!items?.length) return null;
  return (
    <Stack component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }} gap={1.2}>
      {items.map((item) => (
        <Stack
          component="li"
          key={item}
          direction="row"
          gap={1.2}
          alignItems="flex-start"
        >
          <CheckCircleOutlineIcon
            sx={{
              color: "primary.main",
              fontSize: 21,
              mt: "2px",
              flexShrink: 0,
            }}
          />
          <Typography sx={{ lineHeight: 1.65 }}>{item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

function FeaturedInitiatives() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: "primary.light" }}>
      <Container>
        <SectionReveal direction="right">
          <SectionHeading
            eyebrow="Flagship programmes"
            title="Flagship Initiatives"
            intro="Two core programmes receive deeper treatment here because they define the Foundation's journey through crisis response and annual festive compassion."
          />
          <Grid container spacing={3}>
          {flagshipInitiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Grid
                item
                xs={12}
                md={6}
                key={initiative.id}
                id={initiative.id}
                sx={{ scrollMarginTop: 110 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: "10px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    bgcolor: "#fff",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "10px",
                        bgcolor: "secondary.light",
                        display: "grid",
                        placeItems: "center",
                        color: "primary.main",
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 900,
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                        }}
                      >
                        {initiative.eyebrow}
                      </Typography>
                      {initiative.period && (
                        <Typography
                          color="text.secondary"
                          sx={{ fontWeight: 700 }}
                        >
                          {initiative.period}
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{ fontWeight: 900, mb: 0.5 }}
                  >
                    {initiative.title}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 800, color: "text.secondary", mb: 2 }}
                  >
                    {initiative.meaning}
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, mb: 2 }}>
                    {initiative.summary}
                  </Typography>
                  <HighlightList items={initiative.highlights} />
                  <ExpandableContent
                    details={initiative.details}
                    title={initiative.id}
                  />
                </Paper>
              </Grid>
            );
          })}
          </Grid>
        </SectionReveal>
      </Container>
    </Box>
  );
}

function SharodiyarTimeline() {
  const renderEdition = (edition) => (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        p: 3,
        borderRadius: "10px",
        border: "1px solid",
        borderColor: "divider",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        "& *": {
          overflowWrap: "anywhere",
          wordBreak: "normal",
        },
      }}
    >
      <Typography sx={{ fontWeight: 900, color: "primary.main", mb: 1 }}>
        {edition.year}
      </Typography>
      <Typography component="h3" variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
        {edition.title}
      </Typography>
      <HighlightList items={edition.points} />
    </Paper>
  );

  return (
    <Box sx={{ ...sectionSx, bgcolor: "#fff" }}>
      <Container>
        <SectionReveal direction="left">
          <SectionHeading
            eyebrow="Six annual editions"
            title="Sharodiyar Porosh Timeline"
            intro="Each edition adds a new chapter to the same purpose: helping the spirit of Durga Puja reach people who might otherwise be left behind."
          />
          <Box sx={{ display: { xs: "block", md: "none" }, ...sliderSx }}>
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            autoHeight
            centeredSlides={false}
            watchOverflow
            a11y={{ enabled: true }}
            style={{ width: "100%", overflow: "hidden" }}
          >
            {sharodiyarTimeline.map((edition) => (
              <SwiperSlide key={edition.year} style={{ width: "100%" }}>
                {renderEdition(edition)}
              </SwiperSlide>
            ))}
          </Swiper>
          </Box>
          <Grid
            container
            spacing={2.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
          {sharodiyarTimeline.map((edition) => (
            <Grid item xs={12} md={6} lg={4} key={edition.year}>
              {renderEdition(edition)}
            </Grid>
          ))}
          </Grid>
        </SectionReveal>
      </Container>
    </Box>
  );
}

function ProgrammeCard({ programme }) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        p: 3,
        borderRadius: "10px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "#fff",
        overflow: "hidden",
        "& *": {
          overflowWrap: "anywhere",
          wordBreak: "normal",
        },
      }}
    >
      {programme.meta && (
        <Chip
          label={programme.meta}
          size="small"
          sx={{
            mb: 1.5,
            bgcolor: "secondary.light",
            fontWeight: 800,
            borderRadius: "8px",
          }}
        />
      )}
      <Typography component="h3" variant="h6" sx={{ fontWeight: 900 }}>
        {programme.title}
      </Typography>
      <Typography sx={{ color: "primary.main", fontWeight: 800, mb: 1 }}>
        {programme.tagline}
      </Typography>
      <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2 }}>
        {programme.summary}
      </Typography>
      {programme.phases ? (
        <Stack gap={1.5}>
          {programme.phases.map((phase) => (
            <Box
              key={phase.label}
              sx={{ p: 2, borderRadius: "8px", bgcolor: "primary.light" }}
            >
              <Typography sx={{ fontWeight: 900 }}>
                {phase.label}: {phase.location}
              </Typography>
              <HighlightList items={phase.points} />
            </Box>
          ))}
        </Stack>
      ) : (
        <HighlightList items={programme.highlights} />
      )}
    </Paper>
  );
}

function InitiativeSection({ section, index }) {
  const Icon = section.icon;
  const isSoft = index % 2 === 0;
  const useSlider = section.programmes.length > 1;

  return (
    <Box
      id={section.id}
      sx={{
        ...sectionSx,
        bgcolor: isSoft ? "secondary.light" : "#fff",
        scrollMarginTop: 110,
      }}
    >
      <Container>
        <SectionReveal direction={revealDirections[index % revealDirections.length]}>
          <Box sx={{ maxWidth: 850, mb: { xs: 3, md: 5 } }}>
            <Stack
              direction="row"
              spacing={{ xs: 1.25, sm: 1.5 }}
              alignItems="center"
              sx={{ mb: 1.5 }}
            >
              <Box
                sx={{
                  width: { xs: 38, sm: 46 },
                  height: { xs: 38, sm: 46 },
                  borderRadius: "10px",
                  bgcolor: isSoft ? "#fff" : "primary.light",
                  display: "grid",
                  placeItems: "center",
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                <Icon fontSize="small" />
              </Box>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.75rem", md: "2.35rem" },
                  lineHeight: 1.15,
                }}
              >
                {section.title}
              </Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {section.intro}
            </Typography>
          </Box>
          {useSlider && (
            <Box sx={{ display: { xs: "block", lg: "none" }, ...sliderSx }}>
              <Swiper
                modules={[Pagination, A11y]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={false}
                watchOverflow
                a11y={{ enabled: true }}
                style={{ width: "100%", overflow: "hidden" }}
              >
                {section.programmes.map((programme) => (
                  <SwiperSlide key={programme.title} style={{ width: "100%" }}>
                    <ProgrammeCard programme={programme} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          )}
          <Grid
            container
            spacing={2.5}
            sx={{ display: { xs: useSlider ? "none" : "flex", lg: "flex" } }}
          >
            {section.programmes.map((programme) => (
              <Grid
                item
                xs={12}
                md={section.programmes.length === 1 ? 12 : 6}
                lg={section.programmes.length === 1 ? 12 : 4}
                key={programme.title}
              >
                <ProgrammeCard programme={programme} />
              </Grid>
            ))}
          </Grid>
          {section.id === "csr" && (
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 800 }}>
                Build a transparent CSR collaboration with Rangmashal Foundation.
              </Typography>
              <Button
                component={Link}
                to="/get-involved/csr"
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 900,
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "secondary.main", color: "#111" },
                }}
              >
                Partner With Us
              </Button>
            </Box>
          )}
        </SectionReveal>
      </Container>
    </Box>
  );
}

export default function JourneyImpact() {
  const sections = useMemo(() => initiativeSections, []);

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        "& a:focus-visible, & button:focus-visible": {
          outline: "3px solid #FFD041",
          outlineOffset: 3,
        },
        "@media (prefers-reduced-motion: reduce)": { scrollBehavior: "auto" },
      }}
    >
      <Hero />
      <JourneyIntro />
      <CategoryNavigation />
      <FeaturedInitiatives />
      <SharodiyarTimeline />
      {sections.map((section, index) => (
        <InitiativeSection key={section.id} section={section} index={index} />
      ))}
    </Box>
  );
}

import { Box, Typography, Grid, Container, Collapse } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Fade, Slide } from "react-awesome-reveal";
import { theme } from "../../global/theme";

export default function Mission() {
  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand((ele) => {
      return !ele;
    });
  };
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.secondary.light }}>
      <Container sx={{ padding: { xs: "20px", md: "50px" } }}>
        <Slide direction="up" cascade damping={1} triggerOnce>
          <Fade cascade triggerOnce>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: { xs: "20px 0", md: "0 20px" } }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" textAlign="justify">
                    Rangmashal Foundation is committed to empowering
                    individuals and transforming communities through sustainable
                    development programmes that promote social welfare, human
                    dignity, and inclusive growth. Our mission is achieved
                    through strategic initiatives focused on education,
                    healthcare awareness, community empowerment, humanitarian
                    assistance, environmental sustainability, and active citizen
                    participation.
                    <br />
                    <br />
                  </Typography>

                  <Collapse in={expand} timeout="auto" unmountOnExit>
                    <Typography variant="body1" textAlign="justify">
                      We promote holistic child development by ensuring access
                      to quality education, nutritional support, mentorship,
                      creativity, life skills, and opportunities that enable
                      children to grow into confident, responsible, and
                      compassionate citizens.
                      <br />
                      <br />
                      We strive to empower women through education, leadership
                      development, livelihood generation, entrepreneurship,
                      financial literacy, skill enhancement, and equal
                      opportunities, enabling them to become independent and
                      active contributors to society.
                      <br />
                      <br />
                      We support senior citizens, underprivileged families, and
                      marginalized communities through healthcare awareness,
                      legal literacy, livelihood assistance, skill development,
                      disaster relief, volunteerism, strategic partnerships, and
                      environmental sustainability.
                    </Typography>
                  </Collapse>

                  <Box sx={{ display: "flex", justifyContent: "left", mt: 2 }}>
                    <Typography
                      component="span"
                      onClick={handleToggle}
                      sx={{
                        cursor: "pointer",
                        color: "primary.main",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {expand ? "Read Less" : "Read More"}
                      {expand ? (
                        <ExpandLessIcon sx={{ ml: 1 }} />
                      ) : (
                        <ExpandMoreIcon sx={{ ml: 1 }} />
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "primary.main",
                      transform: "rotate(-5deg)",
                      zIndex: 1,
                      borderRadius: "20px",
                      boxShadow: 20,
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <img
                      src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg"
                      alt="Kids Learning"
                      style={{ width: "100%", borderRadius: "20px" }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Slide>
      </Container>
    </Box>
  );
}

import { Box, Typography, Grid, Container } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import { theme } from "../../global/theme";

export default function Vision() {
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light, width: "100%" }}>
      <Container sx={{ padding: { xs: "20px", md: "50px" } }}>
        <Slide direction="up" cascade damping={1} triggerOnce>
          <Fade cascade triggerOnce>
            <Grid container spacing={4} alignItems="center">
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
                      src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg"
                      alt="Kids Learning"
                      style={{ width: "100%", borderRadius: "20px" }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: { xs: "20px 0", md: "0 20px" } }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" textAlign="justify">
                    At Rangmashal Foundation, our vision is to build an
                    equitable, inclusive, and resilient society where every
                    individual, regardless of age, gender, economic status,
                    social background, ability, or geographical location, has
                    equal access to quality education, healthcare, livelihood
                    opportunities, safety, dignity, and sustainable development.
                    We envision empowered communities that are self-reliant,
                    socially responsible, environmentally conscious, and united
                    by the enduring values of compassion, equality, justice,
                    integrity, and mutual respect.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Slide>
      </Container>
    </Box>
  );
}

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Container sx={{ padding: { xs: "20px", md: "50px" } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "medium", mb: 2, textAlign: "center" }}
        >
          Lighting Lives. Building Stronger Communities.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", mb: 3 }}>
          Rangmashal Foundation is a registered charitable trust committed to
          promoting inclusive development, social justice, and community
          empowerment across India. Our mission is to improve the quality of
          life for children, women, senior citizens, economically weaker
          sections, and vulnerable communities through education, healthcare
          awareness, livelihood support, environmental responsibility,
          humanitarian assistance, and community-based development programmes.
          <br />
          <br />
          We believe that true development is measured not merely by economic
          growth but by the well-being, dignity, and empowerment of every
          individual. Sustainable progress is possible only when communities
          actively participate in shaping their own future. This philosophy forms
          the foundation of every programme and initiative undertaken by
          Rangmashal Foundation.
          <br />
          <br />
          Our work is guided by the core values of compassion, integrity,
          transparency, inclusivity, accountability, and social responsibility.
          Every project is designed to address both immediate needs and the root
          causes of social challenges, ensuring long-term and measurable impact.
        </Typography>

        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4)",
            marginBottom: "20px",
          }}
          src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg"
          alt="Rangmashal Foundation community work"
        />

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Button
            onClick={() => setExpanded((value) => !value)}
            endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Since its inception, Rangmashal Foundation has worked tirelessly
                to support child development, women's empowerment, senior
                citizen welfare, education, healthcare awareness, environmental
                sustainability, and humanitarian relief. Rather than providing
                short-term assistance alone, we strive to equip individuals with
                the knowledge, skills, resources, and opportunities needed to
                build self-reliant and dignified lives.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Our humanitarian commitment has been demonstrated during some of
                India's most challenging times. During the COVID-19 pandemic and
                nationwide lockdown, our volunteers mobilized resources and
                extended essential support to families facing unprecedented
                hardship. We also provided relief and rehabilitation assistance
                to communities affected by Cyclone Amphan and Cyclone Yaas.
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ textAlign: "justify", mt: 3 }}>
            As Rangmashal Foundation continues to grow, our vision extends far
            beyond individual projects. We aspire to build a nationwide network
            of volunteers, professionals, institutions, community clubs, and
            socially responsible citizens working together to promote community
            development, social welfare, and sustainable nation-building. At
            Rangmashal Foundation, service is not an occasional act of charity.
            It is a lifelong commitment to empowering people, strengthening
            communities, and creating a future where every individual has the
            opportunity to live with dignity, hope, equality, and purpose.
          </Typography>
        </Collapse>
      </Container>
    </Box>
  );
}

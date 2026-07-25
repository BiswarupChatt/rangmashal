import { Box, Container, Typography } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";

export default function Commitment() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container sx={{ padding: { xs: "20px", md: "50px" } }}>
        <Slide direction="up" cascade damping={1} triggerOnce>
          <Fade cascade triggerOnce>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              Our Commitment
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", mb: 4 }}>
              Every initiative undertaken by Rangmashal Foundation reflects our
              unwavering commitment to humanitarian service, social welfare,
              community development, and sustainable nation-building. Whether we
              are educating a child, empowering a woman, supporting a senior
              citizen, assisting underprivileged families, responding to natural
              disasters, promoting environmental sustainability, or encouraging
              volunteerism, our purpose remains the same: to create
              opportunities that enable every individual to live with dignity,
              hope, and equal opportunity.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              President's Note
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Welcome to Rangmashal Foundation. Meaningful and lasting change
              begins with compassion, collective action, and a shared
              responsibility to serve society. Every community possesses immense
              potential, and when individuals unite with a common purpose, they
              can transform lives and create a brighter future for generations to
              come.
              <br />
              <br />
              I warmly invite you to become a part of this growing movement.
              Whether as a volunteer, donor, partner, member, or supporter, your
              contribution can help create meaningful and lasting social impact.
              Together, let us light lives and build stronger communities.
              <br />
              <br />
              Tirthankar Sarkar
              <br />
              President, Rangmashal Foundation
            </Typography>
          </Fade>
        </Slide>
      </Container>
    </Box>
  );
}

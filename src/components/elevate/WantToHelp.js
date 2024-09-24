import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Slide, Fade } from 'react-awesome-reveal';

export default function WantToHelp() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
      <Container>
        <Slide direction="up" cascade damping={1} triggerOnce>
          <Fade cascade triggerOnce>
            <Box>
              <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2, }}>
                Want to Help <Box component="span" sx={{ color: 'primary.main' }}>Children?</Box>
              </Typography>

              <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary', textAlign: 'justify', textAlignLast: 'left' }}>
                Are you trying to find an NGO in India that helps underprivileged children through education? Rangmashal is here to make a real difference. We are committed to giving children from disadvantaged backgrounds the education they deserve, with programs that create lasting change and open doors to a brighter future.
                <br /><br />
                Rangmashal is not just transforming lives—it’s shaping a generation of empowered, educated, and capable young individuals ready to lead the future. Join us in making this vision a reality!
              </Typography>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.4)',
                  marginBottom: '20px'
                }}
                src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg"
                alt="Genesis of Rangmashal"
              />
            </Box>
          </Fade>
        </Slide>
      </Container>
    </Box >
  );
}

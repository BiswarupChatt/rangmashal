import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import CountUp from "react-countup";
import { Fade, Slide } from "react-awesome-reveal";
import { theme } from "../../global/theme";

const formatCompactNumber = (value) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("K", "k")
    .replace("M", "m");

export default function Milestones() {
  const counters = [
    {
      count: 100,
      suffix: "+",
      label: "Workshops",
      description:
        "We have conducted over 100 workshops to improve skills and knowledge in various communities.",
    },
    {
      count: 5000,
      suffix: "+",
      label: "Students Supported",
      description:
        "Over 5000 students have been supported through educational programs and scholarships.",
    },
    {
      count: 100000,
      suffix: "+",
      label: "Study Kits Distributed",
      description:
        "We have distributed over 100,000 study kits to help students with essential educational supplies.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "theme.palette.secondary.main", padding: { xs: "4px", md: "8px" } }}>
      <Container sx={{ my: { xs: "12px", md: "20px" } }}>
        <Slide direction="up" cascade damping={1} triggerOnce>
          <Fade cascade triggerOnce>
            <Box sx={{ py: { xs: 1.5, md: 2.5 } }}>
              <Typography
                variant="h4"
                marginBottom={{ xs: 2, md: 2.5 }}
                sx={{ textAlign: "center", fontWeight: "bold", fontSize: { xs: "1.8rem", md: "2rem" } }}
              >
                Milestones
              </Typography>
              <Grid container spacing={{ xs: 2, md: 2.5 }} justifyContent="center">
                {counters.map((counter, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1.5, md: 2 },
                        minHeight: { md: 96 },
                        pb: { xs: 2, md: 0 },
                        pr: { md: 2 },
                        borderBottom:
                          index < counters.length - 1
                            ? {
                                xs: `1px solid ${theme.palette.primary.light}`,
                                md: "none",
                              }
                            : "none",
                        borderRight:
                          index < counters.length - 1
                            ? {
                                md: `1px solid ${theme.palette.primary.light}`,
                              }
                            : "none",
                      }}
                    >
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          lineHeight: 1,
                          fontSize: { xs: "2.2rem", sm: "2.6rem", md: "2.9rem" },
                          minWidth: { xs: 84, md: 96 },
                          flexShrink: 0,
                        }}
                      >
                        <CountUp
                          start={0}
                          end={counter.count}
                          duration={7}
                          formattingFn={formatCompactNumber}
                          suffix={counter.suffix}
                        />
                      </Typography>

                      <Box>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontWeight: "bold",
                            mb: 0.5,
                            fontSize: { xs: "1.05rem", md: "1.15rem" },
                          }}
                        >
                          {counter.label}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ lineHeight: 1.6, fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                        >
                          {counter.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Slide>
      </Container>
    </Box>
  );
}

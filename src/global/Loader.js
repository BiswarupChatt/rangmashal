import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(145deg, #E3F1F2, #F9F0D3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(50, 191, 194, 0.3) 20%, transparent 70%)",
          animation: "rotateRays 1s linear infinite",
        }}
      ></Box>

      <CircularProgress
        size={50}
        thickness={4}
        sx={{
          zIndex: 1,
          color: "#FFD041",
        }}
      />

      <style>
        {`
              @keyframes rotateRays {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}
      </style>
    </Box>
  );
};

export default Loader;

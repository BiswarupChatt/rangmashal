import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


export default function Button({ label, color = 'secondary', navigateTo = "/", bgColor = 'primary.main', bgColorHover = 'secondary.main', sx }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo)
        window.scrollTo(0, 0)
    };

    return (
        <MuiButton
            variant="contained"
            color={color}
            sx={{
                padding: '10px 20px',
                backgroundColor: bgColor,
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    backgroundColor: bgColorHover,
                    color: 'black',
                },
                borderRadius: '10px',
                fontWeight: 'bold',
                textTransform: 'none',
                ...sx,
            }}
            onClick={handleClick}
        >
            {label}
        </MuiButton>
    );
}

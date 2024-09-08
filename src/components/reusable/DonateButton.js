import React from 'react';
import { Button } from '@mui/material';

// Reusable Custom Button Component
export default function DonateButton({ label, color = 'secondary', sx }) {

    const url = "https://rzp.io/l/6zdTAmHMnG"

    const handleClick = () => {
        window.open(url, "_blank")
    };

    return (
        <Button
            variant="contained"
            color={color}
            sx={{
                padding: '10px 20px',
                backgroundColor: 'primary.main',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    backgroundColor: 'secondary.main',
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
        </Button>
    );
}

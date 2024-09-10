import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Dialog, DialogContent, DialogTitle, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import parse from 'html-react-parser';

const projects = [
    {
        title: 'Blood Donation Camp',
        description: `
            <p><strong>This was our very first project</strong> after Government registration as Rangmashal Foundation. Organized on <strong>21st February, 2021</strong>.</p>
            <p>We provided support and managed the event with our volunteers who helped donate blood to the local community, raising awareness of the <strong>importance of blood donations</strong>.</p>
            <p><i>The event was a huge success, and we received positive feedback from the donors and the community.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
        ],
        date: '21st February, 2021',
    },
    {
        title: 'Amphan Relief Work',
        description: `
            <p><strong>On 2nd June, 2020</strong>, we extended our hands to Kumartuli, which was devastated by the cyclone Amphan.</p>
            <p>Our volunteers helped distribute over <strong>100 relief packages</strong> containing food, medicines, and hygiene kits to the local community.</p>
            <p>Despite the difficult conditions, we managed to reach <strong>every household</strong> in need, ensuring no one was left without assistance.</p>
            <p><i>It was a remarkable display of community solidarity and support.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
        ],
        date: '2nd June, 2020',
    },
    {
        title: 'Yaas Relief Work',
        description: `
            <p><strong>In the aftermath of Cyclone Yaas</strong>, we were on the ground providing relief to the affected areas.</p>
            <p>Our team distributed <strong>food, clothes, and essential supplies</strong> to over 500 people in the Sundarbans area.</p>
            <p><strong>Rangmashal Foundation</strong> also organized a medical camp to address the urgent health needs of the affected communities.</p>
            <p><i>This project demonstrated our commitment to helping those in need during natural disasters.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
        ],
        date: '14th October, 2021',
    },
    {
        title: 'Blanket Distribution',
        description: `
            <p>On <strong>14th February, 2020</strong>, we celebrated Valentine's Day by organizing a <strong>blanket distribution drive</strong> in South Kolkata.</p>
            <p>Our team provided <strong>warm blankets, food packets, and water bottles</strong> to the shelter-less individuals in the area.</p>
            <p><i>The effort ensured warmth and comfort during the cold winter night, showing love and care for those in need.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
        ],
        date: '14th February, 2020',
    },
    {
        title: 'COVID-19 Relief Drive',
        description: `
            <p><strong>During the COVID-19 pandemic</strong>, Rangmashal Foundation launched a relief drive to assist affected families.</p>
            <p>We distributed <strong>oxygen cylinders, medicines, and food supplies</strong> to patients and their families during the lockdown.</p>
            <p><strong>Our team worked tirelessly</strong> to ensure that those in quarantine or under medical care received essential supplies on time.</p>
            <p><i>The initiative helped alleviate the suffering of hundreds of families during the crisis.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
        ],
        date: 'May 2020',
    },
    {
        title: 'Education for All',
        description: `
            <p>In July 2021, we launched our <strong>Education for All</strong> initiative to provide educational resources to underprivileged children.</p>
            <p>We distributed <strong>school supplies</strong> and established several learning centers in rural areas.</p>
            <p><i>This project aims to empower children through education and help them build a brighter future.</i></p>
        `,
        images: [
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
            'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
        ],
        date: 'July 2021',
    },
];




const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

const truncateHtmlText = (html, wordLimit) => {
    const text = stripHtml(html);
    return text.split(' ').slice(0, wordLimit).join(' ') + '...';
};

export default function ProjectCards() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleOpen(project)}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={project.images[0]} // Show only the first image in the card
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {project.date}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }} textAlign='justify'>
                                    {truncateHtmlText(project.description, 15)} {/* Truncate the HTML description */}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog for project details */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                {selectedProject && (
                    <>
                        <DialogTitle>
                            {selectedProject.title}
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>

                        <DialogContent dividers>
                            <Swiper
                                effect={'coverflow'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                loop={true}
                                speed={1500}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                style={{ maxWidth: '100%', height: '250px', marginBottom: '20px' }}
                            >
                                {selectedProject.images.map((image, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={image}
                                            alt={`Slide ${idx + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <Typography variant="body2" color="textSecondary">
                                {selectedProject.date}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" textAlign='justify'>
                                {parse(selectedProject.description)} {/* Parse and render HTML content */}
                            </Typography>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
}

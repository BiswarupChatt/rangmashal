import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import the necessary modules
import "./Header.css";

export default function Header() {
    const sponsors = [
        { id: 1, img: "/images/sponsor1.png" },
        { id: 2, img: "/images/sponsor2.png" },
        { id: 3, img: "/images/sponsor3.png" },
        { id: 4, img: "/images/sponsor4.png" },
        { id: 5, img: "/images/sponsor5.png" },
        { id: 6, img: "/images/sponsor6.png" },
    ];

    const backgroundImages = [
        "/images/background1.png",
        "/images/background2.png"
    ];

    return (
        <div className="header-container">
            {/* Background Carousel */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                speed={1500}
                className="background-swiper"
            >
                {backgroundImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="background-slide"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100vh",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Overlay Content */}
            <div className="overlay">
                <div className="header-content">
                    <div className="logo">
                        <img src="/images/logo.png" alt="Organization Logo" />
                    </div>

                    <h1>Join the fight for a better world</h1>
                    <p>
                        Welcome to Rangmashal Foundation, India’s leading NGO that has been empowering underprivileged children and women across India since 2020.
                    </p>

                    <button className="header-btn">Donate Now</button>
                </div>

                {/* Sponsors Section - Horizontal Scrolling */}
                <div className="sponsors-section">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        speed={1500}
                    >
                        {sponsors.map((sponsor) => (
                            <SwiperSlide key={sponsor.id}>
                                <img
                                    src={sponsor.img}
                                    alt={`Sponsor ${sponsor.id}`}
                                    className="sponsor-logo"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

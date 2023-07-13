import { Box, Typography } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Images = [
    // "/gallery/Comp 1_exported_7616.jpg",

    "/gallery/eligent pink royal blue_exported_12766.webp",
    "/gallery/eligent pink royal blue_exported_57083.webp",
    "/gallery/Forest Green Wedding Invitation_exported_7016.webp",
    "/gallery/Forest Green Wedding Invitation_exported_21300.webp",
    "/gallery/Eligent Orange Wedding Invitation_exported_13850.webp",
    "/gallery/Eligent Orange Wedding Invitation_exported_37866.webp",
    "/gallery/medium purple wedding invitation_exported_13750.webp",
    "/gallery/medium purple wedding invitation_exported_26283.webp",
    // "/gallery/Royal Dark Blue Wedding Invitation_exported_7500.webp",
    // "/gallery/Royal Dark Blue Wedding Invitation_exported_20800.jpg",
    "/gallery/Royal Dark Blue Wedding Invitation_exported_31750.webp",
    // "/gallery/Wedding Invitation trailer_exported_4683.jpg"
];

const Gallery = () => {
    const containerRef = useRef(null);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if (container) {
    //         container.scrollLeft = container.scrollWidth - container.clientWidth;
    //     }
    // }, []);

    const scrollLeft = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({ left: -230, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({ left: 230, behavior: "smooth" });
        }
    };

    return (
        <>
            <hr />
            <Typography sx={{ padding: "10px", fontFamily: "jua" }} variant="h3">
                Gallery
            </Typography>
            <Box sx={{ position: "relative" }}>
                <Box
                    ref={containerRef}
                    sx={{
                        width: "100%",
                        margin: "10px",
                        padding: "10px",
                        display: "flex",
                        gap: "10px",
                        overflowX: "auto", // Enable horizontal scrolling
                        scrollBehavior: "smooth", // Add smooth scrolling effect
                        "::-webkit-scrollbar": {
                            display: "none" // Hide the scrollbar
                        }
                    }}
                >
                    {Images.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                boxShadow: "rgba(255, 255, 0, 0.4) 0px 0px 0px 2px, rgba(255, 255, 0, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                                width: "230px",
                                height: "350px",
                                backgroundColor: "yellow",
                                borderRadius: "5px",
                            }}
                        >
                            <Image
                                style={{ borderRadius: "5px" }}
                                src={image}
                                alt={image}
                                height="350"
                                width="230"
                            />
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                    }}
                >
                    <IconButton onClick={scrollLeft} style={{ backgroundColor: "lightgray", }} >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton onClick={scrollRight} style={{ backgroundColor: "lightgray", }}>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Box >
        </>
    );
};

export default Gallery;

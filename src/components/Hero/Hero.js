"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import TextTransition, { presets } from 'react-text-transition';

const Hero = () => {

    const TEXTS = ['Your Love, Our Motion Artistry', 'Wedding Invitations', 'Anniversary Invitations', 'Birthday Invitations'];

    const [index, setIndex] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Box sx={{
            display: "flex",
            margin: "80px 20px",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: "10px"
        }}>
            <Box sx={{
                overflow: "hidden",
                width: { xs: "100%", md: "70%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: { xs: "none", md: "gray" }
            }}>

                <Typography
                    sx={{
                        textAlign: "center",
                        fontFamily: 'Jua',
                        fontSize: { xs: "40px", md: "100px" }
                    }}
                    variant="h1"
                    color="initial"
                // padding={5}
                >
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </Typography>

            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: "hidden",
                width: { xs: "100%", md: "30%" },


            }
            } >
                {
                    screenWidth >= 400 ? (
                        <Image
                            style={{
                                zIndex: "99",
                                borderRadius: "5px",
                                boxShadow: "rgba(255, 255, 0, 0.25) 0px 54px 55px, rgba(255, 255, 0, 0.12) 0px -12px 30px, rgba(255, 255, 0, 0.12) 0px 4px 6px, rgba(255, 255, 0, 0.17) 0px 12px 13px, rgba(255, 255, 0, 0.09) 0px -3px 5px"
                            }}
                            src="/profile.webp"
                            alt='dp'
                            width="400"
                            height="400"
                        />
                    ) : (
                        <Image
                            style={{
                                zIndex: "99",
                                borderRadius: "5px",
                                boxShadow: "rgba(255, 255, 0, 0.25) 0px 54px 55px, rgba(255, 255, 0, 0.12) 0px -12px 30px, rgba(255, 255, 0, 0.12) 0px 4px 6px, rgba(255, 255, 0, 0.17) 0px 12px 13px, rgba(255, 255, 0, 0.09) 0px -3px 5px"
                            }}
                            src="/profile.webp"
                            alt='dp'
                            width="250"
                            height="250"
                        />
                    )
                }
            </Box>
        </Box >
    )
}

export default Hero
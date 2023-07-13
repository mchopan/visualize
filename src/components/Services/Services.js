import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Images = [
    {
        image: "/services/services (3).jpg",
        name: "Wedding Invitation",

    },
    {
        image: "/services/services (2).jpg",
        name: "Anniversary Invitation",
    },
    {
        image: "/services/services (1).jpg",
        name: "Birthday Invitation",
    },
];

const Services = () => {

    return (
        <>
            <hr />
            <Typography sx={{ padding: "10px", fontFamily: "jua" }} variant="h3">
                Services
            </Typography>
            <Box sx={{ position: "relative" }}>
                <Box
                    sx={{
                        width: "100%",
                        padding: "10px",
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {Images.map((image, index) => (
                        <Card key={index} sx={{
                            width: "300px",
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid yellow"
                        }}>
                            <CardActionArea>
                                <CardMedia component="img"
                                    height="200"
                                    image={image.image}
                                    alt={image.name}
                                />
                                <CardContent sx={{ fontFamily: "jua" }}>
                                    <Typography sx={{ fontFamily: "jua" }} gutterBottom variant="h5" component="div">
                                        {image.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box >
        </>
    );
};

export default Services;

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Images = [
    {
        image: "/testimonial/Testimonial (1).jpg",
        name: "Mohamad Ali",
        message: "I am absolutely thrilled with the beautiful wedding invitation animated video that was created for our special day. The attention to detail and creativity that went into the design surpassed our expectations"

    },
    {
        image: "/testimonial/Testimonial (2).jpg",
        name: "Summan",
        message: "Words cannot express how delighted I am with the stunning wedding invitation animated video created for our special day. It truly surpassed all my expectations and left me in awe of the talent and creativity behind it"
    },
    {
        image: "/testimonial/Testimonial (3).jpg",
        name: "Zainab",
        message: "I am absolutely thrilled with the exquisite wedding invitation animated video that was created for our special day. It is a true masterpiece that beautifully captured the essence of our love story."
    },
];

const Testimonials = () => {

    return (
        <>
            <hr />
            <Typography sx={{ padding: "10px", fontFamily: "jua" }} variant="h3">
                Testimonial
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
                                    <Typography sx={{ fontFamily: "jua" }} variant="body2">
                                        {image.message}
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

export default Testimonials;

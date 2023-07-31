import { Typography, Box } from '@mui/material'
import React from 'react'

const page = () => {
    return (

        <Box sx={{ margin: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{
                border: "1px solid yellow",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <Typography sx={{ padding: "10px", fontFamily: "jua", fontSize: { xs: "30px", md: "50px" } }} variant="h3">
                    Welcome to Visualize Me Design
                </Typography>
                <Typography variant="h6" >
                    At Visualize Me Design, we specialize in creating exquisite and personalized wedding invitations that capture the essence of your special day. We understand that your wedding is a momentous occasion, and we are dedicated to providing you with beautifully designed invitations that reflect your unique style and love story.
                </Typography>
            </Box>
            <Box sx={{
                border: "1px solid yellow",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <Typography sx={{ padding: "10px", fontFamily: "jua", fontSize: { xs: "30px", md: "50px" } }} variant="h3">
                    Our Journey
                </Typography>
                <Typography variant="h6" >
                    Our business began in 2020 amidst the challenges posed by the COVID-19 pandemic. As a freelance designer, I faced difficulties in connecting with people and showcasing my creativity in traditional ways. It was during this time of isolation that the idea of digital wedding and event invitations was born.
                    <br />
                    Recognizing the need for innovative solutions that would allow couples to celebrate their love while adhering to social distancing guidelines, I set out to create a platform that offered unique, customizable, and convenient options for creating stunning invitations.
                </Typography>
            </Box>

            <Box sx={{
                border: "1px solid yellow",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <Typography sx={{ padding: "10px", fontFamily: "jua", fontSize: { xs: "30px", md: "50px" } }} variant="h3">
                    A New Approach
                </Typography>
                <Typography variant="h6" >
                    By harnessing the power of digital technology, we transformed the traditional concept of wedding invitations. We embraced the digital medium, leveraging its versatility to offer a wide range of design possibilities. Our vision was to bring together the elegance and charm of traditional wedding invitations with the convenience and accessibility of the digital world.
                </Typography>
            </Box>

            <Box sx={{
                border: "1px solid yellow",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <Typography sx={{ padding: "10px", fontFamily: "jua", fontSize: { xs: "30px", md: "50px" } }} variant="h3">
                    Craftsmanship and Creativity
                </Typography>
                <Typography variant="h6" >
                    At Visualize Me Design, we are passionate about design and dedicated to delivering exceptional craftsmanship. Every invitation is a product of careful thought, meticulous design, and attention to detail. From the selection of fonts and colors to the arrangement of elements, we strive to create invitations that evoke emotions and reflect the unique essence of each couple's love story.
                </Typography>
            </Box>

            <Box sx={{
                border: "1px solid yellow",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <Typography sx={{ padding: "10px", fontFamily: "jua", fontSize: { xs: "30px", md: "50px" } }} variant="h3">
                    Our Commitment to You
                </Typography>
                <Typography variant="h6" >
                    We understand that your wedding day is one of the most significant events in your life, and we want to be part of making it truly special. With our personalized service, we work closely with you to understand your vision, preferences, and wedding theme. Our goal is to ensure that every invitation we create becomes a cherished keepsake that captures the anticipation and excitement surrounding your celebration.
                </Typography>
            </Box>
        </Box>
    )
}

export default page
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const theme = createTheme({
    typography: {
        fontFamily: 'jua, sans-serif', // Set the desired font family
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // Set the background color of the TextField to black
                    '& .MuiFilledInput-root': {
                        boxShadow: '0 0 5px yellow', // Set the yellow shadow color for the TextField
                    },
                    '& .MuiInputLabel-root': {
                        color: '#FFFFFF', // Set the label color to white
                    },
                    '& .MuiInputBase-input': {
                        color: '#FFFFFF', // Set the input text color to white
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#FFFFFF', // Set the text color of the Button to white
            contrastText: '#000000', // Set the background color of the Button to black
        },
    },
});


const Contact = () => {
    return (
        <>
            <hr />
            <Typography sx={{ padding: "10px", fontFamily: "jua" }} variant="h3">
                Contact
            </Typography>
            <Box sx={{
                display: { xs: "block", md: "flex" },
            }}>
                <ThemeProvider theme={theme}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: { xs: "100%", md: "50%" },
                        padding: "50px",
                        gap: "20px"
                    }}>
                        <TextField
                            sx={{ fontFamily: "jua" }}
                            id="name"
                            label="Name"
                            placeholder="Manzoor Chopan"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <TextField
                            sx={{ fontFamily: "jua" }}
                            id="email"
                            label="Email"
                            placeholder="you@gmail.com"
                            multiline
                            variant="filled"
                        />
                        <TextField
                            sx={{ fontFamily: "jua" }}
                            id=""
                            label="Message"
                            placeholder="type your message..."
                            multiline
                            rows={4}
                            variant="filled"
                        />
                        <Button sx={{ fontFamily: "jua" }} variant="contained">Send</Button>
                    </Box>
                </ThemeProvider>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", md: "50%" },
                }}>
                    <Card sx={{
                        backgroundColor: "black",
                        height: "350px",
                        width: "400px"
                    }}>
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: '20px',
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Typography sx={{
                                fontFamily: "jua", color: "white", width: "100%", border: "1px solid yellow",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px",
                                cursor: "pointer",
                                padding: "10px"
                            }} variant="h5">
                                <InstagramIcon fontSize="large" />
                                @visualize_me_design
                            </Typography>

                            <Typography sx={{
                                fontFamily: "jua", color: "white", width: "100%", border: "1px solid yellow",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px",
                                cursor: "pointer",
                                padding: "10px"
                            }} variant="h5">
                                <PinterestIcon fontSize="large" />
                                @visualizemedesign
                            </Typography>

                            <Typography sx={{
                                fontFamily: "jua", color: "white", width: "100%", border: "1px solid yellow",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px",
                                cursor: "pointer",
                                padding: "10px"
                            }} variant="h5">
                                <WhatsAppIcon fontSize="large" />
                                +91 9999999999
                            </Typography>
                        </CardContent>

                    </Card>
                </Box>
            </Box>
        </>
    );
};

export default Contact;

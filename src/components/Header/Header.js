import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
const Header = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "#fccb06",
        }}>
            <Toolbar variant="dense" sx={{
                display: "flex",
                justifyContent: "space-between"
            }} >
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                }}>

                    <Typography sx={{ fontFamily: "jua", fontSize: "25px" }} variant="h6" color="inherit" component="div">
                        Visualize Me Design
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
                    </IconButton>
                </Box>
                <Box sx={{
                    display: { xs: "none", md: "flex" },
                    gap: "20px"
                }}>
                    <Typography sx={{ fontFamily: "jua" }} variant="h6" color="inherit" component="div">
                        Home
                    </Typography>
                    <Typography sx={{ fontFamily: "jua" }} variant="h6" color="inherit" component="div">
                        About
                    </Typography>
                    <Typography sx={{ fontFamily: "jua" }} variant="h6" color="inherit" component="div">
                        Contact
                    </Typography>
                    <Typography sx={{ fontFamily: "jua" }} variant="h6" color="inherit" component="div">
                        Services
                    </Typography>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Header
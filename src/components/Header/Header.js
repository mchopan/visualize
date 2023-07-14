"use client"
import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation'
const Header = () => {

    const router = useRouter()

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

                    <Typography onClick={() => router.push('/')} sx={{ fontFamily: "jua", fontSize: "25px", cursor: "pointer" }} variant="h6" color="inherit" component="div">
                        Visualize Me Design
                    </Typography>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Typography onClick={() => router.push('/')} sx={{ fontFamily: "jua", color: "white", cursor: "pointer" }} variant="h6" color="inherit" component="div">
                            Home
                        </Typography>
                        <Typography onClick={() => router.push('/About')} sx={{ fontFamily: "jua", color: "white", cursor: "pointer" }} variant="h6" component="div">
                            About
                        </Typography>
                    </Box>
                </Box>
                {/* <Box sx={{
                    display: { xs: "none", md: "flex" },
                    gap: "20px"
                }}>
                    <Button onClick={() => router.push('/')} variant="text">
                        <Typography sx={{ fontFamily: "jua", color: "white" }} variant="h6" color="inherit" component="div">
                            Home
                        </Typography>
                    </Button>
                    <Button onClick={() => router.push('/About')} variant="text">
                        <Typography sx={{ fontFamily: "jua", color: "white" }} variant="h6" component="div">
                            About
                        </Typography>
                    </Button>
                </Box> */}
            </Toolbar>

        </AppBar >
    )
}

export default Header
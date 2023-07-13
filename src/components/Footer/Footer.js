import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box>
            <hr />
            <Typography sx={{ fontFamily: "jua", textAlign: "center" }} variant="subtitle1" >
                Copyright (c) <a href="https://mchopan.github.io/portfolio/" >Manzoor Chopan {currentYear}</a>
            </Typography>
        </Box>
    )
}

export default Footer
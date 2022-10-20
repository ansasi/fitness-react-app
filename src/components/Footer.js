import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: "center" }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: "300px", height: "126px" }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: "14px", xs: "10px" } }} mt="20px" textAlign="center" pb="10px">
      Made by Ansasi
    </Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: "14px", xs: "10px" } }} mt="0px" textAlign="center" pb="40px">
      Copyright © 2022
    </Typography>
  </Box>
);

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "16px", xs: "10px" },
      justifyContent: "none",
      display: "flex",
      alignItems: "center",
    }}
    px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: "86px", height: "86px", margin: "0px 20px" }} />
    </Link>
    <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;

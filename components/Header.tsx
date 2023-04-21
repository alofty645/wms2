"use client";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title }) => {
  const theme = useTheme();
  return (
    <div className="text-white m-4 text-4xl ">{title}</div>

    // <Box mb="30px">
    //   <Typography
    //     variant="h2"
    //     color="#fff"
    //     fontWeight="bold"
    //     sx={{ m: "0 0 5px 0" }}
    //   >
    //     {title}
    //   </Typography>
    // </Box>
  );
};

export default Header;

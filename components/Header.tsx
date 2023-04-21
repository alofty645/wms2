"use client";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title }) => {
  const theme = useTheme();
  return <div className="font-bold text-white mb-5 text-4xl ">{title}</div>;
};

export default Header;

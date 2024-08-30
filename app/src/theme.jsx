"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    color: "orange",
  },
  secondary: {
    light: "rgb(89, 114, 254)",
    dark: "rgb(33, 55, 177)",
    contrastText: "#fff",
  },
});

export default theme;

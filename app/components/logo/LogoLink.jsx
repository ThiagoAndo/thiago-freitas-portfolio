"use client";
import { Tooltip, Zoom } from "@mui/material";
import Link from "next/link";
import ThisTooltip from "../ui/tooltip";
const tooltipProps = {
  tooltip: {
    sx: {
      fontSize: "1rem",
      color: "#ffff",
      backgroundColor: "#008aff",
    },
  },
  arrow: {
    sx: {
      color: "#008aff",
    },
  },
};

export const LogoLink = () => {
  return (
    <ThisTooltip tle={"thiago"}>
      <Link
        href={"#"}
        style={{
          background: "blue",
          position: "absolute",
          width: "50px",
          height: "50px",
          top: "100px",
          left: "500px",
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
          borderRadius: "50%",
          zIndex: "2000",
        }}
      >
        <spam className="font-rock">T</spam>
      </Link>
    </ThisTooltip>
  );
};

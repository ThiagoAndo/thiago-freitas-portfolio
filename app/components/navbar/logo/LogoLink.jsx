
import React from "react";
// import { Link, Tooltip, Zoom } from "@material-ui/core";
import Link from "next/link";
import { Logo } from "./Logo";



export const LogoLink = () => {

  return (
  
      <Link
        variant="h6"
        href={'#'}
        underline="none"
        color="inherit"
        noWrap
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          top: "10px",
          left: "10px",
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       <p className="font-roboto">T</p>
      </Link>
    
  );
};

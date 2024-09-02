"use client";
import { Tooltip, Zoom } from "@mui/material";

export default function ThisTooltip({
  children,
  ft = "1rem",
  cl = "#ffff",
  bg = "#008aff",
  plt = "right",
  bdCol="#662cca",
  tle,
}) {
  const tooltipProps = {
    tooltip: {
      sx: {
        fontSize: ft,
        color: cl,
        backgroundColor: bg,
        border: `solid 1px ${bdCol}`,
        fontFamily: "Roboto",
      },
    },
    arrow: {
      sx: {
        color: bg,
      },
    },
  };

  return (
    <Tooltip
      title={tle}
      placement={plt}
      arrow
      slotProps={tooltipProps}
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 300 }}
    >
      {children}
    </Tooltip>
  );
}

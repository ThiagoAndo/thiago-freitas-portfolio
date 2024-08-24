// @flow strict

"use client";
import useMediaScreen from "@/app/hooks/useMediaScreen";

export default function Container({
  children,
  tailwind,
  minVh = "70vh",
  maxVh = "100vh",
}) {
  let size = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );

  console.log("size");
  console.log(size === true ? "0vh" : "20vh");

  return (
    <>
      <section
        className={tailwind}
        style={{ height: size === true ? minVh : maxVh }}
      >
        {children}
      </section>
    </>
  );
}

import { useState, useEffect } from "react";
export default function useDalay(time) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let timer;
    if (time) {
      timer = setTimeout(() => {
        setDisplay(true);
      }, time);
    }

    return () => clearTimeout(timer);
  }, [time]);

  return display;
}

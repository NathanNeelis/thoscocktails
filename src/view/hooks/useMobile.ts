import { useState, useEffect } from "react";
import createDebounce from "@src/view/utils/debounce";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const resizeDebounce = createDebounce(200);

  useEffect(() => {
    const setIsMobileFromUi = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    const handleResize = () => {
      resizeDebounce(() => {
        setIsMobileFromUi();
      });
    };

    setIsMobileFromUi();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

import { useEffect, useState } from "react";

import { MOBILE_WIDTH } from "shared/consts";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_WIDTH);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

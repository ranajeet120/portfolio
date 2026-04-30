import { useEffect, useState } from "react";

const useResponsive = () => {
  const checkResponsive = () => {
    const width = window.innerWidth;
    return width <= 720; // mobile + tablet
  };

  const [isResponsive, setIsResponsive] = useState(checkResponsive());

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(checkResponsive());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isResponsive;
};

export default useResponsive;

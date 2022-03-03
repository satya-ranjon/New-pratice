import { useEffect, useState } from "react";

export default function LayoutComponentOne() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 768);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  return (
    <>
      <h1>You are browsing on {onSmallScreen ? "Small" : "large"} devise</h1>
    </>
  );
}

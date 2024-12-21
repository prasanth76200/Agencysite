import React, { useEffect, useState } from "react";
// import HeroMarquee from "../components/helper/HeroMarquee";
import Navbar from "../components/homePage/Navbar";

// import { Analytics } from "@vercel/analytics/react"
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure smooth entry animations
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-white">
      {/* <Analytics/> */}
      {/* Navbar and Main Content */}
      <div
        className={`container p-0  relative w-full min-h-screen  lg:max-w-[70rem] xl:max-w-[80rem] 2xl:max-w-[112rem] fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <Navbar />
        <main className="pb-[2000px]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

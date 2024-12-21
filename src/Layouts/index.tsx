import React, { useEffect, useState } from "react";
import HeroMarquee from "../components/helper/HeroMarquee";
import Navbar from "../components/homePage/Navbar";
import StorySection from "../components/homePage/Story-Section";

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
      {/* Navbar and Main Content */}
      <div
        className={`container relative w-full min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[98rem] fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <Navbar />
        <main>{children}</main>
      </div>

      {/* Hero Marquee Section */}
      <HeroMarquee />

      {/* Story Section */}
      <div
        className={`container relative w-full min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[98rem] fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <StorySection />
      </div>
    </div>
  );
};

export default Layout;

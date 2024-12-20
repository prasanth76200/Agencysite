import  { useEffect, useState } from "react";

// import HeroMarquee from "./components/helper/HeroMarquee";
import HeroSection from "./components/homePage/Hero-Section";
import Layout from "./Layouts";

import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile or tablet
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768; // You can adjust the 768px value for tablets
      setIsMobile(mobile);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  return (
    <Layout>
      {/* Conditionally render AnimatedCursor based on the screen size */}
      {!isMobile && (
        <AnimatedCursor
          innerSize={30}
          outerSize={60}
          color="35, 35, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          outerStyle={{
            color: "35, 35, 255",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
      {/* <CursorAnime/> */}
      <HeroSection />
 

      {/* <VelocityText/> */}
    </Layout>
  );
}

export default App;

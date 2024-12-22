import  { useEffect, useState } from "react";

// import HeroMarquee from "./components/helper/HeroMarquee";
import HeroSection from "./components/homePage/Hero-Section";
import Layout from "./Layouts";

// import AnimatedCursor from "react-animated-cursor";
import HeroMarquee from "./components/helper/HeroMarquee";
import StorySection from "./components/homePage/Story-Section";
import Services from "./components/homePage/Services";
import RainbowCursor from "./components/helper/CursorAnime";
import Footer from "./components/homePage/Footer";
import Faqs from "./components/helper/FAQ";
import { Helmet } from "react-helmet-async";
// import DarkModeToggle from "./components/helper/DarkModeButton";

// import ChatBot from "./components/helper/ChatBot";
// import StorySection from "./components/homePage/Story-Section";

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
    <>
     <Helmet>
        <title>Meta Brainz - Your Development Partner</title>
        <meta name="description" content="Meta Brainz specializes in top-notch web and app development services tailored to your needs." />
        <meta property="og:title" content="Meta Brainz - Your Development Partner" />
        <meta property="og:description" content="Meta Brainz specializes in top-notch web and app development services tailored to your needs." />
        <meta property="og:image" content="s" />
        <meta property="og:url" content="https://agencysite-alpha.vercel.app/" />
        <link rel="canonical" href="https://agencysite-alpha.vercel.app/" />
      </Helmet>
    <Layout>
      {/* Conditionally render AnimatedCursor based on the screen size */}
      {!isMobile && (
        <RainbowCursor/>
      )}
    
      <HeroSection />
      <HeroMarquee/>
      <StorySection />
      <Services/>
      <Faqs/>
      <Footer/>
    
    </Layout>
    </>
  );
}

export default App;

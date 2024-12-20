// import React from "react";
// import CursorAnime from "./components/helper/CursorAnime";
import HeroMarquee from "./components/helper/HeroMarquee";
import HeroSection from "./components/homePage/Hero-Section";
import Layout from "./Layouts";  // Ensure Layout expects children

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <Layout>
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
      {/* <CursorAnime/> */}
      <HeroSection />
      <HeroMarquee />

      {/* <VelocityText/> */}
    </Layout>
  );
}

export default App;

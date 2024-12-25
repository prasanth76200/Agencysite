import { useState, useEffect } from "react";
import robot from '../../../../public/assets/technical-support.png';
import chart from '../../../../public/assets/Chart_perspective_matte_s 1.svg';
import webiste from '../../../../public/assets/Icon04-3.svg';
import seo from '../../../../public/assets/Icon10-1.svg';
import mobile from '../../../../public/assets/Icon03-3.svg';
import refactor from '../../../../public/assets/tekno.svg';

import CardDesign from "../../helper/CardDesign";

const Services = () => {
  const [loadingCustomSoftwares, setLoadingCustomSoftwares] = useState(true);
  const [loadingAIChatBots, setLoadingAIChatBots] = useState(true);
  const [loadingMobileApps, setLoadingMobileApps] = useState(true);
  const [loadingSEO, setLoadingSEO] = useState(true);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const [loadingWebsiteRefactoring, setLoadingWebsiteRefactoring] = useState(true);

  // Use useEffect to set the loader to false after 20 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingCustomSoftwares(false);
      setLoadingAIChatBots(false);
      setLoadingMobileApps(false);
      setLoadingSEO(false);
      setLoadingPortfolio(false);
      setLoadingWebsiteRefactoring(false);
    }, 5000); // 20 seconds

    // Clear timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // Handle image load events
  const handleImageLoad = (setLoadingFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoadingFunction(false); // Immediately hide loader after image loads
  };

  return (
    <div>
      <div className="mt-[80px] lg:mt-[100px] mx-auto my-auto">
        <div className="flex justify-center text-black">
          <div
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0, 0.10) 2px, transparent 0)",
              backgroundSize: "30px 30px",
              backgroundPosition: "-5px -5px",
            }}
            className="flex items-center mt-4 dark:bg-backgroundDark dark:text-textDark bg-white shadow-lg shadow-primary text-black px-4 rounded-lg font-sans font-bold text-[40px] md:text-[56px] lg:text-[40px] xl:text-[50px] xl:whitespace-nowrap"
          >
            <h1>Our Game-Changing Solutions</h1>
            <div>
              <img src={chart} alt="" className="w-[300px] lg:w-[80px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:mx-20 mt-10 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center relative">
          <CardDesign
            headLine={"Custom Softwares"}
            words={
              "Get software made just for your business. Save time, work smarter, and grow faster with solutions designed to fit your needs perfectly."
            }
            img={true}
            imgSrc={webiste}
            width={"180px"}
            loading={loadingCustomSoftwares}
            onLoad={() => handleImageLoad(setLoadingCustomSoftwares)}
          />

          <CardDesign
            headLine={"AI-Chat Bots"}
            words={
              "Engage your customers 24/7 with smart AI chatbots. Answer questions, provide support, and make conversations easy and efficient."
            }
            img={true}
            imgSrc={robot}
            width={"100px"}
            loading={loadingAIChatBots}
            onLoad={() => handleImageLoad(setLoadingAIChatBots)}
          />

          <CardDesign
            headLine={"Mobile Apps"}
            words={
              "Offer top-quality mobile app development services that help your business expand. Reach your customers anytime, anywhere, with user-friendly apps designed to enhance their experience and boost your brand's success."
            }
            img={true}
            imgSrc={mobile}
            width={"180px"}
            loading={loadingMobileApps}
            onLoad={() => handleImageLoad(setLoadingMobileApps)}
          />

          <CardDesign
            headLine={"SEO"}
            words={
              "Boost your website's visibility and attract more customers with expert SEO services that deliver real results."
            }
            img={true}
            imgSrc={seo}
            width={"180px"}
            loading={loadingSEO}
            onLoad={() => handleImageLoad(setLoadingSEO)}
          />

          <CardDesign
            headLine={"Portfolio For Business"}
            words={
              "Showcase your work and achievements with a stunning portfolio that highlights your brand and builds trust with clients."
            }
            img={true}
            imgSrc={webiste}
            width={"180px"}
            loading={loadingPortfolio}
            onLoad={() => handleImageLoad(setLoadingPortfolio)}
          />

          <CardDesign
            headLine={"Website Refactoring"}
            words={
              "Improve your website's speed, functionality, and design with professional refactoring that enhances user experience and performance."
            }
            img={true}
            imgSrc={refactor}
            width={"140px"}
            loading={loadingWebsiteRefactoring}
            onLoad={() => handleImageLoad(setLoadingWebsiteRefactoring)}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

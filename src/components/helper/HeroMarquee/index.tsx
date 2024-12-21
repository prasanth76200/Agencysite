  
import Marquee from "react-fast-marquee";
  
const HeroMarquee = () => {
  return (
    <div>
       {/* Marquee Section with SEO, Website Development, and Digital Marketing */}
<div className="md:mt-[60px] lg:mt-[-200px] xl:mt-[60px]  ml-[0px] ">
{/* Marquee 1 */}
<div className="bg-primary py-2 rounded-sm my-2 md:my-4 relative -rotate-3 cursor-pointer">
  <Marquee speed={100} pauseOnHover={true} autoFill={true}>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
    @AI-Powered Solutions
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @SEO
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Website Development
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
    @Website Performance Optimization
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Mobile Apps
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Company Portfolio Website
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @E-commerce Website
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Website Refactoring
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Chat Bot Integration
    </span>
  </Marquee>
</div>

{/* Marquee 2 (Opposite direction) */}
<div className="bg-secondary mt-[-10px] py-2 rounded-sm my-4 relative -rotate-3">
  <Marquee speed={100} pauseOnHover={true} autoFill={true} direction="right">
  &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
    @AI-Powered Solutions
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @SEO
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Website Development
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
    @Website Performance Optimization
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Mobile Apps
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Company Portfolio Website
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @E-commerce Website
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Website Refactoring
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="animate-marquee text-[40px] whitespace-nowrap text-center font-bold text-white">
      @Chat Bot Integration
    </span>
  </Marquee>
</div>
</div>
    </div>
  )
}

export default HeroMarquee



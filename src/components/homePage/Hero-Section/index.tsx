
    import loveArrow from "../../../../public/assets/love-arrow.svg";
    import downLeft from "../../../../public/assets/down-left.png";
import HeroTestimonial from "../../helper/HeroTestimonial";
import star from "../../../../public/assets/Frame 3.png";
import customberPic from "../../../../public/assets/customer-satisfaction.png";
    const HeroSection = () => {
      return (
        <>
          <div className="">
            {/* Hero Section Title */}
            <div className="grid place-content-center py-10 md:px-4 md:py-14 lg:py-4 xl:py-12  text-yellow-50">
              <h1 className="max-w-5xl text-center text-[34px] whitespace-nowrap md:text-[60px] lg:text-[64px] xl:text-[77px] font-extrabold text-[#252329] leading-snug">We Make It Happen!</h1>
              <h1 className="max-w-5xl text-center text-[29px]  md:text-[60px] lg:text-[64px]  xl:text-[77px] font-extrabold text-[#252329] leading-snug font-sans">
              Take Your Business Online and <span className="text-[#e0142f] whitespace-nowrap block text-[34px] md:text-[60px] lg:text-[65px]  xl:text-[77px] font-sans">Grow Beyond Limits.</span>
              </h1>
            </div>

            <div className="hidden md:block absolute md:top-[300px] md:left-[-10px] lg:top-[240px] lg:left-[60px] xl:top-[280px] xl:left-[100px] rotate-6 opacity-35 ">
      <img loading="lazy" src={loveArrow} alt="" width={"130px"} />
    </div>
    <div className="hidden md:block xl:-rotate-45 absolute md:top-[250px] md:left-[600px] lg:top-[200px] lg:left-[1077px] lg:-rotate-45  xl:right-[190px]  xl:top-[260px] xl:left-[1430px] opacity-35 ">
      <img loading="lazy" src={downLeft} alt="" width={"180px"} className="lg:w-[150px] xl:w-[180px]" />
    </div>

     {/* Call-to-Action Buttons */}
<div className="flex flex-col xl:flex-row xl:justify-center items-center gap-4 xl:mb-[50px] lg:mt-0 lg:mb-0">
  <div className="flex items-center justify-center">
    <button className="px-6 py-2 font-medium rounded-3xl bg-indigo-500 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      Contact Us
    </button>
  </div>
  <span className="text-black hidden xl:block ml-[-20px] mr-[-21px]">---------</span>
  <div className="flex items-center justify-center">
    <button className="text-black border font-medium bg-green-200 border-black rounded-2xl px-3 py-1 hover:bg-green-300 font-mono">
      Download Brochure
    </button>
  </div>
</div>

     
   


    <div className="md:flex md:justify-between lg:-mt-12 md:mt-28 md:gap-11 md:-ml-5 lg:ml-0 ">
      <div className="my-[160px] md:my-0 flex justify-center ">
         <HeroTestimonial reviewsCount="15+"
            words="&nbsp;reviews on&nbsp;"
            img={true}
            imgSrc={star}
            />
      </div>
      <div className="flex justify-center">
      <HeroTestimonial reviewsCount="10+"
            words="&nbsp;Happy Clients&nbsp;"
            img={true}
            imgSrc={customberPic}
            width="36px"
            
            />
      </div>
         
        
      </div>


          </div>
        </>
      );
    };

    export default HeroSection;

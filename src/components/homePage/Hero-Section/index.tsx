
import loveArrow from "../../../../public/assets/love-arrow.svg";
import downLeft from "../../../../public/assets/down-left.png";
import HeroTestimonial from "../../helper/HeroTestimonial";
import star from "../../../../public/assets/Frame 3.png";
import customberPic from "../../../../public/assets/customer-satisfaction.png";
import ConfettiFromBottom from "../../helper/ConfettiFromBottom";
    const HeroSection = () => {
      return (
        <>
          <div className="">
            {/* Hero Section Title */}
            <div className="  grid place-content-center py-10 md:px-4 md:py-14 lg:py-4 xl:py-12   text-yellow-50">
              <h1 className="max-w-5xl text-center text-[34px] whitespace-nowrap md:text-[60px] lg:text-[54px] xl:text-[67px]  2xl:text-[77px] font-extrabold text-[#252329] leading-snug">We Make It Happen!</h1>
              <h1 className="max-w-5xl text-center text-[34px]  md:text-[60px] lg:text-[64px]  xl:text-[67px]  2xl:text-[77px] font-extrabold text-[#252329] leading-snug font-sans">
              Take Your Business Online  <span className="text-[#e0142f] whitespace-nowrap block text-[34px] md:text-[60px] lg:text-[65px] xl:text-[67px]  2xl:text-[77px] font-sans">Grow Beyond Limits.</span>
              </h1>
            </div>

            <div className="hidden md:block absolute md:top-[300px] md:left-[-10px]  xl:top-[280px] xl:left-[70px] 2xl:top-[280px] 2xl:left-[100px] rotate-6 opacity-35 ">
      <img loading="lazy" src={loveArrow} alt="" width={"130px"} />
    </div>
    <div className="hidden md:block lg:block absolute md:top-[250px] md:right-[00px] lg:-rotate-45  xl:top-[220px] xl:right-[10px] xl:-rotate-12 2xl:top-[220px] 2xl:right-[70px]  opacity-35 ">
      <img loading="lazy" src={downLeft} alt="" width={"180px"} className=" xl:w-[170px]" />
    </div>

     {/* Call-to-Action Buttons */}
<div className="flex flex-col xl:flex-row xl:justify-center items-center gap-4 xl:mb-[50px] lg:mt-0 lg:mb-0">
  <div className="flex items-center justify-center">
    <button
       onClick={() => window.open('https://forms.gle/riNyG9Pb43MLEmxb7', '_blank')}
     className="px-6 py-2 font-medium rounded-3xl bg-indigo-500 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      Contact Us
    </button>
    {/* <a
  href="https://forms.gle/riNyG9Pb43MLEmxb7"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 font-medium rounded-3xl bg-indigo-500 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
>
  Contact Us
</a> */}
  </div>
  <span className="text-black hidden xl:block ml-[-15px] mr-[-21px]">---------</span>
  <div className="flex items-center justify-center">
    <button className="text-black border font-medium bg-green-200 border-black rounded-2xl px-3 py-1 hover:bg-green-300 font-mono">
      Download Brochure
    </button>
  </div>
</div>
<div className="">
<ConfettiFromBottom/>
</div>
     
   
{/* <div className=" absolute top-[290px]  flex justify-center ">
         <HeroTestimonial reviewsCount="15+"
            words="&nbsp;reviews on&nbsp;"
            img={true}
            imgSrc={star}
               width="86px"
            />
      </div> */}

    <div className="md:flex md:justify-between lg:-mt-12 md:mt-28 md:gap-11 md:px-8 lg:ml-0 ">
      <div className="mt-[160px] md:mt-0 flex justify-center ">
         <HeroTestimonial reviewsCount="15+"
            words="&nbsp;reviews on&nbsp;"
            img={true}
            imgSrc={star}
               width="126px"
            />
      </div>
      <div className="mt-[90px] md:mt-0  flex justify-center">
      <HeroTestimonial reviewsCount="10+"
            words="&nbsp;Happy Clients&nbsp;"
            img={true}
            imgSrc={customberPic}
            width="30px"
            
            />
      </div>
         
        
      </div>


          </div>
        </>
      );
    };

    export default HeroSection;

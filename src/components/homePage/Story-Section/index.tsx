// import up from '../../../../public/assets/trend(1).png';
import sad from '../../../../public/assets/rising-cost-living-concern-concept.jpg';
import happy from '../../../../public/assets/portrait-man-shopping-buying-consumer-goods.jpg';
import rightChain from '../../../../public/assets/chains.png';
const StorySection = () => {
    return (
        <div  className="mt-[80px] lg:mt-[100px] mx-auto my-auto">
            <div  className="flex justify-center">
                <h1   style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0, 0.10) 2px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundPosition: "-5px -5px",
        }} className="text-black bg-white px-4 rounded-lg font-sans shadow-lg shadow-primary font-bold text-[50px] md:text-[56px] lg:text-[40px] xl:text-[50px] xl:whitespace-nowrap ">
                    <span className="text-secondary font-bold  text-[50px] md:text-[60px] lg:text-[70px] xl:text-[70px]">A </span> 
                    Simple Story - Makes your Business
                    <span className="text-[#FF000D] font-sans font-bold  text-[50px] md:text-[56px] lg:text-[70px] xl:text-[70px]"> 100x</span>
                     </h1>
                     &nbsp;     
                   </div> 
                   <div className=" hidden md:block absolute md:left-[500px] lg:left-[500px]  xl:left-[200px]  2xl:left-[500px] -z-50">
                    <img src={rightChain} alt="" className='w-[120px] rotate-45 opacity-70' />
                   </div>
                   <div className="hidden md:block absolute md:right-[500px] lg:right-[500px] xl:right-[200px] 2xl:right-[500px] -z-50">
                    <img src={rightChain} alt="" className='w-[120px] rotate-45 opacity-70 ' />
                   </div>
                  
      <div className="mt-[100px] flex justify-center items-center">
        <div className="text-black bg-white px-5 py-5 rounded-lg shadow-2xl shadow-secondary grid grid-cols-1 sm:grid-cols-2 gap-4 w-full xl:max-w-6xl  2xl:max-w-7xl"> 
          <div className="flex justify-center items-center rounded-lg font-sans text-[20px] md:text-[23px] xl:text-[30px] py-2">
            <p className=''> <span className='bg-[#FF000D] py-1 rounded-md px-2 text-white'>Vishal</span> runs a small business that he’s been doing for years. He has loyal customers who visit 
                regularly and loves the personal connections he’s built. But there's a problem—his business only reaches 
                the people who walk through his door. He can't reach new customers who are 
                outside his area, and despite his hard work, he finds it <span className="bg-[#FFFF00] px-3 ">hard to grow</span> past a certain point
                <span className='flex justify-end font-Caveat'>Ps.Very Sad :(</span>
                </p>
               
          </div>
          <div className="flex justify-center items-center  ">
            <img loading='lazy' src={sad} alt="" className='rounded-r-lg' />
          </div>
          <div className="flex justify-center items-center mt-[90px]  ">
            <img  src={happy} alt="" className='rounded-l-lg' />
          </div>
          <div className="flex justify-center items-center rounded-lg font-sans text-[20px] md:text-[23px]  xl:text-[30px] mt-[20px]  md:mt-[90px]  ">
            <p className='p3'>Then, there's Aryan. <span className='bg-primary py-1 rounded-md px-2 text-white'>Aryan</span> also has a business, but he made a decision to take it online. 
                Now, not only does he have local customers, but he also reaches people from all over, even from 
                different cities and countries. <span></span>His business is growing fast, and <span className='bg-[#39FF14] px-3 text-black rounded-sm  '>he’s getting new opportunities every day</span>.
                <span className='flex justify-end font-Caveat'>Ps.Happy endings :)</span>
                </p>
               
          </div>
          
        </div>
      </div>
      </div>
    );
  };
  
  export default StorySection;
  
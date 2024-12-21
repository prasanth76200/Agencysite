// import up from '../../../../public/assets/trend(1).png';
import sad from '../../../../public/assets/rising-cost-living-concern-concept.jpg';
import happy from '../../../../public/assets/portrait-man-shopping-buying-consumer-goods.jpg';
const StorySection = () => {
    return (
        <div className="mt-[150px] lg:mt-[100px] mb-[1000px] mx-auto my-auto">
            <div className="flex justify-center">
                <h1 className="text-black bg-white px-4 rounded-lg font-sans shadow-lg shadow-primary font-bold text-[30px] md:text-[60px] lg:text-[40px] xl:text-[50px] whitespace-nowrap ">
                    <span className="text-secondary font-bold  text-[30px] md:text-[60px] lg:text-[70px] xl:text-[70px]">A </span> 
                    Simple Story - Makes your Business
                    <span className="text-[#FF000D] font-sans font-bold  text-[30px] md:text-[60px] lg:text-[70px] xl:text-[70px]"> 100x</span>
                     </h1>
                     &nbsp;
                     {/* <div className="mb-[] ">
                     <img loading="lazy" src={up} alt="" className="w-[40px] xl:w-[130px] mb-9" />

                     </div> */}
            </div>
            {/* <div className="flex justify-center">
                <h1 className="text-black font-Caveat font-bold text-[70px]">
                Imagine this
            </h1> 
                     
            </div> */}
      <div className="mt-[30px] flex justify-center items-center">
      
        <div className="text-black bg-white px-5 py-5 rounded-lg shadow-2xl shadow-secondary grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-7xl"> 
          <div className="flex justify-center items-center rounded-lg font-sans text-[30px] py-2  ">
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
            <img loading='lazy' src={happy} alt="" className='rounded-l-lg' />
          </div>
          <div className="flex justify-center items-center rounded-lg font-sans text-[30px] mt-[90px]  ">
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
  
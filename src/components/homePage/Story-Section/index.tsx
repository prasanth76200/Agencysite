import up from '../../../../public/assets/trend(1).png';
import sad from '../../../../public/assets/rising-cost-living-concern-concept.jpg';
import happy from '../../../../public/assets/view-cartoon-character-shopping.jpg';
const StorySection = () => {
    return (
        <div className="mt-[150px] mb-[1000px]">
            <div className="flex justify-center">
                <h1 className="text-black font-roboto font-bold text-[60px]">
                    <span className="text-secondary text-[60px]">A </span> 
                    Simple Story - Makes your Business
                    <span className="text-primary font-sans font-bold text-[80px]"> 100x</span>
                     </h1>
                     &nbsp;
                     <div className="mb-[]">
                     <img loading="lazy" src={up} alt="" className='w-[130px] mb-9' />

                     </div>
            </div>
            {/* <div className="flex justify-center">
                <h1 className="text-black font-Caveat font-bold text-[70px]">
                Imagine this
            </h1> 
                     
            </div> */}
      <div className="mt-[0px] flex justify-center items-center">
      
        <div className="text-black bg-white px-5 py-5 rounded-lg shadow-2xl shadow-secondary grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
            
          <div className="flex justify-center items-center rounded-lg font-sans text-[30px]  ">
            <p className=''> <span className='bg-secondary py-1 rounded-md px-2 text-white'>Vishal</span> runs a small business that he’s been doing for years. He has loyal customers who visit 
                regularly and loves the personal connections he’s built. But there's a problem—his business only reaches 
                the people who walk through his door. He can't reach new customers who are 
                outside his area, and despite his hard work, he finds it hard to grow past a certain point
                <span className='flex justify-end font-Caveat'>Ps.Very Sad :(</span>
                </p>
               
          </div>
          <div className="flex justify-center items-center  ">
            <img loading='lazy' src={sad} alt="" className=' rounded-r-lg' />
          </div>
          <div className="flex justify-center items-center mt-[90px]  ">
            <img loading='lazy' src={happy} alt="" className=' rounded-l-lg' />
          </div>
          <div className="flex justify-center items-center rounded-lg font-sans text-[30px] mt-[90px]  ">
            <p className='p3'>Then, there's Aryan. <span className='bg-primary py-1 rounded-md px-2 text-white'>Aryan</span> also has a business, but he made a decision to take it online. 
                Now, not only does he have local customers, but he also reaches people from all over, even from 
                different cities and countries. <span></span>His business is growing fast, and <span className='bg-green-300 text-black rounded-sm  '>he’s getting new opportunities every day</span>.
                <span className='flex justify-end font-Caveat'>Ps.Happy endings :)</span>
                </p>
               
          </div>
          
        </div>
      </div>
      </div>
    );
  };
  
  export default StorySection;
  
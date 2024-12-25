// src/components/Footer.js
const Hookie = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-3 pb-20" id="contact">


<div className="flex justify-center text-black">
  <div
    style={{
      backgroundImage:
        "radial-gradient(rgba(0,0,0, 0.10) 2px, transparent 0)",
      backgroundSize: "30px 30px",
      backgroundPosition: "-5px -5px",
    }}
    className="flex flex-col items-center mt-4 dark:bg-backgroundDark dark:text-textDark bg-white shadow-lg shadow-primary text-black px-4 rounded-lg font-sans font-bold text-center text-[20px] md:text-[26px] lg:text-[40px] xl:text-[50px]"
  >
    <h1 className="heading">
      Ready to take <span className="text-purple-500">your</span> digital
      presence to the next level?
    </h1>
    <p className="block text-[13px] md:text-[20px] pb-5 text-center mt-2"> Reach out to me today and let&apos;s discuss how I can help you
    achieve your goals.</p>
  </div>

        
    </div>
    <div className="flex items-center justify-center mt-[60px]">
    <button
       onClick={() => window.open('https://forms.gle/riNyG9Pb43MLEmxb7', '_blank')}
     className="px-6 py-2 font-medium rounded-3xl bg-indigo-500 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      Contact Us
    </button>
     
    </div>
  </footer>
  );
};

export default Hookie;

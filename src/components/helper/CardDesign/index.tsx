interface CardDesignProps {
    headLine: string;
    words: string;
    img: boolean;
    imgSrc?: string;
    width:string;
  }
  
  const CardDesign: React.FC<CardDesignProps> = ({ headLine, words, img, imgSrc ,width}) => {
    return (
      <div>
        <div className="relative mt-10 flex w-80 flex-col rounded-xl  dark:bg-backgroundDark  dark:text-textLight bg-white bg-clip-border text-gray-700 shadow-lg hover:shadow-md hover:shadow-secondary transition-all duration-300 hover:-translate-y-1">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {img && imgSrc ? (
                <img loading="lazy" src={imgSrc} alt="Star" width={width} />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-20 h-20 text-white/90 transform transition-transform group-hover:scale-110 duration-300"
                >
                  <path
                    d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83zM11 16h2v2h-2zm0-6h2v4h-2z"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-2 dark:text-textDark block font-sans whitespace-nowrap text-center text-2xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
              {headLine}
            </h5>
            <p className="block dark:text-textDark  font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {words}
            </p>
          </div>
          <div className="p-6 pt-0">
            {/* Your button or any other content */}
          </div>
        </div>
      </div>
    );
  };
  
  export default CardDesign;
  
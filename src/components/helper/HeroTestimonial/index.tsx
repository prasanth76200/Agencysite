



interface HeroTestimonialProps {
  reviewsCount: string; 
  words: string;
  img:boolean;
  imgSrc?: string; 
  width?: string; 

 } // or number based on your requirement

 const HeroTestimonial: React.FC<HeroTestimonialProps> = ({ reviewsCount, words, img, imgSrc, width }) => {
  return (
    <div>
      <div className="bg-white w-[220px] sm:w-[280px] md:w-[320px] rounded-xl shadow-[2px_6px_90px] shadow-secondary mt-[-90px]">
        <div className="flex justify-center pt-2 pb-2 max-h-20">
          <span className="text-black font-Caveat font-bold text-[20px] sm:text-[22px] md:text-[28px]">
            {reviewsCount}
          </span>{" "}
          &nbsp;
          <span className="text-black font-Caveat font-bold text-[20px] sm:text-[22px] md:text-[28px]">
            {words}
          </span>
          &nbsp;
          {img && (
            <span className="pt-2">
              <img
                loading="lazy"
                src={imgSrc}
                alt="Star"
                width={width}
                // className="w-[40px]"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};


export default HeroTestimonial

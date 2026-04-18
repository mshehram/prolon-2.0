import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F1EAE5] pt-0 pb-0 overflow-hidden flex flex-col items-center">
      
      <div className="w-[1px] h-[72px] bg-[#292D32] self-center" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center min-h-[auto] lg:min-h-[700px] mt-16 lg:mt-20 mb-16 lg:mb-20">
        
        <div className="w-full lg:w-1/2 flex justify-center items-center relative px-6 mb-32 lg:mb-0">
          <div className="relative">
            <div className="w-[280px] h-[320px] md:w-[430px] md:h-[491px] overflow-hidden rounded-sm">
              <img 
                src="/images/info sec image.png" 
                alt="ProLon Box" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] h-[200px] md:w-[344px] md:h-[351px] overflow-hidden rounded-sm absolute -bottom-16 -right-4 md:-bottom-20 md:-right-20 z-10 shadow-xl">
              <img 
                src="/images/info image.png" 
                alt="ProLon Tubes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center px-6 lg:px-0 z-20">
          <div className="w-full max-w-[457px] lg:h-[607px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[34px] md:leading-[42px] lg:leading-[48px] font-sans font-medium text-[#1d3329] mb-6 lg:mb-8">
              ProLon products are the result of research, development and scientific validation.
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-[14px] md:text-[16px] leading-[22px] lg:leading-[24px] font-sans text-[#1d3329] opacity-90">
              <p>
                ProLon® is the first and only Fasting Mimicking Diet (FMD) that has been 
                clinically tested and shown to provide health benefits without the 
                burden of water-only fasting.
              </p>
              <p>
                Your network can benefit from our patented nutrient formulation 
                that provides essential nourishment.
              </p>
              <p>
                The ProLon 5-Day Fasting Mimicking Diet is the result of over 20 
                years of research.
              </p>
              <p>
                Expand your product portfolio and offer your network the best in 
                longevity and health.
              </p>
            </div>

            <button className="mt-12 lg:mt-16 bg-[#56A511] text-white font-serif font-bold text-[14px] leading-[18.2px] uppercase w-full max-w-[271px] h-[45px] rounded-[50px] transition-all tracking-[2px] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] hover:bg-[#4a8e0f]">
              CONTACT US TO JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1px] h-[72px] bg-[#292D32] self-center mt-auto" />
    </section>
  );
};

export default InfoSection;
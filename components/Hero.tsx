import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-[58px]">
      <img
        src="/images/Frankly Hero 2.png"
        alt="ProLon Hero"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />

      <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center justify-center text-center px-6 gap-[23px]">
        
        <h1 className="text-[32px] md:text-[56px] leading-[1.2] md:leading-[62px] font-medium font-sans text-[#1d3329]">
          Bring more Life to Life
        </h1>
        
        <div className="w-full max-w-[509px] h-[2px] bg-[#66bc29]" />
        
        <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-normal font-sans text-[#1d3329] max-w-[628px]">
          Partener with Prolon and bring your Employees and customers premium,
          patented products to promote longevity
        </p>

        <button className="bg-[#56A511] text-white font-serif font-bold text-[14px] leading-[18.2px] uppercase w-full max-w-[415px] h-[45px] rounded-[50px] transition-all tracking-[2px] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] hover:bg-[#4a8e0f]">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
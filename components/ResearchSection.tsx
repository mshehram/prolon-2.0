import React from 'react';

const ResearchHero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[694px] flex flex-col items-center justify-between overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/uncle atni image.png" 
          alt="Research Background" 
          className="w-full h-full object-cover object-[70%_center] md:object-[center_1%] scale-110 md:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <div className="relative z-10 w-[1px] h-[50px] md:h-[80px] bg-white" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-white text-[28px] md:text-[48px] lg:text-[52px] leading-[1.2] font-sans font-normal max-w-[900px] mb-4">
          " Let food be thy medicine and medicine be thy food "
        </h2>
        
        <p className="text-white text-[12px] md:text-[14px] tracking-[0.2em] font-sans opacity-80 uppercase">
          HIPPOCRATES
        </p>
      </div>

      <div className="relative z-10 w-[1px] h-[50px] md:h-[80px] bg-white" />

    </section>
  );
};

export default ResearchHero;
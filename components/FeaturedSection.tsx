import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="relative w-full h-[268px] bg-[#F1EAE5] flex flex-col items-center justify-between overflow-hidden">
        <div className="w-[1px] h-[72px] bg-[#292D32] self-center" />

      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
        <span className="text-[#1d3329] font-sans font-bold text-[14px] tracking-[2px] uppercase whitespace-nowrap">
          FEATURED IN
        </span>
        
        <div className="w-full max-w-[1028px] h-auto md:h-[88px] flex items-center justify-center">
          <img 
            src="/images/feature image.png" 
            alt="Featured Partners" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="w-[1px] h-[72px] bg-[#292D32] self-center" />
    </section>
  );
};

export default FeaturedSection;
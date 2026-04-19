import React from 'react';

const LongevityResearch = () => {
  return (
    <section className="relative min-h-[500px] md:h-[650px] w-full flex flex-col items-center justify-start overflow-hidden">
      <img 
        src="/images/Rectangle 109.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Research Background"
      />
      
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-[1px] h-24 md:h-32 bg-white"></div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center text-white px-6 py-12">
        <h2 className="text-3xl md:text-6xl font-light mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight max-w-4xl">
          We've done the research, <br className="hidden md:block" /> now it's your turn.
        </h2>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium opacity-90 max-w-xs md:max-w-none">
          Experience the benefits of nutritional technology <br className="md:hidden" /> that simulates fasting.
        </p>
      </div>
    </section>
  );
};

export default LongevityResearch;
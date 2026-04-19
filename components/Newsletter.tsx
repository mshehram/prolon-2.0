import React from 'react';

const Newsletter = () => {
  return (
    <section className="relative min-h-[500px] md:h-[600px] w-full flex flex-col items-center justify-between overflow-hidden">
      <img 
        src="/images/Mask group.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Newsletter Background"
      />
      
      <div className="absolute inset-0 bg-black/5"></div>

      <div className="relative z-10 w-[1px] h-20 md:h-32 bg-white"></div>

      <div className="relative z-10 text-center text-white w-full max-w-4xl px-6 py-12">
        <h2 className="text-xl md:text-4xl font-light mb-8 md:mb-12 leading-tight max-w-2xl mx-auto">
          Join us to receive longevity news, product updates, and technology updates.
        </h2>
        
        <form className="relative w-full max-w-[90%] md:max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="w-full bg-transparent border border-white/40 rounded-full py-3 md:py-4 px-6 md:px-8 text-[9px] md:text-[10px] tracking-[0.2em] focus:outline-none focus:border-white transition-all placeholder:text-white/60 uppercase"
          />
          <button 
            type="submit" 
            className="mt-4 md:mt-0 md:absolute md:right-1.5 md:top-1.5 md:bottom-1.5 w-full md:w-auto bg-white text-black px-8 py-3 md:py-0 rounded-full text-[10px] font-bold tracking-widest hover:bg-[#e5e7eb] transition-colors uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="relative z-10 w-[1px] h-20 md:h-32 bg-white"></div>
    </section>
  );
};

export default Newsletter;
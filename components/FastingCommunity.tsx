import React from 'react';

const FastingCommunity: React.FC = () => {
  return (
    <section className="w-full bg-[#1E4036] py-10 md:py-20 px-0">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        <div className="relative w-full max-w-[600px] h-[491px] overflow-hidden">
          <img 
            src="/images/Rectangle 110.png" 
            alt="Join Fastination" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
            <h3 className="text-white text-[28px] md:text-[40px] lg:text-[48px] font-normal leading-tight mb-4">
              Join fastination
            </h3>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-[320px] mb-8">
              Private Facebook for support questions and experience sharing
            </p>
            <button className="w-full max-w-[310px] h-[45px] bg-[#56A511] text-white text-[14px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-[#4a8e0e] transition-all">
              Participate Now
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-[600px] h-[491px] overflow-hidden">
          <img 
            src="/images/Rectangle 111.png" 
            alt="Fasting Groups" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center ">
            <h2 className="text-white text-[28px] md:text-[40px] lg:text-[48px] font-normal leading-tight mb-4">
              Fasting Groups
            </h2>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-[320px] mb-8">
              Join a fasting group led by a health coach during your fast.
            </p>
            <button className="w-full max-w-[310px] h-[45px] bg-[#56A511] text-white text-[14px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-[#4a8e0e] transition-all">
              Register Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FastingCommunity;
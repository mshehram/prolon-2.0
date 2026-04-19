"use client";
import React from 'react';

const EmailCustomerService = () => {
  return (
    <section className="w-full bg-[#1E4036] pt-0 pb-0 flex flex-col items-center relative overflow-hidden">
      <div className="max-w-[1162px] mx-auto px-6 w-full flex flex-col items-center">
        
        <div className="w-[1.5px] h-[90px] bg-[#FFFFFF] mb-10"></div>

        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-[40px] font-light mb-4 tracking-tight">
            Email Customer Service
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Please include as many details as possible so we can provide you with the best support.
          </p>
        </div>

        <form className="w-full max-w-[800px] flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="NAME"
                className="w-full bg-transparent border border-[#FFFFFF] rounded-lg px-4 py-3 text-white text-xs tracking-widest placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="MAIL"
                className="w-full bg-transparent border border-[#FFFFFF] rounded-lg px-4 py-3 text-white text-xs tracking-widest placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <textarea 
              placeholder="MESSAGE"
              rows={6}
              className="w-full bg-transparent border border-[#FFFFFF] rounded-lg px-4 py-3 text-white text-xs tracking-widest placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button 
              type="submit"
              className="bg-[#56A511] text-white w-full max-w-[415px] h-[45px] rounded-[50px] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a8e0f] transition-all shadow-lg active:scale-95"
            >
              SEND
            </button>
          </div>
        </form>

        <div className="w-[1.5px] h-[90px] bg-[#FFFFFF] mt-16 mb-0"></div>
      </div>
    </section>
  );
};

export default EmailCustomerService;
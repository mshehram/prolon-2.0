"use client";
import React from 'react';
import Image from 'next/image';

const CustomerSupport = () => {
  return (
    <section className="w-full relative overflow-hidden min-h-[694px] flex flex-col items-center">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/CustomerSupport image.png"
          alt="Lab Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] min-h-[694px] flex flex-col items-center justify-between py-0">
        
        <div className="w-[1px] h-[100px] bg-white opacity-50"></div>

        <div className="flex flex-col items-center text-center px-6">
          <h1 className="text-white text-[32px] md:text-[40px] font-normal leading-tight max-w-[600px] mb-4">
            Discover your path to an energized future.
          </h1>
          <p className="text-white/80 text-[14px] max-w-[600px] mb-8">
            Start where you are and join us on the longevity journey that's right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[467px] justify-center">
            <button className="bg-[#56A511] text-white w-full sm:w-[221px] h-[45px] rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-all">
              5-DAY
            </button>
            <button className="bg-[#56A511] text-white w-full sm:w-[221px] h-[45px] rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-all">
              RESET
            </button>
          </div>
        </div>

        <div className="w-[1px] h-[100px] bg-white opacity-50"></div>
      </div>
    </section>
  );
};

export default CustomerSupport;
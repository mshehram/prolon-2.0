"use client";
import React from 'react';

const QuestionAnswer = () => {
  return (
    <section 
      className="w-full pt-32 pb-0 md:pt-44 md:pb-0 flex flex-col items-center"
      style={{ background: "linear-gradient(180deg, #A8B7AD 0%, #F1EAE5 100%)" }}
    >
      <div className="max-w-[1162px] mx-auto px-6 w-full flex flex-col items-center">
        
        <div className="text-center mb-10 md:mb-12 flex flex-col items-center pt-8 md:pt-0">
          <h2 className="text-2xl md:text-[45px] font-light text-[#1E4036] mb-4 leading-tight">
            Do you have any questions?
          </h2>
          <div className="w-[200px] md:w-[340px] h-[2px] bg-[#56A511] mb-6"></div>
          
          <div className="text-[#1E4036] max-w-3xl mx-auto text-sm md:text-[16px] leading-relaxed opacity-80">
            <p>Every new journey brings with it questions, and that&apos;s normal!</p>
            <p>We&apos;re here to accompany and support you every step of the way on your journey to longevity.</p>
            <p>So, feel free to ask; we&apos;re here with you on this journey!</p>
          </div>
          
          <button className="mt-8 bg-[#56A511] text-white px-8 md:px-12 py-3.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a8e0f] transition-all">
            JOIN FASTINATION
          </button>
        </div>

        <div className="w-[1.5px] h-[80px] md:h-[141px] bg-[#1E4036] mb-10 md:mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full justify-items-center">
          
          <div className="bg-white rounded-[24px] shadow-sm flex flex-col items-center p-4 w-full max-w-[394px] h-[346px] text-center border border-black/5">
            <div className="w-full h-[130px] rounded-xl overflow-hidden mb-6">
              <img 
                src="/images/contact image 1.png" 
                alt="FAQs" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#1E4036] font-bold text-[14px] md:text-[16px] tracking-wider uppercase mb-2">
              CHECK OUT OUR FAQS
            </h3>
            <div className="w-32 md:w-40 h-[2px] bg-[#56A511] mb-6"></div>
            <p className="text-[13px] md:text-[14px] text-[#1E4036]/70 leading-relaxed max-w-[260px]">
              Fasting can raise many questions. Check out our in depth FAQs to learn more.
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-sm flex flex-col items-center p-4 w-full max-w-[394px] h-[346px] text-center border border-black/5">
            <div className="w-full h-[130px] rounded-xl overflow-hidden mb-6">
              <img 
                src="/images/contact image 1.png" 
                alt="Write to us" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#1E4036] font-bold text-[14px] md:text-[16px] tracking-wider uppercase mb-2">
              WRITE TO US
            </h3>
            <div className="w-32 md:w-40 h-[2px] bg-[#56A511] mb-6"></div>
            <p className="text-[13px] md:text-[14px] text-[#1E4036]/70 leading-relaxed max-w-[260px]">
              Chat with our customer support team
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-sm flex flex-col items-center p-4 w-full max-w-[394px] h-[346px] text-center border border-black/5">
            <div className="w-full h-[130px] rounded-xl overflow-hidden mb-6">
              <img 
                src="/images/contact image 1.png" 
                alt="Contact Hands" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#1E4036] font-bold text-[14px] md:text-[16px] tracking-wider uppercase mb-2">
              CONTACT US
            </h3>
            <div className="w-28 md:w-32 h-[2px] bg-[#56A511] mb-4"></div>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] md:text-[12px] text-[#1E4036] font-semibold break-all">andreamorabito@l-nutra.com</p>
              <p className="text-[11px] md:text-[12px] text-[#1E4036] font-semibold break-all">ggerosa@l-nutra.com</p>
            </div>
          </div>

        </div>

        <div className="w-[1.5px] h-[50px] md:h-[72px] bg-[#1E4036] mt-10 md:mt-16 mb-0"></div>
      </div>
    </section>
  );
};

export default QuestionAnswer;
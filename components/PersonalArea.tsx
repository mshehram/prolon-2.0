"use client";
import React from 'react';

const PersonalArea = () => {
  return (
    <section className="w-full min-h-screen bg-[#E2E6E1] pt-32 pb-0 font-sans flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-[#1E4036] text-4xl font-normal mb-6">Hi, Name</h1>
          <div className="w-full max-w-[600px] h-[2px] bg-[#56A511] mx-auto mb-6"></div>
          <h2 className="text-[#1E4036] text-lg font-bold mb-2">Welcome to B2B Customer Portal</h2>
          <p className="text-[#1E4036] text-sm opacity-80 max-w-[800px] mx-auto leading-relaxed">
            This portal is enabled for B2B & Wholesale Customers to order quickly and purchase late. 
            If you got any problems, don't hesitate to get in touch with the store admin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#F1EAE5] rounded-[20px] p-8">
            <h3 className="text-[#1E4036] text-2xl text-center mb-8">My Order</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="bg-white rounded-[15px] p-5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#F5F5F5] rounded-md flex items-center justify-center border border-gray-100 overflow-hidden">
                       <img src="/api/placeholder/60/60" alt="product" className="object-contain" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#1E4036]">X10</p>
                      <h4 className="text-[#1E4036] text-base">Prolon 5-Day <span className="opacity-60 italic text-sm">variety 1</span></h4>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-[#1E4036] whitespace-nowrap">€ 950,00 EXC. VAT</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-[#F1EAE5] rounded-[20px] p-8">
              <h3 className="text-[#1E4036] text-2xl text-center mb-6">Toolkit</h3>
              <button className="w-full bg-[#56A511] text-white py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#4a8e0f] transition-all">
                Receive Now
              </button>
            </div>

            <div className="bg-[#F1EAE5] rounded-[20px] p-8">
              <h3 className="text-[#1E4036] text-2xl text-center mb-8">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-white rounded-full px-6 py-2 text-[#1E4036] text-[13px] truncate">
                    GIULIA GEROSA
                  </div>
                  <div className="flex-1 bg-white rounded-full px-6 py-2 text-[#1E4036] text-[13px] truncate">
                    GGEROSA@L-NUTRA.COM
                  </div>
                </div>
                <div className="bg-white rounded-[15px] p-6 relative">
                  <div className="text-[#1E4036] text-sm leading-relaxed">
                    <p className="font-bold text-[13px]">VIA UBERTO VISCONTI DI MODRONE 33</p>
                    <p className="text-[13px]">MILANO 20122</p>
                    <p className="text-[13px]">ITALY</p>
                  </div>
                  <button className="absolute bottom-4 right-4 bg-[#1E4036] text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase hover:opacity-90">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1px] h-20 md:h-32 bg-[#1E4036]/40"></div>
    </section>
  );
};

export default PersonalArea;
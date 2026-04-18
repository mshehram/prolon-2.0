import React from 'react';

const OfferingsSection: React.FC = () => {
  return (
    <section className="relative w-full h-[631px] bg-[#263F36] flex flex-col items-center justify-between overflow-hidden">
      
      <div className="w-[1px] h-[72px] bg-[#FFFFFF] self-center" />

      <div className="flex flex-col items-center flex-1 justify-center">
        <div className="text-center mb-16 px-4">
          <h2 className="text-white text-[40px] leading-[48px] font-sans font-normal max-w-[800px]">
            Expand your product offering, <br />
            promote well-being and longevity!
          </h2>
        </div>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-12 px-10 text-center items-start">
          
          <div className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] flex items-center justify-center mb-6">
              <img src="/images/cart image.png" alt="Order Online" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[#66bc29] font-sans font-bold text-[18px] tracking-[1px] uppercase mb-4">
              ORDER ONLINE
            </h3>
            <p className="text-white text-[16px] leading-[20px] font-sans opacity-90 max-w-[376px]">
              Register online and purchasing will be a breeze! Manage your account, invite your network, and track orders, all in one place.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] flex items-center justify-center mb-6 text-white">
              <img src="/images/msg image.png" alt="Support" className="w-full h-full object-contain filter invert brightness-0" />
            </div>
            <h3 className="text-[#66bc29] font-sans font-bold text-[18px] tracking-[1px] uppercase mb-4">
              DEDICATED SUPPORT
            </h3>
            <p className="text-white text-[16px] leading-[20px] font-sans opacity-90 max-w-[376px]">
              We are always here to help. Our team is available for order support, product training, and more.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] flex items-center justify-center mb-6 text-white">
              <img src="/images/up arrow image.png" alt="Products" className="w-full h-full object-contain filter invert brightness-0" />
            </div>
            <h3 className="text-[#66bc29] font-sans font-bold text-[18px] tracking-[1px] uppercase mb-4">
              PREMIUM PRODUCTS
            </h3>
            <p className="text-white text-[16px] leading-[20px] font-sans opacity-90 max-w-[376px]">
              Prolon is the result of over 20 years of research and development, clinically tested and proven to promote longevity. Premium products that your network.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[1px] h-[72px] bg-[#FFFFFF] self-center" />
    </section>
  );
};

export default OfferingsSection;
import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    // position changed to 'absolute', top to '[31px]' to match Figma layout
    <nav className="absolute top-[31px] left-1/2 -translate-x-1/2 z-50 w-[1366px] max-w-[95%] h-[58px] bg-[#D9D9D9]/10 backdrop-blur-md rounded-[51px] flex items-center justify-between px-8 border border-white/10 shadow-lg">
      <div className="flex items-center gap-8">
        {/* Placeholder for PROLON logo from Figma */}
        <img src="/prolon_logo_white.svg" alt="PROLON" className="h-4 w-auto" />
        
        <div className="hidden md:flex items-center gap-6 text-white/90 text-[14px] font-medium font-sans">
          <a href="#" className="hover:text-white">Products</a>
          <a href="#" className="hover:text-white">Contacts</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-[#66bc29] text-white text-[12px] font-bold px-[30px] py-[10px] rounded-[100px] uppercase tracking-[1.2px] font-serif">
          BUY NOW
        </button>
        
        <div className="flex items-center gap-4 text-white">
          <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full bg-white/10 text-[14px] font-medium font-sans">
            HI GIULIA
            <User size={18} className="cursor-pointer" />
          </div>
          
          <div className="relative cursor-pointer border border-white/20 p-2 rounded-full bg-white/10">
            <ShoppingCart size={18} />
          </div>
          
          {/* Flag Placeholder - replace with actual icon */}
          <div className="flex items-center gap-1 cursor-pointer ml-2">
            <span className="text-xl">🇬🇧</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
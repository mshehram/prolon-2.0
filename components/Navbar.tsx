"use client";

import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-[20px] md:top-[31px] w-full flex justify-center px-4 z-50">
      <nav className="w-full xl:w-[1366px] h-auto min-h-[58px] bg-[#D9D9D9]/10 backdrop-blur-md rounded-[25px] md:rounded-[51px] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 border border-white/10 shadow-lg overflow-hidden">
        
        <div className="flex items-center justify-between w-full md:w-auto h-[58px] shrink-0">
          <Link href="/">
            <img 
              src="/images/logo.png" 
              alt="PROLON" 
              className="w-[110px] sm:w-[150px] md:w-[226px] h-auto md:h-[39px] object-contain cursor-pointer" 
            />
          </Link>
          
          <div className="flex items-center gap-3 md:hidden">
            <ShoppingCart size={18} className="text-white" />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white/90 text-[14px] font-medium font-sans ml-8">
            <Link href="/shop" className="hover:text-white">Products</Link>
            <Link href="/contact" className="hover:text-white">Contacts</Link>
          </div>
        </div>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-6 pb-6 md:pb-0 w-full md:w-auto`}>
          <div className="flex md:hidden flex-col items-center gap-3 text-white/90 text-[14px] font-medium font-sans mt-2">
            <Link href="/shop" className="hover:text-white">Products</Link>
            <Link href="/contact" className="hover:text-white">Contacts</Link>
          </div>

          <Link href="/shop" className="w-full md:w-auto">
            <button className="bg-[#56A511] text-white text-[12px] font-bold px-6 py-[10px] rounded-[100px] uppercase tracking-[1.2px] font-serif w-full md:w-auto shrink-0">
              BUY NOW
            </button>
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-white w-full md:w-auto">
            <Link href="/login">
              <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full bg-white/10 text-[13px] md:text-[14px] font-medium font-sans cursor-pointer hover:bg-white/20 transition-all">
                <span className="hidden sm:inline">HI GIULIA</span>
                <User size={18} />
              </div>
            </Link>
            
            <div className="hidden md:block border border-white/20 p-2 rounded-full bg-white/10">
              <ShoppingCart size={18} />
            </div>
            
            <div className="flex items-center cursor-pointer">
              <img 
                src="/images/flag.png" 
                alt="Flag" 
                className="w-[44px] h-[42px] md:w-[76px] md:h-[44px] object-contain"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
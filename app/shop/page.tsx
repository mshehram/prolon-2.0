import React from 'react';
import Navbar from "@/components/Navbar";
import LongevityResearch from "@/components/LongevityResearch";
import Newsletter from "@/components/Newsletter";
import ProductGridSection from "@/components/ProductGridSection";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
         <ProductGridSection />
        <LongevityResearch />
        <Newsletter />
       
      </main>
    </div>
  );
}
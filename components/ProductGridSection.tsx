"use client";
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/server/shopify';
import ProductCard from './ProductCard';

const categories = [
  { name: "All", handle: "all" },
  { name: "Fasting Mimicking Nutrition", handle: "fasting-mimicking-nutrition" },
  { name: "Intermittent Fasting", handle: "intermittent-fasting" },
  { name: "Longevity Everyday", handle: "longevity-everyday" }
];

const ProductGridSection = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Shopify Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.categories && p.categories.includes(activeTab));

  return (
    <section 
      className="py-16 md:py-24 w-full"
      style={{ background: "linear-gradient(180deg, #A8B7AD 0%, #F1EAE5 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-light text-center text-[#1E4036] mb-10 md:mb-16">
          Shop Prolon and everyday nutrition
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-[#1E4036]/20 mb-12 overflow-x-auto no-scrollbar whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.handle}
              onClick={() => setActiveTab(cat.handle)}
              className={`pb-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                activeTab === cat.handle ? "text-[#1E4036]" : "text-[#1E4036]/40 hover:text-[#1E4036]"
              }`}
            >
              {cat.name}
              {activeTab === cat.handle && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1E4036]"></div>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center text-sm tracking-widest text-[#1E4036]/60">
            LOADING PRODUCTS...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGridSection;
import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  currency: string;
  image: string;
}

const ProductCard = ({ name, price, currency, image }: ProductCardProps) => {
  return (
    <div className="bg-[#F1EAE5] w-[268px] h-[298px] flex flex-col items-center justify-between p-6 rounded-[4px] transition-all hover:brightness-95 cursor-pointer group shadow-sm">
      <div className="w-[226px] h-[185px] flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-center w-full mb-2">
        <h3 className="text-[#1E4036] text-[18px] font-normal leading-tight mb-3">
          {name}
        </h3>
        <p className="text-[10px] tracking-[0.1em] text-[#1E4036] opacity-70 uppercase font-bold">
          {currency === 'EUR' ? '€' : currency} {price} EXC. VAT
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
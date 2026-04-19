import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  currency: string;
  image: string;
}

const ProductCard = ({ name, price, currency, image }: ProductCardProps) => {
  return (
    <div className="bg-[#F4F1EA] w-[268px] h-[298px] flex flex-col items-center justify-between p-8 rounded-sm transition-all hover:shadow-md cursor-pointer group">
      
      <div className="flex-1 flex items-center justify-center w-full">
        <img 
          src={image} 
          alt={name} 
          className="max-w-[226px] max-h-[185px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="text-center w-full mt-2">
        <h3 className="text-[#2A3B2A] text-[18px] font-normal leading-tight mb-2">
          {name}
        </h3>
        <p className="text-[10px] tracking-[0.15em] text-[#2A3B2A]/60 uppercase font-bold">
          {currency === 'EUR' ? '€' : currency} {price} EXC. VAT
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
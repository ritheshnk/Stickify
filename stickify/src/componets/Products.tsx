import React from "react";
import type { Product } from "../products";


type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="mx-20 sm:mx-20 bg-black rounded-2xl shadow-md  hover:scale-105 transition-transform transition-shadow" >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
            <div className="p-4">
                <h2 className=" text-xs sm:text-xl font-bold hover:text-red-500 transition-colors duration-100">{product.name}</h2>
                <p className="text-white text-xs sm:hidden mt-1 hover:text-red-500 transition-colors duration-100">
                    {product.description.split(' ').slice(0, 3).join(' ')}
                </p>
                <p className="text-white text-xs sm:text-sm mt-1 hover:text-red-500 transition-colors duration-100 hidden sm:block">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-white hover:text-red-500 transition-colors duration-100">
                    ${product.price.toFixed(2)}
                </span>
                <button className=" px-1 py-1 sm:px-4 sm:py-2 text-xs  text-white rounded-xl hover:bg-white hover:text-black transition-colors">
                    Add to Cart
                </button>
                </div>
            </div>
     </div>
  );
}

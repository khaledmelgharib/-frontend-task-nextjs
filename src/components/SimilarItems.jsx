"use client";
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { LuShoppingBag } from "react-icons/lu";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const products = [
  { id: 1, img: "/61rjMSPiDvL._AC_SY879_-removebg-preview 1.png", title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...", price: "900", category: "Dresses" },
  { id: 2, img: "/61K-51V+wsL._AC_SX679_-removebg-preview.png", title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...", price: "900", oldPrice: "1300", category: "Dresses" },
  { id: 3, img: "/81jorIOyDhL._AC_SX679_-removebg-preview.png", title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...", price: "900", category: "Dresses" },
  { id: 4, img: "/61GoUmCw1PL._AC_SX679_-removebg-preview.png", title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...", price: "900", oldPrice: "1300", category: "Dresses" },
];

export default function SimilarItems() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <div className="relative mb-8">
        <h2 className="text-[20px] font-bold text-[#1A1A1A] pb-2">Similar Items</h2>
        <div className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-[#BFA394]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group">
            <div className="relative aspect-square bg-[#F7F7F7] rounded-[30px] flex items-center justify-center p-10 border border-[#EEEEEE]">
              <img src={product.img} alt="product" className="w-full h-full object-contain" />
              
              <div className="absolute top-5 right-5 flex gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#BE968E] shadow-sm cursor-pointer">
                  <LuShoppingBag size={18} />
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#BE968E] shadow-sm cursor-pointer">
                  <AiOutlineHeart size={18} />
                </div>
              </div>

              {product.oldPrice && (
                <div className="absolute top-5 left-5 bg-white px-2 py-1 rounded-md shadow-sm">
                  <span className="text-[9px] text-[#BE968E] font-bold uppercase tracking-tight">25% Off</span>
                </div>
              )}
            </div>

            <div className="mt-4 space-y-1">
              <div className="flex justify-between items-center text-[10px] font-bold text-[#C4C4C4] uppercase">
                <span>{product.category}</span>
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-[#BFA394]" size={14} />
                  <span className="text-black font-bold text-[12px]">4.5</span>
                  <span className="font-normal lowercase tracking-tighter">(2110)</span>
                </div>
              </div>

              <h3 className="text-[13px] font-bold text-[#1A1A1A] leading-tight line-clamp-2 min-h-[32px]">
                {product.title}
              </h3>

              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-bold text-[#1A1A1A]">AED</span>
                  <span className="text-[14px] font-bold text-[#1A1A1A]">{product.price}</span>
                  
                  {product.oldPrice && (
                    <span className="text-[11px] text-[#C4C4C4] line-through font-medium ml-1">AED {product.oldPrice}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#C1A391] border-2 border-white z-10"></div>
                  <div className="w-4 h-4 rounded-full bg-[#333333] border-2 border-white -ml-1.5 z-20"></div>
                  <span className="text-[11px] font-bold text-[#C4C4C4] ml-2">+2</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-12">
        <button className="w-11 h-11 rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#A1A1A1]">
          <IoChevronBack size={20} />
        </button>
        <button className="w-11 h-11 rounded-full bg-[#BFA394] flex items-center justify-center text-white shadow-md">
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  );
}
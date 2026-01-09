"use client";
import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export default function ProductGallery() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[524px] mx-auto">
      
      <div className="relative bg-[#F7F7F7] rounded-[30px] md:rounded-[40px] w-full aspect-[524/565] flex items-center justify-center overflow-hidden">
        <img 
          src="/young-adult-man-wearing-hoodie-1.png" 
          alt="Product" 
          className="w-[60%] md:w-[50%] h-auto object-contain" 
        />
        
        <button className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-[#C4C4C4]/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all hover:bg-[#BFA394]">
          <IoChevronBack size={16} />
        </button>
        <button className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-[#BFA394] rounded-full flex items-center justify-center text-white transition-all hover:scale-105">
          <IoChevronForward size={16} />
        </button>

        <div className="absolute top-4 w-full px-6 md:px-10 flex gap-1.5 md:gap-2">
            <div className="h-[2px] md:h-[3px] flex-1 bg-white/40 rounded-full"></div>
            <div className="h-[2px] md:h-[3px] flex-1 bg-white rounded-full"></div>
            <div className="h-[2px] md:h-[3px] flex-1 bg-white/40 rounded-full"></div>
            <div className="h-[2px] md:h-[3px] flex-1 bg-white/40 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
        <div className="bg-[#F7F7F7] rounded-[15px] md:rounded-[25px] aspect-square flex items-center justify-center p-2 cursor-pointer border-2 border-transparent hover:border-[#BFA394] transition-all">
            <img src="/Frame 1000005851.png" className="w-[80%] object-contain" alt="thumb1" />
        </div>
        
        <div className="bg-[#F7F7F7] rounded-[15px] md:rounded-[25px] aspect-square flex items-center justify-center p-2 border border-gray-100 cursor-pointer">
            <img src="/360_F_649571437_eo442p0EwFcdkUOoeocbdi7VKl4VWqRP-removebg-preview.png" className="w-[80%] object-contain" alt="thumb2" />
        </div>
                <div className="relative bg-[#444444] rounded-[15px] md:rounded-[25px] aspect-square flex items-center justify-center overflow-hidden cursor-pointer group">
            <img src="/128675430_50654237-removebg-preview.png" className="w-[80%] object-contain opacity-40 group-hover:scale-110 transition-transform" alt="thumb3" />
            <span className="absolute text-white text-xl md:text-2xl font-bold">+2</span>
        </div>
      </div>
    </div>
  );
}
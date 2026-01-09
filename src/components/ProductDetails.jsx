
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <span className="text-[14px] text-[#BE968E] border border-gray-200 px-3 py-1 rounded-full">T-Shirt</span>
        <div className="flex gap-2">
          <div className="p-2 border border-gray-100 rounded-xl text-[#BE968E]"><LuShoppingBag size={20}/></div>
          <div className="p-2 border border-gray-100 rounded-xl text-[#BE968E]"><AiOutlineHeart size={20}/></div>
        </div>
      </div>

      <h1 className="text-[24px] font-medium text-[#020202] leading-tight">
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h1>

      <div className="flex items-center gap-2 -mt-2">
        <span className="text-[20px] font-medium text-[#020202]">$300.00</span>
        <span className="text-gray-300 line-through text-sm">$360.00</span>
      </div>
      <p className="text-[10px] text-gray-400 -mt-4">This price is exclusive of taxes.</p>

      <p className="text-[#020202] text-[14px] leading-relaxed border-b border-gray-100 pb-6">
        Lorem ipsum dolor sit amet , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
      </p>

      <div className="grid grid-row-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-[#020202] ml-1">Type</label>
          <select className="bg-[#F9F9F9] text-[#020202] border-none w-[299px] h-[47px] rounded-md p-4 text-sm outline-none appearance-none cursor-pointer">
            <option>Cotton</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-[#020202] ml-1">Size</label>
          <select className="bg-[#F9F9F9] text-[#020202] border-none  w-[299px] h-[47px] rounded-2xl p-4 text-sm outline-none appearance-none cursor-pointer">
            <option>2xl</option>
          </select>
        </div>
      </div>

      <div>
        <h3 className="text-[20px] text-[#020202] font-medium mb-3">Colors</h3>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-red-600 ring-offset-2 ring-1 ring-transparent cursor-pointer"></div>
          <div>
                      <div className="w-8 h-8 rounded-full bg-[#D1E1F0] ring-offset-2 ring-2 ring-[#020202] cursor-pointer"></div>
        <span className="text-[14px] text-gray-400 font-medium mt-2 block ml-1">Blue</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#9B8B5F] ring-offset-2 ring-1 ring-transparent cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-[#7D9CC7] ring-offset-2 ring-1 ring-transparent cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-[#5A5A5A] ring-offset-2 ring-1 ring-transparent cursor-pointer"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="text-[20px] text-[#020202] font-medium ml-1">Quantity <span className="text-[14px] text-gray-400 font-medium">($300.00 for Piece)</span></label>
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-between bg-[#F9F9F9] rounded-2xl px-5 h-[60px] flex-1 max-w-[260px]">
            <button className="text-2xl text-gray-300 font-light">-</button>
            <span className="text-lg text-[#020202] ">01</span>
            <button className="text-2xl text-[#020202] font-light">+</button>
            <div className="w-[1px] h-6 bg-gray-200 mx-2"></div>
            <span className="text-lg font-medium text-[#020202]">$300.00</span>
          </div>
          
          <button className="flex-1 bg-[#BE968E] text-white h-[56px] w-[200px] rounded-2xl  flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            Add To Cart <LuShoppingBag size={20} className="bg-white/20 rounded p-0.5"/>
          </button>
        </div>
      </div>
    </div>
  );
}
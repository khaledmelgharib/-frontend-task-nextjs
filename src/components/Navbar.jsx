"use client";
import { useState } from 'react';
import { 
  HiOutlineShoppingBag, 
  HiOutlineBell, 
  HiOutlineHeart, 
  HiOutlineUser, 
  HiOutlineBars3, 
  HiOutlineXMark 
} from 'react-icons/hi2';
import { IoChevronDown } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-[100]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        <div className="flex-shrink-0">
          <img src="/Layer_1.png" alt="Tinytales" className="h-7 md:h-9 w-auto" />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <NavLink icon={<AiOutlineHome size={18} />} label="Home" hasArrow />
          <NavLink icon={<BiCategory size={18} />} label="Our Category" hasArrow />
          <NavLink icon={<AiOutlineInfoCircle size={18} />} label="About Us" />
          <NavLink icon={<AiOutlinePhone size={18} />} label="Contact Us" />
          <NavLink icon={<AiOutlineQuestionCircle size={18} />} label="FAQs" />
        </div>

        <div className="flex items-center gap-4">
          
          <div className="hidden lg:flex items-center gap-4 pr-4 border-r border-gray-100 text-gray-700">
            <HiOutlineShoppingBag size={22} className="cursor-pointer hover:text-[#BFA394]" />
            <HiOutlineBell size={22} className="cursor-pointer hover:text-[#BFA394]" />
            <HiOutlineHeart size={22} className="cursor-pointer hover:text-[#BFA394]" />
          </div>
          
          <div className="hidden lg:flex items-center gap-4 pl-2">
            <div className="flex items-center gap-1 text-[13px] font-bold text-gray-700 cursor-pointer">
              <span>EN</span>
              <IoChevronDown size={12} />
            </div>
            <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
              <HiOutlineUser size={22} />
              <IoChevronDown size={12} />
            </div>
          </div>

          <button 
            className="lg:hidden text-gray-900 p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineXMark size={28} /> : <HiOutlineBars3 size={28} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-[60px] bg-white z-[99] transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          {/* روابط القائمة */}
          <div className="flex flex-col gap-5">
            <MobileNavLink icon={<AiOutlineHome size={22}/>} label="Home" />
            <MobileNavLink icon={<BiCategory size={22}/>} label="Categories" />
            <MobileNavLink icon={<AiOutlineInfoCircle size={22}/>} label="About Us" />
            <MobileNavLink icon={<AiOutlinePhone size={22}/>} label="Contact" />
          </div>

          <div className="mt-auto border-t pt-6 flex flex-col gap-6">
            <div className="flex justify-around text-gray-700">
              <HiOutlineShoppingBag size={24} />
              <HiOutlineBell size={24} />
              <HiOutlineHeart size={24} />
              <HiOutlineUser size={24} />
            </div>
            <div className="flex items-center justify-center gap-2 font-bold text-gray-700">
              <span>EN</span>
              <IoChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, label, hasArrow }) {
  return (
    <div className="flex items-center gap-1 text-[13px] text-gray-400 font-medium cursor-pointer hover:text-[#BFA394] transition-colors">
      {icon}
      <span>{label}</span>
      {hasArrow && <IoChevronDown size={12} className="text-gray-300" />}
    </div>
  );
}

function MobileNavLink({ icon, label }) {
  return (
    <div className="flex items-center gap-4 text-gray-700 text-lg font-semibold py-2 border-b border-gray-50">
      <span className="text-[#BFA394]">{icon}</span>
      {label}
    </div>
  );
}
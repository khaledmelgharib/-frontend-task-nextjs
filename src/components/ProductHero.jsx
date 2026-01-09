export default function ProductHero() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center overflow-hidden">
        <img 
          src="/3d-vertical-background-with-abstract-style 1.png" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        <h2 className="hidden md:block absolute z-10 text-[90px] font-black text-gray-200/30 select-none uppercase tracking-tighter whitespace-nowrap">
          Product Details
        </h2>

        <h1 className="relative z-20 text-xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Product Details
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 mt-4 md:mt-8">
        <div className="bg-[#F8F8F8] flex w-full h-11 md:h-14 items-center gap-2 md:gap-3 px-4 md:px-8 rounded-xl md:rounded-2xl text-[12px] md:text-[14px] font-medium border border-gray-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="text-gray-900 cursor-pointer shrink-0">Home</span>
          <span className="text-gray-300 font-light shrink-0">{">"}</span>
          <span className="text-gray-900 cursor-pointer shrink-0">Our Category</span>
          <span className="text-gray-300 font-light shrink-0">{">"}</span>
          <span className="text-gray-400 shrink-0">Product Details</span>
        </div>
      </div>
    </div>
  );
}
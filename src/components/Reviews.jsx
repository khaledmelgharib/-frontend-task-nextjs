import { AiFillStar } from 'react-icons/ai';
import { FaComment, FaRegComment } from 'react-icons/fa';


const reviewsData = [
  { id: 1, name: "Alex Daewn", date: "4 months ago", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { id: 2, name: "Alex Daewn", date: "4 months ago", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { id: 3, name: "Alex Daewn", date: "4 months ago", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { id: 4, name: "Alex Daewn", date: "4 months ago", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
];

export default function Reviews() {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4">
      <div className="relative mb-12">
        <h2 className="text-[20px] font-bold text-gray-900 pb-2">Rating & Reviews</h2>
        <div className="absolute bottom-0 left-0 w-12 h-[3px] bg-[#BFA394] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
        
        <div className="flex items-baseline justify-center md:justify-start">
          <span className="text-[100px] font-bold text-gray-900 leading-none">4,5</span>
          <span className="text-[24px] text-gray-300 font-medium ml-2">/5</span>
        </div>

        <div className="space-y-3">
          {[
            { star: 5, percent: 67 },
            { star: 4, percent: 15 },
            { star: 3, percent: 6 },
            { star: 2, percent: 3 },
            { star: 1, percent: 9 },
          ].map((item) => (
            <div key={item.star} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-8">
                <span className="text-[14px] font-bold text-gray-400">{item.star}</span>
                <AiFillStar className="text-[#BFA394]" size={14} />
              </div>
              <div className="flex-1 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#BFA394] rounded-full" 
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="text-[14px] font-bold text-gray-400 w-10 text-right">%{item.percent}</span>
            </div>
          ))}
        </div>

        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
          <span className="text-[16px] text-gray-400  uppercase tracking-widest">Total Reviews</span>
          <span className="text-[60px] font-bold text-gray-900 leading-tight">3.0K</span>
          <button className="mt-2 text-[13px] bg-[#BE968E] text-white px-8 h-[56px] w-[190px] py-3 rounded-[12px] flex items-center gap-2 hover:opacity-90 transition-all">
            Add Comment <FaRegComment size={20} color="white" />

          </button>
        </div>
      </div>

      <div className="space-y-10 border-t border-gray-100 pt-10">
        {reviewsData.map((rev) => (
          <div key={rev.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900 text-[16px]">{rev.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="text-[#BFA394]" size={14} />
                  ))}
                </div>
              </div>
              <span className="text-gray-400 text-[12px]">{rev.date}</span>
            </div>
            <p className="text-gray-500 text-[14px] leading-[1.8] max-w-4xl">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="text-[12px] font-bold text-[#BE968E] border border-gray-200 px-6 py-2 rounded-md h-[53px] w-[207px] hover:bg-gray-50 transition-all">
          View More Comments
        </button>
      </div>
    </div>
  );
}
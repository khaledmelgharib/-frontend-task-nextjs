import Navbar from '@/components/Navbar';
import ProductHero from '@/components/ProductHero';
import ProductGallery from '@/components/ProductGallery';
import ProductDetails from '@/components/ProductDetails';
import Reviews from '@/components/Reviews';
import SimilarItems from '@/components/SimilarItems';
import Footer from '@/components/Footer';

export default function UIPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#BFA394]/30 overflow-x-hidden">
      <Navbar />
      <ProductHero /> 
      <main className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 pb-10 md:pb-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mt-6 md:mt-12">
          <div className="w-full lg:flex-1 lg:max-w-[524px]">
            <ProductGallery />
          </div>

          <div className="w-full lg:w-[500px] lg:sticky lg:top-[100px] mt-2 lg:mt-0">
            <ProductDetails />
          </div>
          
        </div>

        <div className="h-[1px] bg-gray-100 w-full my-10 md:my-20" />
        <div className="w-full">
          <Reviews />
        </div>

        <div className="w-full mt-10 md:mt-20">
          <SimilarItems />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
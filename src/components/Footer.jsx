import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative text-white py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/kids-photography 1.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D372E]/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col">
                <img src="/TT LogoTT Logo 1.png" alt="Tinytales" className="h-[51px] w-[65px] mb-2" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs  opacity-90">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6">Let Us Help</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">My Account</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6">Policies</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h3 className="text-lg font-bold">Send Email</h3>
            <div className="relative flex items-center bg-white rounded-md p-1 shadow-inner">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full  bg-transparent text-gray-800 py-2 px-6 text-sm focus:outline-none"
              />
              <button className="bg-[#BFA394] text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-[#a88a7b] transition">
                Send
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold block uppercase tracking-wider">Follow Us</span>
              <div className="flex gap-4 text-white/80">
                <a href="#" className="hover:text-[#BFA394] transition"><FaFacebookF size={18} /></a>
                <a href="#" className="hover:text-[#BFA394] transition"><FaTwitter size={18} /></a>
                <a href="#" className="hover:text-[#BFA394] transition"><FaInstagram size={18} /></a>
                <a href="#" className="hover:text-[#BFA394] transition"><FaLinkedinIn size={18} /></a>
                <a href="#" className="hover:text-[#BFA394] transition"><FaWhatsapp size={18} /></a>
                <a href="#" className="hover:text-[#BFA394] transition"><FaTelegramPlane size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            © 2026 Trendline Task - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
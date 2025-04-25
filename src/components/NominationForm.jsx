
import Section from "./Section";
import { Gradient } from "./design/Services";

const NominationForm = () => {
  return (
    <Section crosses id="nominate">
      <Gradient />
      <h1 className="text-purple-500 text-center text-4xl md:text-5xl font-bold mb-8">
            ENTERPRISE AI TECH AWARDS 2025
          </h1>
      <div className="container relative flex items-center justify-center p-4 overflow-y-auto">
        
        <div className="relative w-full max-w-4xl p-6 rounded-[1.5rem] bg-gradient-to-br from-[#2B1867]/20 to-[#4c0674] border border-white/20 backdrop-blur-xl my-4">
        

          <form className="space-y-4">
            <h5 className="text-center text-white mb-4">NOMINEE'S INFORMATION</h5>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Organization Excellence Category*</label>
                <select className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm [&>option]:bg-[#47176c]">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Individual Excellence Category*</label>
                <select className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm [&>option]:bg-[#47176c]">
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-n-4 mb-1 text-xs">Reason for Nomination (PDF, WORD, PPT)*</label>
              <input type="file" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Nominee Name*</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
              </div>
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Nominee Phone (with country code)*</label>
                <input type="tel" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-n-4 mb-1 text-xs">Nominee's E-mail Address (official email only)*</label>
              <input type="email" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
            </div>

            <h5 className="text-center text-white mt-8 mb-4">YOUR INFORMATION</h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Name*</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
              </div>
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Phone (with country code)*</label>
                <input type="tel" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-n-4 mb-1 text-xs">E-mail Address (official email only)*</label>
              <input type="email" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm" />
            </div>

            <div className="flex justify-center pt-4">
              <button type="submit" className="button px-6 py-2 rounded-lg bg-gradient-to-r from-[#C019FF] to-[#8A2BE2] hover:opacity-90 text-white font-bold text-sm transition-all duration-200">
                REGISTER NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default NominationForm;
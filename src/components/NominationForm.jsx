
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
                  <option value="ai-project">AI Project of the Year 2025</option>
                  <option value="genai">Best Use Case of GenAI 2025</option>
                  <option value="cybersecurity">AI-based Cybersecurity Innovation 2025</option>
                  <option value="cloud">Best Cloud Transformation Project 2025</option>
                  <option value="customer-experience">Best Customer Experience Solution of the Year 2025</option>
                  <option value="data-analytics">Excellence in Customer Data Analytics 2025</option>
                  <option value="data-analytics-project">Best Data Analytics Project 2025</option>
                  <option value="data-protection">Best Data Protection Innovation of the Year 2025</option>
                  <option value="data-governance">Best Data Governance Initiative 2025</option>
                  <option value="digital-excellence">Best Digital Excellence of the Year 2025</option>
                  <option value="emerging-tech">Best Emerging Tech in AI of the Year 2025</option>
                  <option value="digital-transformation">Best Enterprise Digital Transformation of the Year 2025</option>
                  <option value="conversational-ai">Best Use Case of Conversational AI of the Year 2025</option>
                  <option value="cutting-edge">Best Use of Cutting-Edge AI Solutions 2025</option>
                  <option value="customer-intelligence">Customer Intelligence Project of the Year 2025</option>
                  <option value="emerging-tech-initiative">Emerging Technology Initiative 2025</option>
                  <option value="ai-driven-analytics">Excellence in AI-Driven Data Analytics 2025</option>
                  <option value="business-intelligence">Excellence in Business Intelligence 2025</option>
                  <option value="bi-innovation">Excellence in Business Intelligence & Data-Driven Innovation 2025</option>
                  <option value="customer-insights">Excellence in Customer Insights and Analytics 2025</option>
                  <option value="digital-innovation">Excellence in Digital and Innovation 2025</option>
                  <option value="ai-powered-analytics">Innovative AI-Powered Analytics Project of the Year 2025</option>
                  <option value="transformative-digital">Transformative Digital Project of the Year 2025</option>
                  <option value="next-gen">Next-Gen Technology Initiative 2025</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-n-4 mb-1 text-xs">Individual Excellence Category*</label>
                <select className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-sm [&>option]:bg-[#47176c]">
                  <option value="">Select</option>
                  <option value="cio-gov">Chief Information Officer 2025- Government Sector</option>
                  <option value="cio-private">Chief Information Officer 2025- Private Sector</option>
                  <option value="cdo-gov">Chief Digital Officer 2025- Government Sector</option>
                  <option value="cdo-private">Chief Digital Officer 2025- Private Sector</option>
                  <option value="cdao-gov">Chief Data Officer 2025- Government Sector</option>
                  <option value="cdao-private">Chief Data Officer 2025- Private Sector</option>
                  <option value="cino-gov">Chief Innovation Officer 2025- Government Sector</option>
                  <option value="cino-private">Chief Innovation Officer 2025- Private Sector</option>
                  <option value="ceo-gov">Chief Executive Officer 2025- Government Sector</option>
                  <option value="ceo-private">Chief Executive Officer 2025- Private Sector</option>
                  <option value="cal-gov">Chief Analytics Leader 2025- Government Sector</option>
                  <option value="cal-private">Chief Analytics Leader 2025- Private Sector</option>
                  <option value="digital-transform">Leader in Digital Transformation 2025</option>
                  <option value="ai-strategist">Best AI Strategist 2025</option>
                  <option value="analytics-leader">Best Advanced Analytics Leader 2025</option>
                  <option value="cx-leader">Best Customer Experience Leader 2025</option>
                  <option value="data-leader">Best Data Leader 2025</option>
                  <option value="innovative-woman">Innovative Woman of the Year 2025</option>
                  <option value="next-gen-ai">Next-Gen AI Leader 2025</option>
                  <option value="ai-governance">Leader in AI Governance & Ethics 2025</option>
                  <option value="data-governance">Leader in Data Governance 2025</option>
                  <option value="gen-ai">Trailblazer in Gen AI 2025</option>
                  <option value="risk-analytics">Leader in Risk Analytics 2025</option>
                  <option value="bi-leader">Best Business Intelligence Leader</option>
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
import { motion } from "framer-motion";
import Section from "./Section";
import { Gradient } from "./design/Services";

const AwardCategories = () => {
  return (
    <Section crosses id="awards">
      <Gradient />
      
      <div className="container ">
      <div >
          <motion.h1 
            className="text-purple-500 text-center text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            AWARD CATEGORIES
          </motion.h1>

          <motion.p 
            className="text-center text-n-2 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            WE ARE ACCEPTING NOMINATIONS ACROSS SEVERAL INDIVIDUAL AND ORGANIZATIONS CATEGORIES.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Individual Categories */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-center text-2xl text-n-1 mb-6">INDIVIDUAL CATEGORIES:</h3>
              <p className="text-center text-n-2 mb-6 text-sm">
                THESE AWARDS RECOGNIZE INDIVIDUAL EXCELLENCE IN LEVERAGING AI AND ANALYTICS ACROSS
                VARIOUS ASPECTS OF BANKING AND FINANCIAL SERVICES.
              </p> <br/>
              <div className="space-y-4">
                {[
                  "Chief Information Officer 2025- Government Sector",
                  "Chief Information Officer 2025- Private Sector",
                  "Chief Digital Officer 2025- Government Sector",
                  "Chief Digital Officer 2025- Private Sector",
                  "Chief Data Officer 2025- Government Sector",
                  "Chief Data Officer 2025- Private Sector",
                  "Chief Innovation Officer 2025- Government Sector",
                  "Chief Innovation Officer 2025- Private Sector",
                  "Chief Executive Officer 2025- Government Sector",
                  "Chief Executive Officer 2025- Private Sector",
                  "Chief Analytics Leader 2025- Government Sector",
                  "Chief Analytics Leader 2025- Private Sector",
                  "Leader in Digital Transformation 2025",
                  "Best AI Strategist 2025",
                  "Best Advanced Analytics Leader 2025",
                  "Best Customer Experience Leader 2025",
                  "Best Data Leader 2025",
                  "Innovative Woman of the Year 2025",
                  "Next-Gen AI Leader 2025",
                  "Leader in AI Governance & Ethics 2025",
                  "Leader in Data Governance 2025",
                  "Trailblazer in Gen AI 2025",
                  "Leader in Risk Analytics 2025",
                  "Best Business Intelligence Leader"
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="relative z-1 p-0.25 rounded-lg bg-conic-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative p-4 bg-n-8 rounded-lg text-center text-n-1 hover:bg-violet-800/80 transition-colors">
                      {category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Organization Categories */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-center text-2xl text-n-1 mb-6">ORGANIZATION CATEGORIES:</h3>
              <p className="text-center text-n-2 mb-6 text-sm">
                THESE CATEGORIES CELEBRATE BANKS AND FINANCIAL INSTITUTIONS LEADING THE WAY IN AI
                AND ANALYTICS, FOCUSING ON INNOVATION, CUSTOMER ENGAGEMENT, OPERATIONAL EFFICIENCY,
                AND COLLABORATION.
              </p>
              <div className="space-y-4">
                {[
                  "AI Project of the Year 2025",
                  "Best Use Case of GenAI 2025",
                  "AI-based Cybersecurity Innovation 2025",
                  "Best Cloud Transformation Project 2025",
                  "Best Customer Experience Solution of the Year 2025",
                  "Excellence in Customer Data Analytics 2025",
                  "Best Data Analytics Project 2025",
                  "Best Data Protection Innovation of the Year 2025",
                  "Best Data Governance Initiative 2025",
                  "Best Digital Excellence of the Year 2025",
                  "Best Emerging Tech in AI of the Year 2025",
                  "Best Enterprise Digital Transformation of the Year 2025",
                  "Best Use Case of Conversational AI of the Year 2025",
                  "Best Use of Cutting-Edge AI Solutions 2025",
                  "Customer Intelligence Project of the Year 2025",
                  "Emerging Technology Initiative 2025",
                  "Excellence in AI-Driven Data Analytics 2025",
                  "Excellence in Business Intelligence 2025",
                  "Excellence in Business Intelligence & Data-Driven Innovation 2025",
                  "Excellence in Customer Insights and Analytics 2025",
                  "Excellence in Digital and Innovation 2025",
                  "Innovative AI-Powered Analytics Project of the Year 2025",
                  "Transformative Digital Project of the Year 2025",
                  "Next-Gen Technology Initiative 2025"
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="relative z-1 p-0.25 rounded-lg bg-conic-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative p-4 bg-n-8 rounded-lg text-center text-n-1 hover:bg-violet-800/80 transition-colors">
                      {category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AwardCategories;